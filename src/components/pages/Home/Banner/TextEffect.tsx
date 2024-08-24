"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const TextEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["business needs", "creative ideas", "customers satisfaction"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TextEffect;
