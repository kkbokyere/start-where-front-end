import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const API_KEY='AIzaSyABbR1-ZuMWKXNndSGbErtHfW3ieDB0vw8';
const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width:'100%', height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lng: -0.118092, lat: 51.509865 }}
  >
    {props.isMarkerShown && <Marker position={{ lng: -0.118092, lat: 51.509865 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

export default Map;
