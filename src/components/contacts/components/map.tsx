import { useEffect, useRef } from 'react';
import { useMap } from '../../../hooks/useMap';
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from '../contacts.styled';
import { LayerGroup, Marker, Icon } from 'leaflet';
import { Coordinates } from 'const';
import markerIcon from '../../../assets/img/marker-icon.png';

const defaultIcon = new Icon({
  iconUrl: markerIcon,
  iconAnchor: [13, 41]
});

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const placesLayer = new LayerGroup();
      placesLayer.addTo(map);

      const marker = new Marker({
        lat: Coordinates.Latitude, 
        lng: Coordinates.Longitude,
      });

      marker.setIcon(defaultIcon);

      marker.addTo(placesLayer);
     
      return () => {
        placesLayer.remove();
      };
    }
  }, [map]);

   return (
    <S.ContactsMap ref={mapRef}>
      <S.ContactsMapImage
        src={contactsMap}
        alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
        width="649"
        height="336"
      />
    </S.ContactsMap>
  );
};
