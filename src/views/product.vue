<template>
  <div class="product">
    product
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "product",
  components: {},
  mounted() {
    console.log(this.$store.state.token, "123123");
  },
};
</script>
<style scoped >
.product {
}
</style>
