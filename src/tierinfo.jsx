import React, { useState } from "react";
import alpaka from "./assets/bilder/alpaka.jpg";
import blauersd from "./assets/bilder/blauer segelflossen doktorfisch.jpg";
import baer from "./assets/bilder/braunbär.jpg";
import elefant from "./assets/bilder/elefant.jpg";
import flamingo from "./assets/bilder/flamingo.jpg";
import giraffe from "./assets/bilder/giraffe.jpg";
import gorilla from "./assets/bilder/gorilla.jpg";
import loewe from "./assets/bilder/löwe.jpg";
import mausmaki from "./assets/bilder/mausmaki.jpg";
import seehund from "./assets/bilder/seehund.jpg";

const TierCard = ({ name, bild, beschreibung, lebensraum }) => {
    const [gekippt, setGekippt] = useState(false);

    return (
        <div
            className="relative w-48 h-64 cursor-pointer perspective"
            onClick={() => setGekippt(!gekippt)}
        >
            <div className={`transition-transform duration-500 transform-style-preserve-3d ${gekippt ? "rotate-y-180" : ""}`}>
                {/* Vorderseite */}
                <div className="absolute w-full h-full backface-hidden border rounded-lg shadow-lg p-4 bg-white flex flex-col items-center">
                    <img
                        src={bild}
                        alt={name}
                        width="180"
                        height="120"
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                    <h2 className="text-lg font-bold text-center mt-2">{name}</h2>
                </div>

                {/* Rückseite */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 border rounded-lg shadow-lg p-4 bg-blue-100 flex flex-col items-center justify-center">
                    <p className="text-sm">{beschreibung}</p>
                    <p className="text-sm mt-2"><strong>Lebensraum:</strong> {lebensraum || "Unbekannt"}</p>
                </div>
            </div>
        </div>
    );
};

const Zoo = () => {
    const tiere = [
        { name: "Löwe", bild: loewe, beschreibung: "Große Raubkatze aus Afrika.", lebensraum: "Savannen" },
        { name: "Elefant", bild: elefant, beschreibung: "Größtes Landsäugetier.", lebensraum: "Savannen & Wälder" },
        { name: "Giraffe", bild: giraffe, beschreibung: "Höchstes Landtier der Welt.", lebensraum: "Savannen" },
        { name: "Alpaka", bild: alpaka, beschreibung: "Sanftmütiges Nutztier aus Südamerika.", lebensraum: "Anden" },
        { name: "Blauer Segelflossendoktorfisch", bild: blauersd, beschreibung: "Bunter Fisch aus Korallenriffen.", lebensraum: "Tropische Ozeane" },
        { name: "Flamingo", bild: flamingo, beschreibung: "Rosa Vogel mit langen Beinen.", lebensraum: "Seen & Lagunen" },
        { name: "Gorilla", bild: gorilla, beschreibung: "Intelligenter Menschenaffe.", lebensraum: "Tropische Regenwälder" },
        { name: "Mausmaki", bild: mausmaki, beschreibung: "Kleiner nachtaktiver Primat.", lebensraum: "Madagaskar" },
        { name: "Seehund", bild: seehund, beschreibung: "Meeresbewohner mit Flossen.", lebensraum: "Küstenregionen" },
        { name: "Braunbär", bild: baer, beschreibung: "Großer Bär mit dichtem Fell.", lebensraum: "Wälder & Berge" },
    ];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
                padding: "16px"
            }}
        >
            {tiere.map((tier, index) => (
                <TierCard key={index} {...tier} />
            ))}
        </div>
    );
};
export default Zoo;
