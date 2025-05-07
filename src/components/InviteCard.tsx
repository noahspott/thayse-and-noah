import Button from "./Button";
import { useState, useEffect } from "react";

const logoPrimary500 = "/logo-primary-500.png";
const logoDark2 = "/logo-dark-2.png";
const logoDark3 = "/logo-dark-3.png";
const logoSrc = logoDark3;

const ENGLISH = "en-US";
const PORTUGUESE = "pt-BR";

const contentEnglish = {
  dates: ["May 17, 2025", "Saturday 2:30 PM"],
  venues: [
    {
      event: "Ceremony",
      name: "Capela do Divino Espírito Santo",
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
      className:
        "text-center hover:text-primary-500 border-2 border-primary-500 hover:bg-transparent bg-primary-500 text-white",
    },
    {
      label: "Send a Gift",
      href: "https://www.honeyfund.com/site/thayse-and-noah",
      className:
        "text-center hover:text-red-400 border-red-400 border-2 hover:border-red-400 hover:bg-transparent bg-red-400 text-white",
    },
    {
      label: "Travel Info",
      href: "/info",
      className:
        "text-center text-dark-3 border-2 border-dark-3 bg-transparent hover:bg-dark-3 hover:text-white",
    },
  ],
};
const contentPortuguese = {
  dates: ["17 de Maio de 2025", "Sábado, 14h30"],
  venues: [
    {
      event: "Cerimônia",
      name: "Capela do Divino Espírito Santo",
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
      className:
        "text-center hover:text-primary-500 border-2 border-primary-500 hover:bg-transparent bg-primary-500 text-white",
    },
    {
      label: "Informações de Viagem",
      href: "/info",
      className:
        "text-center text-dark-3 border-2 border-dark-3 bg-transparent hover:bg-dark-3 hover:text-white",
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
      <div className="max-w-lg bg-gradient-to-br from-white/80 via-white/90 to-white/70 px-4 py-8 duration-200 xs:p-8 md:p-10">
        <div className="border-b-2 border-t-2 border-white/20 px-4 py-8 duration-200 xs:border-2 xs:p-8 md:p-10">
          <img src={logoSrc} alt="Thayse and Noah" className="mx-auto mb-8" />
          <p className="mb-1 text-3xl font-medium text-dark-2">
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
                  <p className="font-medium tracking-wider xs:text-lg">
                    {venue.name}
                  </p>
                  <p className="text-sm font-light xs:text-base">
                    {venue.address}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 font-bold">
            <Button
              label={content.buttons[0].label}
              styles={content.buttons[0].className}
              href={content.buttons[0].href}
            />
            {language === ENGLISH && (
              <Button
                label={content.buttons[1].label}
                styles={content.buttons[1].className}
                href={content.buttons[1].href}
              />
            )}
            {language === ENGLISH && (
              <Button
                label={content.buttons[2].label}
                styles={content.buttons[2].className}
                href={content.buttons[2].href}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
