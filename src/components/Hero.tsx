"use client";

import heroImg from "../imagen/fondo.png";

export default function Hero() {
  const imgSrc =
    (heroImg as unknown as { src: string })?.src ?? (heroImg as unknown as string);

  return (
    <section className="fixed inset-0 z-0">
      
      <div className="absolute inset-0">
     
        <img
          src={imgSrc}
          alt="Hero background"
          className="h-full w-full object-cover"
        />
      </div>

   
      <div className="absolute inset-0 bg-black/45" />
    </section>
  );
}
