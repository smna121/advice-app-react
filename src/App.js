import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
export const App = () => {
  const [advice, setAdvice] = useState("");
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!!</span>
        </button>
      </div>
    </div>
  );
};
