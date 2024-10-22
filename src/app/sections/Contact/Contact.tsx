"use client";
import BasicSection from "@/components/BasicSection/BasicSection";
import { Col, Row, Typography } from "antd";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const initMap = () => {
      const location = { lat: 40.470164, lng: -3.642483 };

      const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12,
      });

      // Optionally, add a marker to the map
      new google.maps.Marker({
        position: location,
        map: map,
        title: "We are here!",
      });
    };

    // Load the Google Maps script dynamically
    const loadScript = (url: string) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize the map after the script loads
        initMap();
      };
    };

    // Add the Google Maps script with your API key
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDsHfV7nGpr3Q0F5eDBe39ChE42Z03QCHs&callback=initMap`,
    );
  }, []); // Empty de

  return (
    <BasicSection id="part-4" backgroundColor="cream1">
      <Row>
        <Col xs={24}>
          <Typography.Title>Contacto</Typography.Title>
        </Col>
        <Col xs={24}>
          <div id="map" style={{ height: "400px", width: "50%" }}></div>
        </Col>
      </Row>
    </BasicSection>
  );
};

export default Contact;
