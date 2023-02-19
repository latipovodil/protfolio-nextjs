"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";
import BackgroundCircles from "./backgroundCircles";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const obj = {
    words: [
      "Hi, my name is Odilbek",
      "I like writing code in react and next",
      "<Odilbek.{jsx,tsx,ts,js,html,scss,css} />",
    ],
    loop: true,
    delaySpeed: 2000,
  };
  const [text, count] = useTypewriter(obj);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BackgroundCircles />{" "}
      <div
        className="hero__img-wraper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "120px", borderRadius: "50%" }}
          src="https://i.pinimg.com/originals/96/ac/ac/96acac30a26959be8e75dc18b84c8dff.jpg"
          alt="my img"
        />
        <h2
          style={{
            fontSize: "20",
            color: "gray",
            paddingBottom: "2px",
            fontWeight: "10px",
            letterSpacing: "10px",
          }}
        >
          ODILBEK LATIPOV
        </h2>
        <h1 className="hero__title">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div>
          <Link href="#about">
            <button className="hero__buttons">About</button>
          </Link>
          <Link href="#expreince">
            <button className="hero__buttons">Expreince</button>
          </Link>
          <Link href="#skills">
            <button className="hero__buttons">Skills</button>
          </Link>
          <Link href="#project">
            <button className="hero__buttons">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
