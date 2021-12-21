<template>
  <div class="about" @click="pushvuex" v-loading='$store.state.axiosLoading'>
    abo123123123ut
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "About",
  components: {},
  mounted() {
    console.log(this.$store.state.token, "123123");
  },
  methods: {
    pushvuex() {
      this.$store.state.editableTabs.push({
        title: "New Tab",
        name: "123123",
        content: "New Tab content",
      });
    },
  },
};
</script>
<style scoped >
.about {
}
</style>
