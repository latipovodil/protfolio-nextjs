import Image from "next/image";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="projects">
      <h3 className="about__title">Projects</h3>

      <div className="projects__el">
        {projects.map((project) => (
          <div key={project}>
            <Image
              src="https://w7.pngwing.com/pngs/894/660/png-transparent-responsive-web-design-web-development-computer-icons-cross-platform-web-design-angle-web-design-text.png"
              alt="img"
            />
          </div>
        ))}
      </div>

      <div className="projects__animation"></div>
    </div>
  );
}
