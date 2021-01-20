import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN='pk.eyJ1IjoibGVqcmkiLCJhIjoiY2trNGt4N3RiMTQ5dDMycW84aTExNmw2MiJ9.SMqyvt0xiVHcKvZhWBAlFg'

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

const Map = () => {

    const [viewport, setViewPort ] = useState({
        width: "100%",
        height: 900,
        latitude: 0,
        longitude: 0,
        zoom: 2
    })

    const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })

    return (
        <div style={{ margin: '0 auto'}}>

            <MapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={_onViewportChange}
            >
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{enableHighAccuracy: true}}
                    trackUserLocation={true}
                />
            </MapGL>
        </div>
    )
}

export default Map