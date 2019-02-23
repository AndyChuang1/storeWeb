<template>
  <div id="titleheader" class="maintop">

    <h1>{{title}}</h1>
    <slot></slot>
  </div>

</template>
<script>
export default {
  name: "titleheader",
  data() {
    return {
      msg: "© Copyright 2017, Geker Corporation"
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maintop {
  border-bottom: 3px solid #808080;
}

.maintop h1 {
  text-align: left;
  border-left: 3px solid #b7513f;
  padding-left: 20px;
}
</style>
