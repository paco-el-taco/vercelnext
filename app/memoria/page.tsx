"use client";

import { useEffect, useState } from "react";

export default function Memoria() {
  const [nivel, setNivel] = useState(1);
  const [secuencia, setSecuencia] = useState("");
  const [mostrar, setMostrar] = useState(true);
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    generarSecuencia();
  }, [nivel]);

  const generarSecuencia = () => {
    let nueva = "";

    for (let i = 0; i < nivel + 2; i++) {
      nueva += Math.floor(Math.random() * 10);
    }

    setSecuencia(nueva);
    setMostrar(true);
    setRespuesta("");
    setMensaje("");

    setTimeout(() => {
      setMostrar(false);
    }, 3000);
  };

  const verificar = () => {
    if (respuesta === secuencia) {
      setMensaje("✅ ¡Correcto!");
      setNivel(nivel + 1);
    } else {
      setMensaje("❌ Incorrecto");
    }
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
        <h1>Hackeo de Memoria 🧠</h1>

        <h2>Nivel {nivel}</h2>

        {mostrar ? (
          <h1 style={{ fontSize: "40px" }}>
            {secuencia}
          </h1>
        ) : (
          <>
            <input
              type="text"
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              placeholder="Escribe la secuencia"
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "10px",
                border: "none",
              }}
            />

            <button
              onClick={verificar}
              style={{
                marginTop: "15px",
                padding: "10px",
                width: "100%",
                border: "none",
                borderRadius: "10px",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Verificar
            </button>
          </>
        )}

        <p style={{ marginTop: "20px" }}>{mensaje}</p>
      </div>
    </main>
  );
}