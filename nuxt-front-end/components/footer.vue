<template>

  <footer class="container"
      id="main-footer">
      <p>&copy; 永盛堂中藥行版權所有 &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>

</template>
<script>
export default {
  name: "mainfooter",
  data() {
    return {
      msg: "© Copyright 2017, Geker Corporation"
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'scoped>
$break-mobile:480px;
#main-footer {
    position: absolute;
   left: 0;
   bottom: 0;
   right: 0;
   width: 100%;
   padding: 1rem;
   text-align: center;
   @media screen and(max-width: $break-mobile) {
    position: relative;
}
}

</style>
