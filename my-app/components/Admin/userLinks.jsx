import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function UserLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Función asíncrona dentro de useEffect
    const fetchLinks = async () => {
      const { data, error } = await supabase.from("links").select("*");

      if (error) {
        console.error("Error fetching links:", error.message);
      } else {
        setLinks(data);
      }
    };

    fetchLinks();
  }, []);

  return (
    <ul>
      {links.map((item) => (
        <li key={item.id}>{item.name}</li> // Asegúrate de que cada item tenga una clave única, como "id"
      ))}
    </ul>
  );
}
