import React, { useState } from "react";
import img1 from "../../Assets/LandingPage/img1.png";
import img2 from "../../Assets/LandingPage/img2.png";
import img3 from "../../Assets/LandingPage/img3.png";
import img4 from "../../Assets/LandingPage/img4.png";
import Star from "./Star";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Testimonials() {
  let testimonialsOfUser = [
    {
      clientDescription:
        "Aina made my bridal dreams come true! As the Creative Director of a fashion magazine, I appreciate the artistry and attention to detail.",
      clientImage: img1,
      clientName: "Anisha Gupta",
      clientPost: "Creative Director",
    },
    {
      clientDescription:
        "I discovered Aina for my sister's wedding, and it was a game changer. Being a wedding planner, I have an eye for perfection, and Aina delivered just that.",
      clientImage: img2,
      clientName: "Vikram Sharma",
      clientPost: "Wedding Planner",
    },
    {
      clientDescription:
        "As an art curator with an eye for authenticity, I found their fusion of traditional Nepali elements with contemporary design truly captivating.",
      clientImage: img3,
      clientName: "Sanni Rai",
      clientPost: "Art Creator",
    },
    {
      clientDescription:
        "As a lifestyle blogger, authenticity is key, and Aina's pieces tell a story of cultural pride and individual expression. ",
      clientImage: img4,
      clientName: "Darrell Steward",
      clientPost: "Lifestyle blogger",
    },
  ];
  return (
    <>
      <div className="Testimonial-container">
        <Container>
            <Row className="justify-content-md-sm-xs-center">
              <Col md={12} sm={12} xs={12}>
                <h1>Testimonials</h1>
              </Col>
            </Row>
          <div className="Testimonials">
            <Row className="justify-content-md-sm-xs-center">
              {testimonialsOfUser.map((testimonial, index) => (
                <Col md={6} sm={12} xs={12}>
                  <div className="client-review-container">
                    <div className="client-review-container-description">
                      <div>
                        {" "}
                        <Star /> <p>{testimonial.clientDescription}</p>
                        <div className="client-review-container-description-user-description">
                          <div className="client-review-container-description-user-description__name">
                            {testimonial.clientName} &nbsp; &nbsp;
                          </div>
                          <div className="client-review-container-description-user-description__position">
                            {testimonial.clientPost}
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={testimonial.clientImage}
                          alt="Image of Reviewer"
                          className="client-review-container__img"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="Testimonials-Md">
            <Row className="justify-content-md-sm-xs-center mb-5">
              {testimonialsOfUser.map((testimonial, index) => (
                <Col md={12} sm={12} xs={12}>
                  <div className="client-review-container">
                    <div className="client-review-container-description">
                      <div>
                        {" "}
                        <Star /> <p>{testimonial.clientDescription}</p>
                        <div className="client-review-container-description-user-description">
                          <div className="client-review-container-description-user-description__name">
                            {testimonial.clientName} &nbsp; &nbsp;
                          </div>
                          <div className="client-review-container-description-user-description__position">
                            {testimonial.clientPost}
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={testimonial.clientImage}
                          alt="Image of Reviewer"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Testimonials;
