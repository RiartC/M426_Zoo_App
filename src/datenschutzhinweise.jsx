import React from "react";

const datenschutzhinweise = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-2xl font-bold mb-4">Datenschutzhinweise</h1>
            <p className="mb-4">
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
                Nachfolgend informieren wir Sie darüber, welche Daten wir erheben und
                wie wir diese nutzen.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Verantwortliche Stelle</h2>
            <p className="mb-4">
                Verantwortlich für die Datenverarbeitung ist: Zoo Musterstrasse 123.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Erhobene Daten</h2>
            <p className="mb-4">
                Wir erheben und verarbeiten personenbezogene Daten nur im erforderlichen
                Umfang, darunter:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Kontaktdaten</li>
                <li>Nutzungsdaten besuchte Seiten, IP-Adresse</li>
                <li>Kommunikationsdaten Anfragen, Support-Tickets</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Zwecke der Datenverarbeitung</h2>
            <p className="mb-4">
                Ihre Daten werden zu folgenden Zwecken verarbeitet:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Zur Bereitstellung unserer Website und Dienstleistungen</li>
                <li>Zur Verbesserung unserer Services und Nutzererfahrung</li>
                <li>Zur Erfüllung gesetzlicher Verpflichtungen</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Ihre Rechte</h2>
            <p className="mb-4">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                der Verarbeitung Ihrer Daten. Bitte kontaktieren Sie uns, um Ihre Rechte
                geltend zu machen.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Kontakt</h2>
            <p className="mb-4">
                Wenn Sie Fragen zum Datenschutz haben, wenden Sie sich bitte an: [Ihr
                Unternehmen] [E-Mail-Adresse].
            </p>
        </div>
    );
};

export default datenschutzhinweise;