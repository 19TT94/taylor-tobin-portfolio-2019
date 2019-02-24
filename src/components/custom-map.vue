<template>
	<div id="custom-map" v-if="!disabled"></div>
  <div class="map-image" :style="{'background-image': 'url(' + require('@/assets/images/map.png') + ')'}" v-else>
    <font-awesome-icon class="marker" icon="map-marker" />
  </div>
</template>

<script>
import gmapsInit from '@/utils/gmaps';

export default {
  name: 'custom-map',

	async mounted() {
    if(!this.disabled) {
			try {
        const google = await gmapsInit();
				/* eslint-disable no-unused-vars */
        const map = new google.maps.Map(this.$el, {
					center: {lat: 33.7838, lng: -118.1141},
					zoom: 13,
					controls: 0,
					styles: this.styles
				});
				/* eslint-disable no-unused-vars */
      } catch (error) {
        throw error;
      }
    }
  },

  data() {
		return {
			"limit": 900,
			"disabled": true,
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
							"color": "rgb(238,232,170)"
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

.map-image {
  border-top: 1px solid $gold;
  background-size: 200%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;


  @media #{$small} {
    background-size: cover;
  }
}

.fa-map-marker {
  z-index: $default;
  font-size: 2rem;
  margin: -10px;
  transform: translateY(-25px);
}

</style>
