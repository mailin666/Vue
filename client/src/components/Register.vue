<template>
  <div>
    <h1>Register</h1>

    <input v-model="email" type="email" name="email" placeholder="email"><br>
    <input v-model="password" type="password" name="password" placeholder="password"><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  watch:{
    email(value){
      console.log('email has changed', value)
    }
  },
  methods:{
    async register(){
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password 
      })
      console.log(response.data);
    }
  },
  mounted(){
    setTimeout(()=>{
      this.email = 'hello world'
    }, 2000)
  }
}
</script>

<style scoped>

</style>
