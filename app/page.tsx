"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [numeroSecreto, setNumeroSecreto] = useState("");
  const [intento, setIntento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [intentos, setIntentos] = useState(0);
  const [record, setRecord] = useState<number | null>(null);

  useEffect(() => {
    generarNumero();

    const mejorRecord = localStorage.getItem("record");
    if (mejorRecord) {
      setRecord(Number(mejorRecord));
    }
  }, []);

  const generarNumero = () => {
    const numero = Math.floor(1000 + Math.random() * 9000).toString();
    setNumeroSecreto(numero);
  };

  const verificarIntento = () => {
    if (intento.length !== 4) {
      setMensaje("Ingresa un número de 4 cifras");
      return;
    }

    const nuevosIntentos = intentos + 1;
    setIntentos(nuevosIntentos);

    if (intento === numeroSecreto) {
      setMensaje(`🎉 ¡Ganaste en ${nuevosIntentos} intentos!`);

      if (!record || nuevosIntentos < record) {
        localStorage.setItem("record", nuevosIntentos.toString());
        setRecord(nuevosIntentos);
      }

      generarNumero();
      setIntentos(0);
      setIntento("");
      return;
    }

    let coincidencias = 0;

    for (let i = 0; i < 4; i++) {
      if (intento[i] === numeroSecreto[i]) {
        coincidencias++;
      }
    }

    if (coincidencias >= 3) {
      setMensaje("🔥 Muy cerca");
    } else if (coincidencias >= 1) {
      setMensaje("😎 Hay números correctos");
    } else {
      setMensaje("❄️ Muy lejos");
    }

    setIntento("");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111827",
        color: "white",
      }}
    >
      <div
        style={{
          background: "#1f2937",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h1>Código Secreto 🔐</h1>

        <p>Adivina el número secreto de 4 cifras</p>

        <input
          type="number"
          value={intento}
          onChange={(e) => setIntento(e.target.value)}
          placeholder="1234"
          style={{
            padding: "10px",
            width: "100%",
            marginTop: "10px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          onClick={verificarIntento}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Intentar
        </button>

        <h3 style={{ marginTop: "20px" }}>{mensaje}</h3>

        <p>Intentos: {intentos}</p>

        {record && <p>🏆 Récord: {record} intentos</p>}
      </div>
    </main>
  );
}