mapboxgl.accessToken = 'pk.eyJ1Ijoic2tsb3dpcyIsImEiOiJjbHI4NHB0NDgwNjhvMmlxeW5zbG5yamx2In0.4hjvu4k-dsvYVBtCAgn-GA'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'mo-parks', // map container ID
    style: 'mapbox://styles/sklowis/cltdrp1zw00b701pb2l7dgmdn', // style URL which includes GeoJSON as layer
    center: [-92.5, 38.6], // starting position [lng, lat]
    zoom: 6, // starting zoom
    maxBounds: [
        [-103, 32.5], //southwest boundary
        [-80, 44] //northeast boundary
    ]
});

map.on('load', () => {
    map.addSource('mo-parks-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Gateway Arch National Park</strong><p>Located in St. Louis this national park is known for being the gateway to the West!</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -90.18580883680175,
                            38.62491281115797
                        ],
                        "type": "Point"
                    },
                    "id": 0
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Taum Sauk Mountain State Park</strong><p>Located in Middle Brook this state park contains the highest peak in the state!</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -90.76465527643705,
                            37.54206648584177
                        ],
                        "type": "Point"
                    },
                    "id": 2
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Elephant Rocks State Park</strong><p>Located in Belleview this state park contains a huge outcropping of granite boulders!</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -90.68855136404726,
                            37.654478910425
                        ],
                        "type": "Point"
                    },
                    "id": 3
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Ha Ha Tonka State Park</strong><p>Located in Camdentown this state park contains sinkholes, caves, a huge natural bridge, and large bluffs!</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -92.75428879582704,
                            37.96852148850596
                        ],
                        "type": "Point"
                    },
                    "id": 4
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Mark Twain National Forest</strong><p>Located in Rolla this national forest is named after the famous writer, Samuel Clemens, well known as Mark Twain</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -91.160025139068,
                            37.67671883864563
                        ],
                        "type": "Point"
                    },
                    "id": 4
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Johnson's Shut Ins State Park</strong><p>Located in Middle Brook this state park is known for its beautiful blue waters fed by the Black River</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -90.87158605832329,
                            37.558447560659644
                        ],
                        "type": "Point"
                    },
                    "id": 5
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Lake of the Ozarks State Park</strong><p>Located in Kaiser this state park is known as the largest state park in Missouri</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -92.58636634228631,
                            38.10804339782956
                        ],
                        "type": "Point"
                    },
                    "id": 6
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Rock Bridge Memorial State Park</strong><p>Located in Columbia this state park is a geological preserve and public recreation area</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -92.31255183231158,
                            38.87430269408597
                        ],
                        "type": "Point"
                    },
                    "id": 7
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Wakonda State Park</strong><p>Located in La Grange this state park features 6 small lakes used for water recreation</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -91.5102873576012,
                            40.004718524172006
                        ],
                        "type": "Point"
                    },
                    "id": 8
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Prairie State Park</strong><p>Located in Mindenmines this state park is home to acres of grasslands and woodland with hiking trails and camping areas</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -94.5450448886578,
                            37.52317559211579
                        ],
                        "type": "Point"
                    },
                    "id": 9
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Bennett Spring State Park</strong><p>Located in Bennett Springs this state park is known for its great fishing!</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -92.85236418358305,
                            37.71875616286617
                        ],
                        "type": "Point"
                    },
                    "id": 10
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Knob Noster State Park</strong><p>Located in Knob Noster this state park is a great place for family camping trips!</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -93.6101382332562,
                            38.74666956871906
                        ],
                        "type": "Point"
                    },
                    "id": 11
                },
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>Crowder State Park</strong><p>Located in Trenton this state park surrounds an 18 acre lake!</p>"
                    },
                    "geometry": {
                        "coordinates": [
                            -93.67686656967516,
                            40.103368349161315
                        ],
                        "type": "Point"
                    },
                    "id": 12
                }
            ]
        }
    });



    map.addLayer({
        'id': 'parks-pnt',
        'type': 'circle',
        'source': 'mo-parks-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#003300'
        }
    });

    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'parks-pnt', (e) => {
        map.getCanvas().style.cursor = 'pointer';
    
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    popup.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'parks-pnt', () => {
    popup.remove();
});
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
        zoom: 14,
        essential: true
    });
});

document.getElementById('Tsmsp').addEventListener('click', () => {
    map.flyTo({
        center: [-90.76465527643705, 37.54206648584177],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Ersp').addEventListener('click', () => {
    map.flyTo({
        center: [-90.68855136404726, 37.654478910425],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Hhtsp').addEventListener('click', () => {
    map.flyTo({
        center: [-92.75428879582704, 37.96852148850596],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Mtnf').addEventListener('click', () => {
    map.flyTo({
        center: [-91.160025139068, 37.67671883864563],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Jsisp').addEventListener('click', () => {
    map.flyTo({
        center: [-90.87158605832329, 37.558447560659644],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Losp').addEventListener('click', () => {
    map.flyTo({
        center: [-92.58636634228631, 38.10804339782956],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Rbmsp').addEventListener('click', () => {
    map.flyTo({
        center: [-92.31255183231158, 38.87430269408597],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Wsp').addEventListener('click', () => {
    map.flyTo({
        center: [-91.5102873576012, 40.004718524172006],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Psp').addEventListener('click', () => {
    map.flyTo({
        center: [-94.5450448886578, 37.52317559211579],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Bssp').addEventListener('click', () => {
    map.flyTo({
        center: [-92.85236418358305, 37.71875616286617],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Knsp').addEventListener('click', () => {
    map.flyTo({
        center: [-93.6101382332562, 38.74666956871906],
        zoom: 14,
        essential: true
    });
});
document.getElementById('Csp').addEventListener('click', () => {
    map.flyTo({
        center: [-93.67686656967516, 40.103368349161315],
        zoom: 14,
        essential: true
    });

});

map.addControl(new mapboxgl.ScaleControl()); //added scale bar to bottom left


//popup test

