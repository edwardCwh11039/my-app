import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { MapConfig } from "../lib/data.source";

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={MapConfig.zoom}
      defaultCenter={MapConfig.LatLng}
      defaultOptions={defaultOptions}
    >
      <Marker position={MapConfig.LatLng} />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "280px", padding: "20px" };
const mapElementStyle = { height: "100%" };

export default function GoogleMaps() {
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJyOQu2VayURTvT45-Y-7ycD_ezklWTk4"
      loadingElement={<div style={loadingElementStyle} />}
      containerElement={<div style={containerElementStyle} />}
      mapElement={<div style={mapElementStyle} />}
    />
  );
}
