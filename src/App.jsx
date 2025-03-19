import React from "react";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-green-100 p-6">
            <h1 className="text-3xl font-bold text-green-700">Willkommen im Zoo</h1>
            <p className="mt-4 text-lg text-gray-700">Erlebe die faszinierende Welt der Tiere!</p>
            <p>Bilder folgen...</p>

            <div className="mt-6 w-full max-w-md bg-white p-4 shadow-md rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-green-700">Öffnungszeiten</h2>
                <p className="mt-2 text-gray-700">Montag - Sonntag: 09:00 - 18:00 Uhr</p>
            </div>

            <div className="mt-6 w-full max-w-md bg-white p-4 shadow-md rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-green-700">Eintrittspreise</h2>
                <p className="mt-2 text-gray-700">weiterleitung auf ticketseite</p>
            </div>

            <div className="mt-6 w-full max-w-md bg-white p-4 shadow-md rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-green-700">Adresse</h2>
                <p className="mt-2 text-gray-700">Wildlife Zoo, Hauptstraße 123, 12345 Musterstadt</p>
            </div>

            <div className="mt-6 w-full max-w-md bg-white p-4 shadow-md rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-green-700">Zoo Impressionen</h2>
                <div className="mt-2 bg-gray-300 w-full h-40 flex items-center justify-center rounded-lg">
                    <span className="text-gray-600">weiterleitung auf impressum</span>
                </div>
            </div>

            <div className="mt-6 w-full max-w-md bg-white p-4 shadow-md rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-green-700">Weitere Informationen</h2>
                <p className="mt-2 text-gray-700">Kostenlose Parkplätze vorhanden. Barrierefreier Zugang. Tägliche Fütterungen um 12:00 Uhr.</p>
            </div>
        </div>
    );
}

export default App;
