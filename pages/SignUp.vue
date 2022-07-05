<template>
<div>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="signUp"> Sign Up</button>
        <p>
            <NuxtLink to="/login">Already Signed Up? Login Here</NuxtLink>
        </p>

    </div>
     </div>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue';
export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                password: this.password,
                name: this.name
            });

            console.warn(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'BlogPage' })
            }
        }
    },


    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: "BlogPage" })
        }
    }


}



</script>

<style scoped>


.register {
    margin-top:150px;
}
.register input {
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


.register button {
    width: 320px;
    height: 40px;
    background: purple;
    color: white;
    cursor: pointer;
    margin-right: auto;
    margin-left: 550px;
    margin-top:20px;

}

.register p {
   text-align:center;
    margin-top:20px;
    color:purple;
    font-size: 18px;
}
</style>
