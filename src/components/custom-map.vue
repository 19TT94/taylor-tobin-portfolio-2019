<template>
	<div id="custom-map"></div>
</template>

<script>
import gmapsInit from '@/utils/gmaps';

export default {
  name: 'custom-map',

	async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'California' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      throw error;
    }
  },

  data() {
		return {
			"styles" : [
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e9e9e9"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f5f5f5"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 18
						}
					]
				},
				{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 16
						}
					]
				},
				{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
						{
							"color": "#f5f5f5"
						},
						{
							"lightness": 21
						}
					]
				},
				{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
						{
							"color": "#dedede"
						},
						{
							"lightness": 21
						}
					]
				},
				{
				"elementType": "labels.text.stroke",
				"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#ffffff"
						},
						{
							"lightness": 16
						}
					]
				},
				{
				"elementType": "labels.text.fill",
				"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#333333"
						},
						{
							"lightness": 40
						}
					]
				},
				{
				"elementType": "labels.icon",
				"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
						{
							"color": "#f2f2f2"
						},
						{
							"lightness": 19
						}
					]
				},
				{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
						{
							"color": "#fefefe"
						},
						{
							"lightness": 20
						}
					]
				},
				{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
						{
							"color": "#fefefe"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				}
			]
		}
	}
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.map-container {
    position: relative;
    padding-bottom: 54%;
    height: 0;
    overflow: hidden;

    @media (min-width: 375px) {
        padding-bottom: 73%;
    }

    @media (min-width: 414px) {
        padding-bottom: 83%;
    }
}

.map-object {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>
