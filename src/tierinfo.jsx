import React, { useState } from 'react';

const Tierinfo = ({ name, bild, beschreibung, lebensraum }) => {
    const [zeigeDetails, setZeigeDetails] = useState(false);

    const handleKlick = () => {
        setZeigeDetails(!zeigeDetails);
    };

    return (
        <div className="tierkarte" onClick={handleKlick}>
            <img src={bild} alt={`Bild von ${name}`} />
            <h2>{name}</h2>
            {zeigeDetails && (
                <div className="details">
                    <p>{beschreibung}</p>
                    <p><strong>Lebensraum:</strong> {lebensraum}</p>
                </div>
            )}
        </div>
    );
};

export default Tierinfo;