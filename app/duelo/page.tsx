"use client";

import { useState } from "react";

export default function DueloIA() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  const numeroIA = Math.floor((min + max) / 2);

  const masAlto = () => {
    setMin(numeroIA + 1);
  };

  const masBajo = () => {
    setMax(numeroIA - 1);
  };

  const correcto = () => {
    alert("😎 ¡La IA adivinó tu número!");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h1>Duelo contra IA 🤖</h1>

        <p>Piensa un número del 1 al 100</p>

        <h2>{numeroIA}</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button onClick={masAlto}>
            Mi número es MÁS ALTO
          </button>

          <button onClick={masBajo}>
            Mi número es MÁS BAJO
          </button>

          <button onClick={correcto}>
            ¡Correcto!
          </button>
        </div>
      </div>
    </main>
  );
}