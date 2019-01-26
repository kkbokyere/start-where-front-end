import React from "react";
import PropTypes from 'prop-types';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
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
)((props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lng: -0.118092, lat: 51.509865 }}
    >
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers && props.markers.map(({ lng, lat }) => <Marker key={`${lng}+${lat}`} position={{ lng, lat }}/>)}
      </MarkerClusterer>
    </GoogleMap>
  )
});

Map.propTypes = {
  markers: PropTypes.array,
  onMarkerClustererClick: PropTypes.func,
};

export default Map;
