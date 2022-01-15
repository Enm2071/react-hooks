import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';
const Map = ({ data }) => {
  const mapStyles = {
    width: '100%',
    height: '50vh',
  };
  const defaultCenter = data
    ? {
        lat: data.lat,
        lng: data.lng,
      }
    : {
        lat: -34.397,
        lng: 150.644,
      };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCUPhzKOIMrExprnh9aC5AqSmEy0DsjtVU">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

Map.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Map;
