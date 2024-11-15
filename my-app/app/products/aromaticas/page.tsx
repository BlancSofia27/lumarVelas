"use client";
import velas from "@/app/velas.json";
import { Vela } from "@/types/product";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"; // O el componente que estés utilizando

const AromaticasPage = () => {
  const velasAromaticas = velas.filter((vela) => vela.categoria === "Aromática");

  return (
    <div className="p-4">
      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold">Velas Aromáticas</h1>
        <p className="mt-2 text-lg text-gray-600">
          Disfruta de las mejores velas aromáticas para crear el ambiente perfecto.
        </p>
      </section>

      {/* Grid de Velas */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {velasAromaticas.map((vela: Vela) => (
          <Skeleton key={vela.id} className="p-4" title={vela.nombre}>
            <div className="flex flex-col items-center">
              <Image
                src={vela.imagen}
                alt={vela.nombre}
                width={96}
                height={96}
                className="h-24 w-24 rounded-md object-cover"
              />
              <h3 className="mt-2 text-lg font-semibold">{vela.nombre}</h3>
              <p className="text-sm text-muted-foreground">{vela.descripcion}</p>
              <span className="text-md font-bold">${vela.precio}</span>
              <span className="text-sm mt-1">{vela.categoria}</span>
            </div>
          </Skeleton>
        ))}
      </div>
    </div>
  );
};

export default AromaticasPage;
