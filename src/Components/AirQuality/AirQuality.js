import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './AirQuality.scss'
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFzbXVyIiwiYSI6ImNrZnBkbWxoMDAzY3kyd29mN2x5eTJxMnEifQ.bj7P1zk7Xsr0p2ymvD_MmA';
const AirQuality = () => {
    const mapContainer = useRef(null);
    const [locationInfo, setLocationInfo] = useState ({
    lat: 48.55,
    lng: 31,
    zoom: 5
        });

        useEffect(() => {
            console.log(mapContainer);
            const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [locationInfo.lng, locationInfo.lat],
            zoom: locationInfo.zoom
            });
            }, [])
    return (
        <section className={'air-q container'}>
            <h2 className="air-q-title">Индекс качества воздуха в режиме реального времени</h2>
            <div className="air-q-map" ref={mapContainer}/>

            <p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) 
в городе Киев, необходимо выбрать соответствующую станцию мониторинга 
на карте выше.</p>
        </section>
    );
};

export default AirQuality;