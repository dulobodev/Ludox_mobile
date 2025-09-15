import { useState, useEffect } from "react";
import { Text } from "react-native";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(178160); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dias = Math.floor(timeLeft / (60 * 60 * 24));
  const horas = Math.floor((timeLeft % (60 * 60 * 24)) / 3600);
  const minutos = Math.floor((timeLeft % 3600) / 60);
  const segundos = timeLeft % 60;

  const format = (num: number): string => num.toString().padStart(2, '0');

  return (
    <Text style={{ color: "#7B2FFF", fontFamily: "IstokWeb-Bold", fontSize: 15 }}>
      {format(dias)}D {format(horas)}:{format(minutos)}:{format(segundos)}
    </Text>
  );
}