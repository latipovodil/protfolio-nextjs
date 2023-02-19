import React from "react";
import ExperCard from "./experCard";

type Props = {};

export default function Exper({}: Props) {
  return (
    <div className="experince">
      <div>
        <h3 style={{ textAlign: "center" }} className="about__title">
          Experience
        </h3>
      </div>

      <div className="exper__el">
        <ExperCard />
        <ExperCard />
        <ExperCard />
        <ExperCard />
      </div>
    </div>
  );
}
