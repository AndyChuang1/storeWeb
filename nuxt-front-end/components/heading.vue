<template>
  <div class="col-lg-4">
    <img class="rounded-circle"
      :src="img"
      alt="Generic placeholder image"
      width="140"
      height="140">
    <h2>{{Head}}</h2>
    <p>{{Pcontents}}</p>
    <p><a class="btn btn-secondary"
        :href="link"
        role="button" target="_blank">詳細資訊 &raquo;</a></p>
  </div>

</template>
<script>
export default {
  name: "heading",
  data() {
    return {
    };
  },
  props: {
      img: {
        default() {
          return 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
        },
        type: String
      },
      Head: String,
      Pcontents: String,
      link: {
        default() {
          return '#'
        },
        type:String

      }
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
}
</style>
