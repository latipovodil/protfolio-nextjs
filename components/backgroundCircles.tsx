import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "400px",
        flexDirection: "column",
      }}
    >
      <div className="hero__circle" />
      <div className="hero__circle" />
      <div className="hero__circle" />
      <div className="hero__circle" />
      <div className="hero__circle" />
    </div>
  );
}
