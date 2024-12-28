import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fit from "../../Assets/Projects/fit.png";
import grilli from "../../Assets/Projects/grilli.png";
import hoo from "../../Assets/Projects/hoo.png";
import iphone from "../../Assets/Projects/iphone.png";
import wave from "../../Assets/Projects/wave.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoo}
              isBlog={false}
              title="HooBank"
              description="HooBank is a modern payment platform website built with React.js and Tailwind CSS. This project emphasizes clean, responsive, and accessible UI/UX design, showcasing a streamlined way to manage payments with a focus on ease, reliability, and security. With smooth interactions and a modern layout, this website is ideal for users looking to simplify their financial transactions."
              ghLink="https://github.com/Ivy-NW/hoobank"
              demoLink="https://hoobank-2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wave}
              isBlog={false}
              title="Brainwave"
              description="This project uses React.js for building the user interface and Tailwind CSS for styling. It also includes additional dependencies for smooth parallax scrolling and responsive design."
              ghLink="https://github.com/Ivy-NW/brainwave"
              demoLink="https://brainwave1.vercel.app/#login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iphone}
              isBlog={false}
              title="Iphone 15 Pro"
              description="This project is a clone of the official Apple iPhone 15 Pro website, built using React.js and TailwindCSS. It emphasizes dynamic animations and 3D model rendering of the iPhone 15 Pro in various colors and shapes. The project leverages GSAP (Greensock Animations) for smooth animations and Three.js for 3D modeling."
              ghLink="https://github.com/Ivy-NW/iphone15"
              demoLink="https://iphone15-1.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grilli}
              isBlog={false}
              title="Grilli"
              description="Grilli is a fully responsive restaurant website designed to provide an elegant dining experience online. Built using HTML, CSS, and JavaScript, Grilli offers a seamless browsing experience across all devices."
              ghLink="https://github.com/Ivy-NW/grilli"
              demoLink="https://grilli-olive.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fit}
              isBlog={false}
              title="Fitlife"
              description="Fitlife is a fully responsive fitness website designed to motivate and assist individuals on their fitness journey. Built using HTML, CSS, and JavaScript, Fitlife provides a seamless experience across all devices."
              ghLink="https://github.com/Ivy-NW/fitlife"
              demoLink="https://fitlife-1.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
