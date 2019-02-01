<template>
  <div class="page contact">
    <h1>Contact</h1>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.contact {
	background: darkslateblue;
}

</style>
