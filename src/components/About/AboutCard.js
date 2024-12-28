import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Ivy Njoroge </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            <br />
            I specialize in building responsive, accessible, and performance-driven websites using technologies like HTML, CSS, JavaScript, and modern frameworks such as React, Vue.js, and Angular.
            <br />
            With a keen eye for design and attention to detail, I enjoy transforming complex ideas into seamless digital experiences that meet both user and business needs.
            <br />
            <br />
            I’m always eager to learn and stay updated on the latest web development trends, tools, and frameworks like SASS, Tailwind CSS, TypeScript, Next.js, and Node.js. 
            <br />
            Beyond coding, I love collaborating with teams, solving challenging problems, and contributing to open-source projects. Let’s work together to create something exceptional!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Personal Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons or Coding Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Using technology to make life easier"{" "}
          </p>
          <footer className="blockquote-footer">Ivy Njoroge</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
