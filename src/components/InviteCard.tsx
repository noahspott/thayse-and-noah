import Button from "./Button";
import { useState, useEffect } from "react";

const ENGLISH = "en-US";
const PORTUGUESE = "pt-BR";

const contentEnglish = {
  dates: ["May 17, 2025", "Saturday 2:30 PM"],
  venues: [
    {
      event: "Ceremony",
      name: "Capela do Divino Espírito",
      address: "Praça Getúlio Vargas, 212 - Centro, Florianópolis - SC, Brazil",
    },
    {
      event: "Reception",
      name: "Lira Tênis Clube",
      address: "Rua Felipe Schmidt, 636 - Centro, Florianópolis - SC, Brazil",
    },
  ],
  buttons: [
    {
      label: "Visit Website",
      href: "https://noivos.casar.com/thayse-e-noah/",
    },
    {
      label: "Travel Info",
      href: "/info",
    },
  ],
};
const contentPortuguese = {
  dates: ["17 de Maio de 2025", "Sábado, 14h30"],
  venues: [
    {
      event: "Cerimônia",
      name: "Capela do Divino Espírito",
      address: "Praça Getúlio Vargas, 212 - Centro, Florianópolis - SC, Brasil",
    },
    {
      event: "Recepção",
      name: "Lira Tênis Clube",
      address: "Rua Felipe Schmidt, 636 - Centro, Florianópolis - SC, Brasil",
    },
  ],
  buttons: [
    {
      label: "Visitar Site",
      href: "https://noivos.casar.com/thayse-e-noah/",
    },
    {
      label: "Informações de Viagem",
      href: "/info",
    },
  ],
};

export default function InviteCard() {
  const [content, setContent] = useState(contentEnglish);
  const [language, setLanguage] = useState("en-US");

  useEffect(() => {
    const userLanguage = navigator.language;
    if (userLanguage === "pt-BR") {
      setLanguage("pt-BR");
      setContent(contentPortuguese);
    }
  }, [language]);

  return (
    <div className="relative z-10 py-20">
      <div className="max-w-lg bg-gradient-to-br from-white/90 via-white/100 to-white/70 px-4 py-8 duration-200 xs:p-8 md:p-10">
        <div className="border-b-2 border-t-2 border-white px-4 py-8 duration-200 xs:border-2 xs:p-8 md:p-10">
          <p className="playfair mb-1 text-3xl font-black text-dark-2 xs:text-4xl">
            {content.dates[0]}
          </p>
          <p className="mb-8 text-lg uppercase tracking-widest text-dark-3">
            {content.dates[1]}
          </p>

          <div className="flex flex-col gap-4">
            {content.venues.map((venue) => {
              return (
                <div className="flex flex-col gap-1" key={venue.name}>
                  <p className="text-sm uppercase tracking-widest text-dark-3">
                    {venue.event}
                  </p>
                  <p className="font-bold tracking-wider xs:text-lg">
                    {venue.name}
                  </p>
                  <p className="text-sm xs:text-base">{venue.address}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 font-bold">
            <Button
              label={content.buttons[0].label}
              styles="text-center hover:text-primary-500 border-2 border-primary-500 hover:bg-transparent bg-primary-500 text-white"
              href={content.buttons[0].label}
            />
            {language === ENGLISH && (
              <Button
                label={content.buttons[1].label}
                styles="text-center text-dark-3 border-2 border-dark-3 bg-transparent hover:bg-dark-3 hover:text-white"
                href={content.buttons[1].href}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
