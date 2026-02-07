import React from "react";

const organizersData = [
  [
    {
      name: "Raj Shinde",
      role: "LEAD",
      img: "/images/lead.jpg",
    },
    {
      name: "Saloni Sinha",
      role: "CO-LEAD",
      img: "/images/co-lead.jpeg",
    },
    {
      name: "Sumit Kadam",
      role: "MEDIA HEAD",
      img: "/images/media-head.jpeg",
    },
  ],
    [
    {
      name: "Yadnyesh Borole",
      role: "WEB HEAD",
      img: "/images/WEB-head.png",
    },
    {
      name: "Piyusha Amrutkar",
      role: "WEB CO-HEAD",
      img: "/images/WEB-cohead.jpg",
    },
    {
      name: "Kajal Jain",
      role: "CP HEAD",
      img: "/images/cp-head.jpg",
    },
  ],
  [
    {
      name: "Gauri Singhal ",
      role: "CP CO-HEAD",
      img: "/images/cp-cohead.jpg",
    },
    {
      name: "Sarthak  Pawar",
      role: "TECHNICAL HEAD",
      img: "/images/technical-head.jpg",
    },
    {
      name: "Vedant Buwa",
      role: "TECHNICAL CO-HEAD",
      img: "/images/technical-cohead.jpeg",
    },
  ],
    [
    {
      name: " Suhan Kansara",
      role: "EVENT HEAD",
      img: "/images/event-head.jpg",
    },
    {
      name: "Anushka Bhujbal",
      role: "EVENT CO-HEAD",
      img: "/images/event-cohead.jpg",
    },
    {
      name: "Shreyas Pawar",
      role: "MARKETING HEAD",
      img: "/images/marketing-head.jpg",
    },
  ],
  [
  {
      name: "Rajshree Karlekar",
      role: "MARKETING CO-HEAD",
      img: "/images/marketing-cohead.jpg",
    },
    {
      name: "Rajat Poddar",
      role: "EXECUTIVE HEAD",
      img: "/images/executive-head.jpeg",
    },
 
      {
        name: "Krushna Pawar",
        role: "EXECUTIVE COHEAD",
      img: "/images/executive-cohead.jpg",
    },
      ],
    [
    {
      name: "Sarthak Chaudhari",
      role: "SOCIAL MEDIA HEAD",
      img: "/images/Social-Media_Head.jpeg",
    },
    ,
    {
      name: "Atharva Mane",
      role: "SOCIAL MEDIA CO-HEAD",
      img: "/images/Social-Media_coHead.jpg",
    },

    {
      name: "Parth Shinde",
      role: "EDITORIAL HEAD",
      img: "/images/Editorial-Head.jpg",
    },
  ],
  [
    {
      name: "Soham Patil",
      role: "DESIGN HEAD",
      img: "/images/design-head.jpg",
    },
    {
      name: "Anisha Agrawal",
      role: "DESIGN CO-HEAD",
      img: "/images/design-cohead.jpg",
    },
  ],
 
 
];

const Team = () => {
  return (
    <section className="common-section mb-5 pt-5 bg-color" id="team">
      <div className="container text-center common-title">
        <h2 className="common-heading text-white">Organizers</h2>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            {organizersData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {organizersData.map((slide, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <div className="row g-4">
                  {slide.map((member, i) => (
                    <div key={i} className="col-xxl-4">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="card p-3" style={{ width: "18rem" }}>
                          <img
                            src={member.img}
                            className="card-img-top"
                            alt={member.name}
                          />
                          <div className="card-body text-center">
                            <p className="card-title mb-3 fw-bold fs-5">
                              {member.name}
                            </p>
                            <p className="card-text">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
