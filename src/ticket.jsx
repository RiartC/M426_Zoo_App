import { useState } from "react";

export default function TicketPage() {
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [teenTickets, setTeenTickets] = useState(0);  // Neues State für Jugendliche
    const adultPrice = 15;
    const childPrice = 8;
    const teenPrice = 10;  // Preis für Jugendticket

    const [picnicBlanket, setPicnicBlanket] = useState(false);
    const [chair, setChair] = useState(false);

    // Gesamtpreis Berechnung unter Einbeziehung der Zusatzoptionen
    const total =
        adultTickets * adultPrice + childTickets * childPrice + teenTickets * teenPrice;
    const additionalTotal = (picnicBlanket ? 10 : 0) + (chair ? 5 : 0);
    const finalTotal = total + additionalTotal;

    const handlePurchase = () => {
        alert(`Tickets gekauft: ${adultTickets} Erwachsene, ${childTickets} Kinder, ${teenTickets} Jugendliche. Gesamt: €${finalTotal}`);
    };

    // Bedingung, um die Picknickdecke anzuzeigen
    const showPicnicBlanketOption = adultTickets >= 1 && childTickets >= 2;

    // Bedingung, um den Stuhl anzuzeigen
    const showChairOption = adultTickets >= 1 || childTickets >= 1 || teenTickets >= 1;

    return (
        <div className="ticket-container">
            <h1>Ticketkauf</h1>

            <div className="ticket-section">
                <label>Erwachsene (€{adultPrice}):</label>
                <input
                    type="number"
                    min="0"
                    value={adultTickets}
                    onChange={(e) => setAdultTickets(Number(e.target.value))}
                />
            </div>

            <div className="ticket-section">
                <label>Kinder (€{childPrice}):</label>
                <input
                    type="number"
                    min="0"
                    value={childTickets}
                    onChange={(e) => setChildTickets(Number(e.target.value))}
                />
            </div>

            <div className="ticket-section">
                <label>Jugendliche (€{teenPrice}):</label>
                <input
                    type="number"
                    min="0"
                    value={teenTickets}
                    onChange={(e) => setTeenTickets(Number(e.target.value))}
                />
            </div>

            <div className="total-price">Gesamt: €{finalTotal}</div>

            {/* Picknickdecke Option */}
            {showPicnicBlanketOption && (
                <div className="ticket-section">
                    <label>
                        <input
                            type="checkbox"
                            checked={picnicBlanket}
                            onChange={() => setPicnicBlanket(!picnicBlanket)}
                        />
                        Picknickdecke (€10)
                    </label>
                    <p className="info-text">
                        Genießen Sie Ihr Event in völliger Entspannung mit einer bequemen Picknickdecke! Perfekt für einen gemütlichen Platz auf dem Rasen oder für Ihre Auszeit während des Events. Unsere Picknickdecken bieten ausreichend Platz für die ganze Familie und sind ideal, um sich während der Veranstaltung bequem niederzulassen.
                    </p>
                </div>
            )}

            {/* Stuhl Option */}
            {showChairOption && (
                <div className="ticket-section">
                    <label>
                        <input
                            type="checkbox"
                            checked={chair}
                            onChange={() => setChair(!chair)}
                        />
                        Stuhl (€5)
                    </label>
                    <p className="info-text">
                        Mieten Sie einen Stuhl und lassen Sie sich während der gesamten Veranstaltung bequem nieder. Unsere komfortablen Stühle sind ideal für diejenigen, die lieber sitzen möchten. Perfekt für lange Veranstaltungen, bei denen Sie eine Pause einlegen und entspannt genießen können!
                    </p>
                </div>
            )}

            <button onClick={handlePurchase}>Kaufen</button>
        </div>
    );
}
