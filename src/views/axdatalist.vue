<template>
  <div class="axdatalist" >
    axdatalist
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "axdatalist",
  components: {},
  mounted() {
    console.log(this.$store.state.token, "123123");
  },
};
</script>
<style scoped >
.axdatalist {
}
</style>
