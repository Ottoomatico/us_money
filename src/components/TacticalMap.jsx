import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function TacticalMap({ transfers, onCountrySelect }) {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            center: [20, 30],
            zoom: 1.5,
            attributionControl: false
        });

        map.current.on('load', () => {
            // Add source for transfers
            const geoJson = {
                type: 'FeatureCollection',
                features: transfers.map(t => ({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [t.longitude, t.latitude]
                    },
                    properties: { ...t }
                }))
            };

            map.current.addSource('transfers', {
                type: 'geojson',
                data: geoJson
            });

            // Layer for pulses/highlights
            map.current.addLayer({
                id: 'transfers-glow',
                type: 'circle',
                source: 'transfers',
                paint: {
                    'circle-radius': [
                        'interpolate', ['linear'], ['get', 'value_usd'],
                        100000000, 10,
                        1000000000, 30
                    ],
                    'circle-color': '#ff0033',
                    'circle-opacity': 0.2,
                    'circle-blur': 0.8
                }
            });

            map.current.addLayer({
                id: 'transfers-point',
                type: 'circle',
                source: 'transfers',
                paint: {
                    'circle-radius': 4,
                    'circle-color': '#ff0033',
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#ffffff'
                }
            });
            // Interactivity
            map.current.on('click', 'transfers-glow', (e) => {
                const props = e.features[0].properties;
                onCountrySelect(props);
            });

            map.current.on('mouseenter', 'transfers-glow', () => {
                map.current.getCanvas().style.cursor = 'pointer';
            });

            map.current.on('mouseleave', 'transfers-glow', () => {
                map.current.getCanvas().style.cursor = '';
            });
        });

        return () => map.current?.remove();
    }, [transfers]);

    // Update data if transfers change
    useEffect(() => {
        if (!map.current || !map.current.getSource('transfers')) return;

        const geoJson = {
            type: 'FeatureCollection',
            features: transfers.map(t => ({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [t.longitude, t.latitude]
                },
                properties: { ...t }
            }))
        };

        map.current.getSource('transfers').setData(geoJson);
    }, [transfers]);

    return (
        <div className="w-full h-full relative overflow-hidden">
            <div ref={mapContainer} className="w-full h-full" />

            {/* Tactical Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-border-tactical m-4 opacity-50" />
            <div className="absolute top-8 right-8 pointer-events-none tactical-font text-[10px] text-text-muted flex flex-col items-end gap-1">
                <span>GRID_REF: ALPHA_9</span>
                <span>SCAN_RECURSION: 1.2ms</span>
                <div className="w-32 h-[1px] bg-border-tactical mt-2" />
            </div>

            <style jsx>{`
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; left: 0; right: 0; bottom: 0; }
        .m-4 { margin: 16px; }
        .top-8 { top: 32px; }
        .right-8 { right: 32px; }
        .opacity-50 { opacity: 0.5; }
        .text-text-muted { color: var(--text-muted); }
      `}</style>
        </div>
    );
}
