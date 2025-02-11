"use client";
import { useEffect } from "react";

const ContactMap = ({ apiKey }: { apiKey: string }) => {
  useEffect(() => {
    const initMap = () => {
      const location = { lat: 40.470164, lng: -3.642483 };

      // @ts-ignore
      const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12,
      });

      // @ts-ignore
      new google.maps.Marker({
        position: location,
        map: map,
        title: "We are here!",
      });
    };

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initMap();
      };
    };

    loadScript();
  }, [apiKey]);

  return <div id="map" style={{ height: "500px", width: "100%" }} />;
};

export default ContactMap;
