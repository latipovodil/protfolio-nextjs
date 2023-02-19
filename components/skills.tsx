import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="skills">
      <h3 className="about__title">Skills</h3>

      <h3>Hover over a skill for skill for curentyly proficencly</h3>

      <div className="skills__el">
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
      </div>
    </div>
  );
}
