import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="project-card project-tilt"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="project-image" style={{ position: "relative" }}>
          <img
            src={image}
            alt="project_image"
            className="project-image__img"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px 10px 0 0",
            }}
          />

          <div
            className="project-image__overlay"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          >
<div
  onClick={() => window.open (source_code_link, '_blank')}
  className="project-image__overlay-icon"
  style={{
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }}
>
  <img
    src={github}
    alt="source code"
    className="project-image__overlay-icon-img"
    style={{
      width: '60%',
      height: 'auto',
    }}
  />
</div>;

          </div>
        </div>

        <div
          className="project-details"
          style={{
            padding: "15px",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <h3
            className="project-details__name"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {name}
          </h3>
          <p
            className="project-details__description"
            style={{ fontSize: "14px", color: "#555555" }}
          >
            {description}
          </p>
        </div>

        <div className="project-tags" style={{ marginTop: "10px" }}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`project-tags__tag ${tag.color}`}
              style={{
                display: "inline-block",
                fontSize: "12px",
                padding: "4px 8px",
                marginRight: "5px",
                borderRadius: "4px",
              }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`section-subtext ${styles.sectionSubText}`}
          style={{
            fontSize: "16px",
            color: "#888888",
            marginBottom: "10px",
          }}
        >
          My work
        </p>
        <h2
          className={`section-headtext ${styles.sectionHeadText}`}
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="section-description">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="section-description__text"
          style={{
            fontSize: "16px",
            color: "#555555",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div
        className="project-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
