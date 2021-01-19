import React, { useCallback, useState } from 'react';
import { useJsApiLoader , GoogleMap } from "@react-google-maps/api";

export interface Props {
  center: {
    lat: number;
    lng: number;
  }
  [p: string]: any;
}

const containerStyle = {
  width: '400px',
  height: '400px'
};

const LkMap: React.FC<Props> = (props) => {

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "xxx_xxx_xxx"
  })

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new (window as any).google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={props.center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  ) : <></>
}

export default LkMap;
