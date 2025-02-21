"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const text = searchParams.get("text");
  const [status, setStatus] = useState("Procesando pago...");

  useEffect(() => {
    async function addMessage() {
      if (!text) return setStatus("Error: No se recibió el mensaje");
    
      try {
        console.log("Agregando mensaje:", text);
        setStatus("✅ Pago exitoso y mensaje agregado.");
      } catch (error) {
        setStatus(`❌ Error: ${error.message}`);
      }
    }
    

    addMessage();
  }, [text]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">{status}</h1>
      <div>
        <h2>Compraste</h2>
        <h1>{text}</h1>
      </div>
    </div>
  );
}
