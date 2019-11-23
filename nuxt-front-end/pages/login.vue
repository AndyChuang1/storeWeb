<template>
  <div id="login">
    <no-ssr>
      <div class="text-center">
        <form class="form-signin" >
          <img class="mb-4" src="@/assets/favicon.png" alt width="72" height="72">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type
            id="inputEmail"
            class="form-control"
            placeholder="User"
            required
            autofocus
            v-model="user"
          >
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="pawd"
          >
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="login">Sign in</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
      </div>
    </no-ssr>
  </div>
</template>
<script>
import "@/assets/css/signin.scss";
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: "login",
  data() {
    return {
      user: "",
      pawd: ""
    };
  },
  middleware:'notAuthenticated',
  methods: {
    login() {
      var header = {
            "Content-Type": "application/x-www-form-urlencoded"
          }
      this.$axios.post(
        "/login",
        {
          name: this.user,
          pawd: this.pawd
        },
        {
          headers: header
        }
      )
        .then(res => {
          const {data}=res;
          if (!data.success){
            alert(data.message)
          }else{
            this.$store.dispatch('auth/login',data.token);
            Cookie.set('auth', data.token,{ expires: 1 })
            this.$router.push('/admin')
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkToken(){
      var token = process.browser?localStorage.getItem("token") : null;
      this.$store.dispatch('auth/checkToken',token);
      this.$router.push('/admin');
    }
  },
  created(){
    // this.checkToken();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
