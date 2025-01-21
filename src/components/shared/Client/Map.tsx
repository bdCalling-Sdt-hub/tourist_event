"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
interface Props {
  location: {
    type: string;
    coordinates: [number, number];
    _id: string;
  };
  address: string;
}
const Map = ({ location, address }: Props) => {
  useEffect(() => {
    const map = L.map("map").setView(
      location?.coordinates || [51.505, -0.09],
      18
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    const marker = L.marker(location?.coordinates || [51.505, -0.09]).addTo(
      map
    );
    marker.bindPopup(address || "Event Location").openPopup();
    return () => {
      map.remove();
    };
  }, [location, address]);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default Map;
