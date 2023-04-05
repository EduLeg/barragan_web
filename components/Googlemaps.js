
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 20.66281076863599,
    lng: -103.34230365367969
};

const Mark1 = {
    lat: 20.73159878630607,
    lng: -103.41043908058414
};

const Mark2 = {
    lat: 20.658229523702968,
    lng: -103.38151865997456
};


const Mark3 = {
    lat: 20.673811217666366,
    lng: -103.3014200161952
};

const Mark4 = {
    lat: 20.672815370725694,
    lng: -103.30247373153988
};


function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCgMZZSgFlBsX_yOmTdjFf9G5i_BDl2h54"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}

        >
            { /* Child components, such as markers, info windows, etc. */}
            <>
                <Marker position={center} />
                <Marker position={Mark1} />
                <Marker position={Mark2} />
                <Marker position={Mark3} />
                <Marker position={Mark4} />
            </>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)