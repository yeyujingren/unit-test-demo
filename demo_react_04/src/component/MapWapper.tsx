import React from 'react';
import LKMap from './LKmap';

export interface Props {
  name: string;
  email: string;
  site: string;
  center: {
    lat: number;
    lng: number;
  }
  [p: string]: any;
}

const MapWapper: React.FC<Props> = (props) => {
  return (
    <div>
      <address>
        联系 {props.name}，通过{" "}
        <a data-testid="email" href={"mailto:" + props.email}>
          email
        </a>
        或者他们的
        <a data-testid="site" href={props.site}>
          网站
        </a>。
      </address>
      <LKMap center={props.center} />
    </div>
  )
}

export default MapWapper;
