<template>
  <div class="page maintenance">
    <h1>Maintenance</h1>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.maintenance {
	background: slateblue;
}

</style>
