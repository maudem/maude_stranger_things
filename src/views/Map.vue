<template>
    <div class='google-map'>
    </div>
</template>


<script>

import gmapsInit from '../utils/gmaps';

export default {
    name:'google-map',
    async mounted() {
        try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
       const zoom = {
           zoom:51,
           center: new google.maps.LatLng(51.501527,-0.1921837)
       }
      const map = new google.maps.Map(this.$el, zoom);
     

      geocoder.geocode({ address: 'Durham, NC' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }
        // const locations = [
        //     { //kerley anc corwallis
        //         position: {
        //         lat: 36.009967,
        //         lng: -78.990081,
        //         },
        //     },
        //     { //Loch Nora (Loch Ora in the show)
        //         position: {
        //         lat: 35.988466,
        //         lng: -78.987525,
        //         },
        //     },
        //     { //Eno River
        //         position: {
        //         lat: 36.041999,
        //         lng: -79.009668,
        //         },
        //     },
        //     { //Forest Hills Park
        //         position: {
        //         lat: 35.979780,
        //         lng: -78.913601,
        //         },
        //     },
        //     { //Jordan Lake
        //         position: {
        //         lat: 35.871136,
        //         lng: -78.975286,
        //         },
        //     },
        // ];

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });

    //   const markers = locations
    //   .map(x => new google.maps.Marker({...x, map }))
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
.google-map {
  width: 90%;
  height: 60%;
  margin: 0 auto;
  background: lightgray;
}
</style>
