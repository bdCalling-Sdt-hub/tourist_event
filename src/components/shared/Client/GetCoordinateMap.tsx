// import { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// //@ts-ignore
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });


// const GetCoordinateMap = () => {
//     const [coordinates, setCoordinates] = useState<any>(null);

//     useEffect(() => {
//         const map = L.map('map').setView([51.505, -0.09], 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(map);

//         const marker = L.marker([51.505, -0.09]).addTo(map);
//         marker.bindPopup('Event Location').openPopup();

//         map.on('click', (e) => {
//             const { lat, lng } = e.latlng;
//             setCoordinates({ lat, lng });
//             L.marker([lat, lng]).addTo(map).bindPopup(`Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`).openPopup();
//         });

//         return () => {
//             map.remove();
//         };
//     }, []);

//     return (
//         <div>
//             <div id="map" style={{ height: '500px', width: '100%' }}></div>
//             {coordinates && (
//                 <p>Clicked Coordinates: Latitude: {coordinates.lat.toFixed(5)}, Longitude: {coordinates.lng.toFixed(5)}</p>
//             )}
//         </div>
//     );
// };

// export default GetCoordinateMap
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface PropsTypes {
    setLocationData: ({ }) => void;
    close_modal: () => void;
    setLoading: (arg0: boolean) => void;
}

const GetCoordinateMap = ({ setLocationData, close_modal, setLoading }: PropsTypes) => {
    const [coordinates, setCoordinates] = useState<any>(null);
    const [placeName, setPlaceName] = useState<string>('Unknown place');
    const [mapInstance, setMapInstance] = useState<any>(null);
    const [marker, setMarker] = useState<any>(null);

    useEffect(() => {
        const map = L.map('map').setView([coordinates?.lat?.toFixed(5) || 9.77673, coordinates?.lng?.toFixed(5) || 276.63574], 13);
        setMapInstance(map);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        if (coordinates) {
            L.marker([coordinates.lat.toFixed(5), coordinates.lng.toFixed(5)]).addTo(map);
        }
        // 
        map.on('click', async (e) => {
            const { lat, lng } = e.latlng;

            setLoading(true);
            if (marker) {
                map.removeLayer(marker);
            }
            const newMarker = L.marker([lat, lng])
                .addTo(map)
                .bindPopup(`Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
                .openPopup();
            setMarker(newMarker);
            setCoordinates({ lat, lng });
            // try {
            //     const response = await axios.get(
            //         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            //     );
            //     console.log(response)
            //     if (response.data && response.data.display_name) {
            //         setPlaceName(response.data.display_name);
            //         setLocationData({ lat, lng, display_name: response.data.display_name });
            //     } else {
            //         setPlaceName('Unknown place');
            //     }
            // } catch (error) {
            //     console.error('Error fetching place name:', error);
            //     setPlaceName('Error fetching place name');
            // } finally {
            //     // End loading
            //     setLoading(false);
            // }
            try {
                const normalizedLng = ((lng + 180) % 360) - 180;
                const formattedLat = parseFloat(lat.toFixed(5));
                const formattedLng = parseFloat(normalizedLng.toFixed(5));
                const response = await axios.get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${formattedLat}+${formattedLng}&key=379832d7941049d1a1c6c96d50886580`
                );

                if (response.data && response.data.results.length > 0) {
                    const display_name = response.data.results[0].formatted;
                    setPlaceName(display_name);
                    setLocationData({ lat, lng, display_name });
                } else {
                    setPlaceName('Unknown place');
                }
            } catch (error) {
                console.error('Error fetching place name:', error);
                setPlaceName('Error fetching place name');
            } finally {
                setLoading(false);
            }
        });

        // Clean up on component unmount
        return () => {
            map.off('click');
            map.remove();
        };
    }, [marker]);

    return (
        <div>
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
            {coordinates && (
                <p className="p-2">
                    <strong>Clicked Coordinates:</strong> Latitude: {coordinates.lat.toFixed(5)}, Longitude: {coordinates.lng.toFixed(5)}
                    <br />
                    <strong>Place Name:</strong> {placeName}
                </p>
            )}
            <button
                onClick={() => close_modal()}
                className="button-blue ml-auto -mt-1"
                style={{
                    padding: '5px 10px',
                }}
            >
                Ok
            </button>
        </div>
    );
};

export default GetCoordinateMap;
