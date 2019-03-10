export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth.token) {
        console.log('Token not get')
        console.log(store.state.auth)
      return redirect('/login')
    }
  }