import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Code, Upload, Smartphone, CheckCircle, Copy, User } from 'lucide-react';
import qrcode from '../../assets/PaymentQRCode.jpg';
// Environment variables
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const UPI_ID = "rajshinde071006-1@okicici";  
const REGISTRATION_FEE = 50;

export function RegistrationForm() {
  const fileInputRef = useRef(null);
  
  // --- State ---
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [paymentFile, setPaymentFile] = useState(null);
  
  // Solo Participant Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    college: ''
  });

  // Line numbers for the IDE visualization
  const lineNumbers = Array.from({ length: 25 }, (_, i) => i + 1);

  // --- Handlers ---

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    const data = new FormData();

    // Mapping fields to match your existing Backend API expectations
    // We treat the solo participant as the "Leader"
    data.append("leaderName", formData.name);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    data.append("college", formData.college);
    
    // Default/Hardcoded values for Solo Event compatibility
    data.append("team", `Solo-${formData.name.split(' ')[0]}`); 
    data.append("members", "1"); 
    data.append("memberList", "[]"); // Empty list

    // Append Payment File
    if (paymentFile) {
      data.append("payment", paymentFile);
    } else {
      setLoading(false);
      setStatus({ type: 'error', message: 'Payment screenshot is required.' });
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/upload`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Registration failed");
      }

      setStatus({ type: 'success', message: 'Registration Successful! Check your email.' });
      console.log("Server Response:", result);
      // Reset Form
      setFormData({ name: '', email: '', contact: '', college: '' });
      setPaymentFile(null);
      
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: err.message || "Server Error. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration" className="py-16 md:py-24 px-4 md:px-6 relative text-gray-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 border border-[--logic-blue] rounded-full bg-[--logic-blue]/10 text-[--logic-blue] font-mono text-xs"
          >
            Solo Event • Feb 6th
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CodeCraft <span className="text-[--logic-blue]">4.0</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-2">
            Round 1: MindForge • Round 2: Real-World DSA
          </p>
          <p className="text-[--optimization-green] font-mono text-sm">
            Prize Pool: ₹10,000 | Fee: ₹{REGISTRATION_FEE}
          </p>
        </div>

        {/* The IDE Container */}
        <motion.div 
          className="rounded-xl overflow-hidden border border-gray-800 bg-[#0d0d0d] shadow-2xl relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* VS Code Style Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-[#0d0d0d] px-3 py-1 rounded-t-md border-t border-x border-gray-800 translate-y-[5px]">
                <User className="w-4 h-4 text-[--logic-blue]" />
                <span>participant_data.js</span>
              </div>
            </div>
            <div className="text-xs font-mono text-gray-500">Node.js Environment</div>
          </div>

          <div className="flex relative">
            {/* Line Numbers Sidebar */}
            <div className="hidden md:block w-12 bg-[#0d0d0d] text-right pr-3 pt-6 text-gray-700 font-mono text-sm select-none border-r border-gray-900">
              {lineNumbers.map(n => <div key={n} className="leading-8">{n}</div>)}
            </div>

            {/* Form Content Area */}
            <div className="flex-1 p-4 md:p-8 font-mono text-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Event Config Comments */}
                <div className="text-gray-500 text-xs md:text-sm">
                  <div>// Event: CodeCraft X CodeArena 4.0</div>
                  <div>// Time: 9:00am - 5:00pm</div>
                  <div>// Location: PCCOER Ravet</div>
                </div>

                {/* 2. Participant Object */}
                <div className="space-y-4">
                  <div className="text-gray-500">
                    <span className="text-purple-400">const</span> <span className="text-yellow-200">participant</span> = {'{'}
                  </div>
                  
                  <div className="pl-4 md:pl-8 grid gap-4 border-l border-gray-800 ml-2">
                    
                    {/* Name Input */}
                    <div className="flex items-center">
                      <span className="text-cyan-400 mr-2 min-w-[60px]">name:</span>
                      <input 
                        type="text" required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}

                        placeholder="'John Doe'"
                        className="bg-transparent border-b border-gray-800 focus:border-[--logic-blue] text-orange-300 w-full focus:outline-none px-2 py-1 transition-colors placeholder:text-gray-700"
                      />
                      <span className="text-gray-500">,</span>
                    </div>

                    {/* Email Input */}
                    <div className="flex items-center">
                      <span className="text-cyan-400 mr-2 min-w-[60px]">email:</span>
                      <input 
                        type="email" required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="'john@example.com'"
                        className="bg-transparent border-b border-gray-800 focus:border-[--logic-blue] text-orange-300 w-full focus:outline-none px-2 py-1 transition-colors placeholder:text-gray-700"
                      />
                      <span className="text-gray-500">,</span>
                    </div>

                    {/* Contact Input */}
                    <div className="flex items-center">
                      <span className="text-cyan-400 mr-2 min-w-[60px]">phone:</span>
                      <input 
                        type="tel" required 
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        placeholder="'9876543210'"
                        className="bg-transparent border-b border-gray-800 focus:border-[--logic-blue] text-orange-300 w-full focus:outline-none px-2 py-1 transition-colors placeholder:text-gray-700"
                      />
                      <span className="text-gray-500">,</span>
                    </div>

                     {/* College Input */}
                     <div className="flex items-center">
                      <span className="text-cyan-400 mr-2 min-w-[60px]">college:</span>
                      <input 
                        type="text" required 
                        value={formData.college}
                        onChange={(e) => setFormData({...formData, college: e.target.value})}
                        placeholder="'PCCOER'"
                        className="bg-transparent border-b border-gray-800 focus:border-[--logic-blue] text-orange-300 w-full focus:outline-none px-2 py-1 transition-colors placeholder:text-gray-700"
                      />
                      <span className="text-gray-500">,</span>
                    </div>
                  </div>
                  <div className="text-gray-500">{'};'}</div>
                </div>

                {/* 3. Payment Section (The "Terminal" Config) */}
                <div className="bg-[#050505] rounded-lg p-4 border border-gray-800 mt-6">
                  <div className="flex items-center gap-2 mb-4">
                     <Smartphone className="text-[--logic-blue]" size={16} />
                     <span className="text-gray-300 font-bold">Payment Gateway Interface</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                     {/* QR Code Side */}
                     <div className="text-center">
                        <div className="bg-white p-2 w-32 h-32 mx-auto rounded mb-3">
                           {/* Add your actual QR code image source here */}
                           <img 
                            src={qrcode} 
                            sralt="Payment QR" 
                            className="w-full h-full object-contain"
                           />
                        </div>
                        <div className="text-xs text-gray-400 mb-2 flex items-center justify-center gap-2">
                           {UPI_ID}
                           <button type="button" onClick={() => navigator.clipboard.writeText(UPI_ID)}><Copy size={12} /></button>
                        </div>
                        <div className="text-xl text-[--optimization-green]">
                           Total: ₹{REGISTRATION_FEE}
                        </div>
                     </div>

                     {/* Upload Side */}
                     <div className="flex flex-col justify-center">
                        <label className="text-xs text-gray-500 mb-2">// Upload Transaction Screenshot</label>
                        <div 
                           onClick={() => fileInputRef.current?.click()}
                           className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all ${
                              paymentFile ? 'border-[--optimization-green] bg-green-900/10' : 'border-gray-700 hover:border-[--logic-blue]'
                           }`}
                        >
                           <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                           
                           {paymentFile ? (
                              <div className="flex flex-col items-center text-[--optimization-green]">
                                 <CheckCircle className="mb-2" />
                                 <span className="text-xs truncate max-w-[200px]">{paymentFile.name}</span>
                              </div>
                           ) : (
                              <div className="flex flex-col items-center text-gray-400">
                                 <Upload className="mb-2" />
                                 <span className="text-xs">Click to upload .jpg/.png</span>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
                </div>

                {/* Submit Button & Status */}
                <div className="pt-4">
                   <motion.button
                     whileHover={{ scale: 1.01 }}
                     whileTap={{ scale: 0.99 }}
                     disabled={loading}
                     type="submit"
                     className={`w-full py-4 rounded font-bold flex items-center justify-center gap-3 transition-all ${
                        loading ? 'bg-gray-800 cursor-wait text-gray-500' : 'bg-gradient-to-r from-[--logic-blue] to-blue-700 text-white shadow-lg shadow-blue-900/20'
                     }`}
                   >
                      {loading ? (
                         <>Processing <span className="animate-pulse">...</span></>
                      ) : (
                         <><Send size={18} /> Initialize Registration</>
                      )}
                   </motion.button>

                   {/* Terminal Output for Status */}
                   <AnimatePresence>
                     {status.type !== 'idle' && (
                        <motion.div 
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           className={`mt-4 p-3 rounded text-xs font-mono border-l-4 ${
                              status.type === 'success' ? 'bg-green-900/20 border-green-500 text-green-400' : 'bg-red-900/20 border-red-500 text-red-400'
                           }`}
                        >
                           <span className="opacity-50">root@codearena:~$</span> {status.message}
                        </motion.div>
                     )}
                   </AnimatePresence>
                </div>

              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}