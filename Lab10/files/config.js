var config = {
    style: 'mapbox://styles/juliakohn/clo31ouy800d501qxcji44i3r',
    accessToken: 'pk.eyJ1IjoianVsaWFrb2huIiwiYSI6ImNsbjF3OXoxMjAydHQyemtocGxscHNmZXYifQ.C99bUGi2aZupJ_bvjaFrRA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Housing in NYC and Hurricane Sandy',
    subtitle: 'How Sandy Floodplains Impacted Public Housing',
    byline: 'Julia Kohn',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'How Sandy Impacted Public Housing in NYC',
            image: 'images/source.png',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this? ',
            location: {
               center: [-73.93430, 40.74216],
                zoom: 11.3,
                pitch: 36.79,
                bearing: 25.12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'pluto-hous-master-featu-7b5u7f', opacity: 0}],
            onChapterExit: [{layer: 'pluto-hous-master-featu-7b5u7f', opacity: 0}]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'images/source.png',
            description: '"The Red Hook Houses" refers to two public housing complexes in Red Hook, Brooklyn. These complexes form the largest public housing devlopmnent in all of Brooklyn. However, situated at the edge of Brooklyn, the complex is in the middle of a major floodplain that impacted surrounding areas deeply during Hurricane Sandy. The complex was unfortunately damaged by the hurricane, both in terms of infrastructure damage and detriments to residents who lost power and access to basic needs. </br> Source: AIA New York',
            location: {
                center: [-74.008724, 40.676705],
                zoom: 15.3,
                pitch: 36.79,
                bearing: 25.12
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{layer: 'pluto-hous-master-featu-7b5u7f', opacity: 1}],
            onChapterExit: [{layer: 'pluto-hous-master-featu-7b5u7f', opacity: 1}]
        },
    ]
};
