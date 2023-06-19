import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SABBIR SALEHIN </span>
            from <span className="purple"> Bangladesh</span>
            <br />I am working as a Cyber Security Analyst at Dekko ISHO Technologies Ltd.
            <br />
            <br />
            Apart from Cyber Security, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build positive things that make a difference between others!"{" "}
          </p>
          <footer className="blockquote-footer">SABBIR SALEHIN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
