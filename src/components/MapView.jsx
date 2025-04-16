import React, { useState, useEffect } from 'react';
import {
    MapContainer,
    ImageOverlay,
    Marker,
    Polyline,
    useMapEvents
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import zoomap from '../assets/map/zoomap.png';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

function ClickHandler({ addPoint }) {
    useMapEvents({
        click(e) {
            addPoint([e.latlng.lat, e.latlng.lng]);
        },
    });
    return null;
}

const MapView = () => {
    const [route, setRoute] = useState([]);
    const [routeName, setRouteName] = useState('');
    const [savedRoutes, setSavedRoutes] = useState([]);
    const [activeRouteName, setActiveRouteName] = useState(null); // nur Name speichern

    const bounds = [[0, 0], [1000, 1500]];

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('savedRoutes')) || [];
        setSavedRoutes(stored);
    }, []);

    const addPoint = (point) => {
        setRoute((prev) => [...prev, point]);
    };

    const saveRoute = () => {
        if (!routeName || route.length === 0) {
            alert("Bitte gib einen Namen ein und markiere Punkte!");
            return;
        }

        const newRoutes = [...savedRoutes, { name: routeName, points: route }];
        localStorage.setItem('savedRoutes', JSON.stringify(newRoutes));
        setSavedRoutes(newRoutes);
        setRoute([]);
        setRouteName('');
        alert(`Route "${routeName}" gespeichert.`);
    };

    const toggleRoute = (routeObj) => {
        if (activeRouteName === routeObj.name) {
            setActiveRouteName(null); // Route ausblenden
        } else {
            setActiveRouteName(routeObj.name); // Route anzeigen
        }
    };

    const deleteRoute = (name) => {
        const filtered = savedRoutes.filter(r => r.name !== name);
        localStorage.setItem('savedRoutes', JSON.stringify(filtered));
        setSavedRoutes(filtered);
        if (activeRouteName === name) {
            setActiveRouteName(null);
        }
    };

    const activeRoute = savedRoutes.find(r => r.name === activeRouteName);

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f4f1e6' }}>
            {/* Karte */}
            <div style={{ flex: 3 }}>
                <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>🦓 Zoo Karte – Route markieren</h1>

                <div style={{ textAlign: 'center', margin: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Routenname eingeben"
                        value={routeName}
                        onChange={(e) => setRouteName(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            marginRight: '1rem',
                            width: '200px'
                        }}
                    />
                    <button
                        onClick={saveRoute}
                        style={{
                            padding: '0.5rem 1rem',
                            fontSize: '16px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        💾 Route speichern
                    </button>
                </div>

                <MapContainer
                    crs={L.CRS.Simple}
                    bounds={bounds}
                    style={{ height: 'calc(100vh - 200px)', width: '100%', zIndex: 0 }}
                    minZoom={-1}
                >
                    <ImageOverlay url={zoomap} bounds={bounds} />
                    <ClickHandler addPoint={addPoint} />

                    {/* Neue Route Marker */}
                    {route.map((pos, i) => (
                        <Marker key={`new-${i}`} position={pos} />
                    ))}
                    {route.length > 1 && (
                        <Polyline positions={route} color="blue" />
                    )}

                    {/* Aktive gespeicherte Route */}
                    {activeRoute && (
                        <>
                            {activeRoute.points.map((pos, i) => (
                                <Marker key={`saved-${i}`} position={pos} />
                            ))}
                            <Polyline
                                positions={activeRoute.points}
                                color="green"
                                dashArray="10"
                            />
                        </>
                    )}
                </MapContainer>
            </div>

            {/* Legende */}
            <div style={{
                width: '300px',
                padding: '1rem',
                borderLeft: '2px solid #eee',
                backgroundColor: '#f9f9f9',
                height: '100vh',
                overflowY: 'auto'
            }}>
                <h2 style={{ fontSize: '18px', marginBottom: '1rem' }}>📋 Gespeicherte Routen</h2>
                {savedRoutes.length === 0 ? (
                    <p>Keine Routen gespeichert.</p>
                ) : (
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        {savedRoutes.map((r, i) => (
                            <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <button
                                    onClick={() => toggleRoute(r)}
                                    style={{
                                        background: activeRouteName === r.name ? '#d4edda' : '#e9ecef',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        padding: '0.5rem',
                                        flex: 1,
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        fontWeight: activeRouteName === r.name ? 'bold' : 'normal'
                                    }}
                                >
                                    📍 {r.name}
                                </button>
                                <button
                                    onClick={() => deleteRoute(r.name)}
                                    style={{
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '0.5rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    🗑️
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MapView;
