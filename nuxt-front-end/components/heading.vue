<template>
  <div class="col-lg-4 heading--height">
    <img
      class="rounded-circle"
      :src="img"
      alt="Generic placeholder image"
      :width="size"
      :height="size"
    />
    <h2>{{ Head }}</h2>
    <p>{{ Pcontents }}</p>
    <p>
      <a class="btn btn-secondary" :href="link" role="button" target="_blank"
        >{{ btnContent }} &raquo;</a
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "heading",
  data() {
    return {};
  },
  props: {
    img: {
      default() {
        return "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
      },
      type: String
    },
    Head: String,
    Pcontents: String,
    link: {
      default() {
        return "#";
      },
      type: String
    },
    btnContent: {
      default() {
        return "詳細資訊";
      },
      type: String
    },
    size: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.heading--height {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
}
</style>
