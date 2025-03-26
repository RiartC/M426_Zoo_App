import React, { useState } from "react";

const Tierinfo = ({ name, bild, beschreibung, lebensraum }) => {
    const [zeigeDetails, setZeigeDetails] = useState(false);

    const handleKlick = () => {
        setZeigeDetails(!zeigeDetails);
    };

    return (
        <div className="border rounded-lg p-4 shadow-md cursor-pointer" onClick={handleKlick}>
            <img src={bild} alt={`Bild von ${name}`} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            {zeigeDetails && (
                <div className="mt-2">
                    <p>{beschreibung}</p>
                    <p><strong>Lebensraum:</strong> {lebensraum}</p>
                </div>
            )}
        </div>
    );
};

const Zoo = () => {
    const tiere = [
        {
            name: "Löwe",
            bild: "https://source.unsplash.com/400x300/?lion",
            beschreibung: "Der Löwe ist eine große Raubkatze aus Afrika.",
            lebensraum: "Savannen und Grasländer"
        },
        {
            name: "Elefant",
            bild: "https://source.unsplash.com/400x300/?elephant",
            beschreibung: "Elefanten sind die größten lebenden Landsäugetiere.",
            lebensraum: "Wälder, Savannen und Grasländer"
        },
        {
            name: "Giraffe",
            bild: "https://source.unsplash.com/400x300/?giraffe",
            beschreibung: "Giraffen sind die höchsten Landtiere der Welt.",
            lebensraum: "Offene Waldlandschaften und Savannen"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {tiere.map((tier, index) => (
                <Tierinfo key={index} {...tier} />
            ))}
        </div>
    );
};

export default Zoo;
