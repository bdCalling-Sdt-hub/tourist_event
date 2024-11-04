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
    const [placeName, setPlaceName] = useState<any>('');
    const [marker, setMarker] = useState<any>(null);

    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        let initialMarker = L.marker([51.505, -0.09]).addTo(map);
        if (coordinates) {
            L.marker([coordinates.lat.toFixed(5), coordinates.lng.toFixed(5)]).addTo(map);
        }
        initialMarker.bindPopup('Event Location').openPopup();

        map.on('click', async (e) => {
            setLoading(true)
            const { lat, lng } = e.latlng;
            setCoordinates({ lat, lng });
            if (marker) {
                map.removeLayer(marker);
            }

            const newMarker = L.marker([lat, lng])
                .addTo(map)
                .bindPopup(`Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
                .openPopup();
            setMarker(newMarker);

            // Fetch place name using reverse geocoding
            try {
                const response = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
                );
                if (response.data && response.data.display_name) {
                    setPlaceName(response.data.display_name);
                    setLocationData({ lat, lng, display_name: response.data.display_name })
                    setLoading(false)
                } else {
                    setPlaceName('Unknown place');
                }
            } catch (error) {
                console.error('Error fetching place name:', error);
                setPlaceName('Error fetching place name');
            }
        });

        return () => {
            map.off('click');
            map.remove();
        };
    }, [marker]);

    return (
        <div>
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
            {coordinates && (
                <p className='p-2'>
                    <strong>Clicked Coordinates: Latitude:</strong> {coordinates.lat.toFixed(5)}, Longitude: {coordinates.lng.toFixed(5)}
                    <br />
                    <strong> Place Name:</strong> {placeName}
                </p>
            )}
            <button onClick={() => close_modal()} className='button-blue ml-auto -mt-1' style={{
                padding: '5px 10px'
            }}>
                Ok
            </button>
        </div>
    );
};

export default GetCoordinateMap;
