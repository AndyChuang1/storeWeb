<template>
  <div id="titleheader" class="maintop">
    <div class="title-text">
      <h1>{{ title }}</h1>
      <slot></slot>
    </div>
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
<style lang="scss" scoped>
.maintop {
  border-bottom: 3px solid #808080;
  .title-text {
    // display: flex;
    font-family: "Times New Roman", KaiTi, STKaiti, DFKai-sb;
    align-items: flex-end;
  }
}

.maintop h1 {
  text-align: left;
  border-left: 3px solid #b7513f;
  padding-left: 20px;
}
</style>
