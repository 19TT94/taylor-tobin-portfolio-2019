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
			/* eslint-disable no-unused-vars */
      const map = new google.maps.Map(this.$el, {
				center: {lat: 33.7838, lng: -118.1141},
				zoom: 13,
				styles: this.styles
			});
			/* eslint-disable no-unused-vars */
    } catch (error) {
      throw error;
    }
  },

  data() {
		return {
			"styles" : [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 40
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
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
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 21
						}
					]
				},
				{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
						{
							"color": "#000000"
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
							"color": "#000000"
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
							"color": "#000000"
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
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
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
