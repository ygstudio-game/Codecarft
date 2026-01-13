import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import multer from "multer";
import fetch from "node-fetch";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
// Allow your specific frontend domain or * for all
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// 1. Configure Multer (Ram Storage for fast upload)
const upload = multer({ storage: multer.memoryStorage() });

// 2. Configure ImageKit
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

app.get("/", (req, res) => {
  res.send("Server is alive!");
});

// 3. Upload Endpoint
app.post("/upload", upload.single("payment"), async (req, res) => {
  try {
    // Extract text fields
    const { 
      leaderName, 
      email, 
      contact, 
      college,
    } = req.body;

    // Check if file exists
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No payment screenshot uploaded" });
    }

    // 4. Upload to ImageKit
    const imageResult = await imagekit.upload({
      file: req.file.buffer, // The file buffer from RAM
      fileName: `pay_${Date.now()}_${req.file.originalname}`,
      folder: "/codearena_payments" // Optional folder in ImageKit
    });
    console.log("ImageKit Upload Result:", imageResult);
    // 5. Prepare Payload for Google Sheet
    // We map frontend names to match what Google Script expects
    const sheetPayload = {
      action: "register",
      name: leaderName,       // GAS expects 'name'
      email: email,           // GAS expects 'email'
      phone: contact,         // GAS expects 'phone'
      college: college,       // GAS expects 'college'
      paymentImage: imageResult.url // We send the ImageKit URL as the link
    };

    // 6. Send to Google Apps Script
    const sheetResponse = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
      method: "POST",
      body: JSON.stringify(sheetPayload),
      headers: { "Content-Type": "application/json" }
    });

    const responseData = await sheetResponse.json();

    // 7. Response to Client
    res.json({
      success: true,
      message: "Registration successful",
      imageUrl: imageResult.url,
      sheetData: responseData
    });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ success: false, error: error.message || "Internal Server Error" });
  }
});

 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});