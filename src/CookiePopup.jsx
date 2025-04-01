import React, { useState, useEffect } from "react";

const CookiePopup = () => {
    const [visible, setVisible] = useState(false);
    const [cookies, setCookies] = useState({
        essential: true, // Essentielle Cookies sind immer aktiv
        marketing: false,
        analytics: false
    });

    // Überprüfe, ob der Nutzer schon eine Auswahl getroffen hat
    useEffect(() => {
        const savedPreferences = localStorage.getItem("cookiePreferences");
        if (!savedPreferences) {
            setVisible(true);
        }
    }, []);

    // Auswahl speichern
    const acceptCookies = () => {
        localStorage.setItem("cookiePreferences", JSON.stringify(cookies));
        setVisible(false);
    };

    return visible ? (
        <div className="cookie-popup">
            <div className="cookie-content">
                <h2>Cookie-Einstellungen</h2>
                <p>Wir verwenden Cookies, um unsere Website zu verbessern. Wähle, welche Cookies du akzeptieren möchtest.</p>

                <div className="cookie-options">
                    <label>
                        <input type="checkbox" checked={cookies.essential} disabled />
                        Essentielle Cookies (immer aktiv)
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={cookies.marketing}
                            onChange={() => setCookies({ ...cookies, marketing: !cookies.marketing })}
                        />
                        Marketing-Cookies
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={cookies.analytics}
                            onChange={() => setCookies({ ...cookies, analytics: !cookies.analytics })}
                        />
                        Analyse-Cookies
                    </label>
                </div>

                <button onClick={acceptCookies}>Speichern & Akzeptieren</button>
            </div>
        </div>
    ) : null;
};

export default CookiePopup;
