import React from "react";
import { useState } from "react";
import './Oyun.css'
export default function Oyun() {
  const [UserChoice, setUserChoice] = useState(null);
  const [ComputerChoice, setComputerChoice] = useState(null);
  const [Result, setResult] = useState();
  const choices = ["Tas", "Kagiz", "Makas"];
  function ComputerChoose() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
  }
  function Compored(user, computer) {
    if (user === computer) {
      return "berabere";
    } else if (
      (user === "Tas" && computer === "Makas") ||
      (user === "Kagiz" && computer === "Tas") ||
      (user === "Makas" && computer === "Kagiz")
    ) {
      return "Qazandin";
    } else {
      return "uduzdun";
    }
  }
  function Play(UserChoice) {
    const ComputerChoice = ComputerChoose();
    setUserChoice(UserChoice);
    setComputerChoice(ComputerChoice);
    const ResultOFCompored = Compored(UserChoice, ComputerChoice);
    setResult(ResultOFCompored);
  }
  return (
    <>
      <div className="Game">
        <div className="Game_container">
          <div className="Game_container_text">
            <h1 className="Game_container_text_h1">Tas Kagiz Makas oyunu</h1>
            <p className="Game_container_text_p">Oyunu oynmaq ucun asagidaki sizin secimininze uygun buttonu klikleyin</p>
          </div>
          <div className="Game_container_p">
            <p>Istifadecinin secimi: {UserChoice}</p>
            <p>Komputerin secimi: {ComputerChoice}</p>
            <p>Netice: {Result}</p>
          </div>
          <div className="Game_container_button">
            <button onClick={() => Play("Tas")}>Tas</button>
            <button onClick={() => Play("Kagiz")}>Kagiz</button>
            <button onClick={() => Play("Makas")}>Makas</button>
          </div>
        </div>
      </div>
    </>
  );
}
