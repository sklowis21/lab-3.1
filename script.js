mapboxgl.accessToken = 'pk.eyJ1Ijoic2tsb3dpcyIsImEiOiJjbHI4NHB0NDgwNjhvMmlxeW5zbG5yamx2In0.4hjvu4k-dsvYVBtCAgn-GA'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'mo-parks', // map container ID
    style: 'mapbox://styles/sklowis/cltakiuxw00al01qqduth9tar', // style URL which includes GeoJSON as layer
    center: [-92.5, 38.6], // starting position [lng, lat]
    zoom: 6, // starting zoom
});

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        countries: "us", // Limit to united states
        
    })
);

// Add zoom and rotation controls to the top left of the map
map.addControl(new mapboxgl.NavigationControl());

// Add fullscreen option to the map
map.addControl(new mapboxgl.FullscreenControl());

//Declare legend variable using legend div tag
const legend = document.getElementById('legend');


/*--------------------------------------------------------------------
ADD INTERACTIVITY BASED ON HTML EVENT
--------------------------------------------------------------------*/

// 1) Add event listener which returns map view to full screen on button click using flyTo method
document.getElementById('returnbutton').addEventListener('click', () => {
    map.flyTo({
        center: [-92.5, 38.6],
        zoom: 6,
        essential: true
    });
});

// event listeners that fly to the park points when corresponding circle is clicked in legend
document.getElementById('Ganp').addEventListener('click', () => {   //used same id as used in html legend
    map.flyTo({
        center: [-90.18580883680175, 38.62491281115797],
        zoom: 16,
        essential: true
    });
});

document.getElementById('Tsmsp').addEventListener('click', () => {
    map.flyTo({
        center: [-90.76465527643705, 37.54206648584177],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Ersp').addEventListener('click', () => {
    map.flyTo({
        center: [-90.68855136404726, 37.654478910425],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Hhtsp').addEventListener('click', () => {
    map.flyTo({
        center: [-92.75428879582704, 37.96852148850596],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Mtnf').addEventListener('click', () => {
    map.flyTo({
        center: [-91.160025139068, 37.67671883864563],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Jsisp').addEventListener('click', () => {
    map.flyTo({
        center: [-90.87158605832329, 37.558447560659644],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Losp').addEventListener('click', () => {
    map.flyTo({
        center: [-92.58636634228631, 38.10804339782956],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Rbmsp').addEventListener('click', () => {
    map.flyTo({
        center: [-92.31255183231158, 38.87430269408597],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Wsp').addEventListener('click', () => {
    map.flyTo({
        center: [-91.5102873576012, 40.004718524172006],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Psp').addEventListener('click', () => {
    map.flyTo({
        center: [-94.5450448886578, 37.52317559211579],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Bssp').addEventListener('click', () => {
    map.flyTo({
        center: [-92.85236418358305, 37.71875616286617],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Knsp').addEventListener('click', () => {
    map.flyTo({
        center: [-93.6101382332562, 38.74666956871906],
        zoom: 16,
        essential: true
    });
});
document.getElementById('Csp').addEventListener('click', () => {
    map.flyTo({
        center: [-93.67686656967516, 40.103368349161315],
        zoom: 16,
        essential: true
    });

});

map.addControl(new mapboxgl.ScaleControl()); //added scale bar to bottom left

//popup test

