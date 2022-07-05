<template>
    <div>
       <h1>Login</h1>
        <div class="login">
            <input type="text" v-model="name"  placeholder="Enter Name" />
             <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="login"> Log In</button>
            <p >
                <NuxtLink to="/sign-up">New to this page? Sign up here</NuxtLink>
            </p>
    </div>
          
    </div>
     
</template>


<script>
import NavPageBlog from '../src/components/NavPageBlog.vue';
import FooterDiv from '../src/components/FooterDiv.vue'
// import { logicalExpression } from '@babel/types'
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: ''
        }

    },
     components: {
        NavPageBlog,
        FooterDiv
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'BlogPage' })
            }
            console.warn(result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: "BlogPage" })
        }
    }

};



</script>

<style scoped>

.login {
    margin-top:100px;
}
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-top:50px;
    /* margin-bottom: 30px; */
    margin-right: auto;
    margin-left: auto;
    border: 1px solid purple;
}


.login button {
    width: 320px;
    height: 40px;
    background: purple;
    color: white;
    cursor: pointer;
    margin-right: auto;
    margin-left: 690px;
    margin-top:20px;

  }

.login p {
    text-align:center;
    margin-top:20px;
    color:purple;
    font-size: 18px;
}
</style>