import React from 'react';
import Globe from 'react-globe.gl';
import * as data from '/src/datasets/Data.json'


const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;


const MapData = [
    { lat: 45.5017, lng: -73.5673, label: "Montreal", size: 30, color: 'rgba(255, 165, 0, 0.75)' },
    { lat: 10.8231, lng: 106.6297, label: 'Ho Chi Minh City', size: 30, color: 'rgba(255, 165, 0, 0.75)' },
    { lat: 43.6532, lng: -79.3832, label: 'Toronto', size: 30, color: 'rgba(255, 165, 0, 0.75)' },
    { lat: 33.7489, lng: -84.3879, label: 'Atlanta', size: 30, color: 'rgba(255, 165, 0, 0.75)' },
    { lat: 21.0278, lng: 105.8344, label: 'Hanoi', size: 30, color: 'rgba(255, 165, 0, 0.75)' },
    { lat: 34.0522, lng: -118.2437, label: 'Los Angeles', size: 30, color: 'rgba(255, 165, 0, 0.75)' },
    { lat: 16.4637, lng: 107.5909, label: 'Hue', size: 30, color: 'rgba(255, 165, 0, 0.75)' },
    // Add more  as needed
];

let cablePaths = [];
data.features.forEach(({geometry,properties}) => {
    geometry.coordinates.forEach(coords =>cablePaths.push({coords,properties}));
});

function MyGlobe() {

    return (
        <Globe
            height={326}
            width={326}
            pathsData = {cablePaths}
            pathPoints={'coords'}
            pathPointLat={(p) =>p[1]}
            pathPointLng={(p) =>p[0]}
            pathColor={(path =>path.properties.color)}
            pathLabel={(p) => p.properties.name}
            pathDashLength={0.1}
            pathDashGap={0.008}
            pathDashAnimateTime={1200}

            htmlElementsData={MapData}
            htmlElement={(d =>{
                const el = document.createElement('div');
                el.innerHTML = markerSvg;
                el.style.color = d.color;
                el.style.width = `${d.size}px`;

                el.style['pointer-events'] = 'auto';
                el.style.cursor = 'pointer';
                el.onclick = () => console.info(d);
                return el;
            })}

            uration in milliseconds
            labelsData={MapData}
            labelLat={(d) => d.lat}
            labelLng={(d) => d.lng}
            labelText={(d) => d.label}
            labelColor={d => d.color}
            labelSize={() => 0.75} // Increase the size of the labels

            labelResolution={2} // Higher resolution for smoother labels
            globeImageUrl={'//unpkg.com/three-globe/example/img/earth-night.jpg'}
            backgroundImageUrl={'//unpkg.com/three-globe/example/img/night-sky.png'}
        />
    );
}

export default MyGlobe;