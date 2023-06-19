import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">VAPT, OSINT, Digital Forensics, XDR, EDR, Firewall, Email Security and many other cyber security services and Solutions</b>
              </i>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="purple">Cyber Security Services and Solutions</b> and
                also in areas related to{" "}
                <b className="purple">
                  Cyber Crime Investigation and Digital Forensics Investigation.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for Cyber Security
              with <b className="purple">Cyber Crime Investigation</b> and
              <i>
                <b className="purple">
                  {" "}
                  Social Enigineering,
                </b>
              </i>
              <i>
                <b className="purple">
                  {" "}
                  Cyberbulling and Harassment,
                </b>
              </i>
              <i>
                <b className="purple">
                  {" "}
                  Hack Recovery,
                </b>
              </i>
              <i>
                <b className="purple">
                  {" "}
                  Financial Fraud Analysis,
                </b>
              </i>
              <i>
                <b className="purple">
                  {" "}
                  Cyber Criminals Identification
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">Personal Cyber Security.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sabbirceh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/salehin007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sabbir-salehin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iamsabbirsalehin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
