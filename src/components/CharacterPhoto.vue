<template>
  <img :src="photoSrc" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    photoSrc: {
      type: String,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
