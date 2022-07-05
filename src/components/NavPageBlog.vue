<template>

 <!-- Navigation-->
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Denise Pedro</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="navbar-brand"> <NuxtLink to="/">Home</NuxtLink></li>
                        <li class="navbar-brand"> <NuxtLink to="/PortfolioPage">Portfolio</NuxtLink></li>
                        <li class="navbar-brand"> <NuxtLink to="/ResumePage">Resume</NuxtLink></li>
                        <li class="navbar-brand">  <NuxtLink to="/ContactPage">Contact</NuxtLink></li>
                        <li class="navbar-brand">  <NuxtLink to="/BlogPage">Blog</NuxtLink></li>
                        <span class="navbar-brand"><a v-on:click="logout" href="#">Logout</a></span>                    </ul>
                </div>
            </div>
        </nav>

</template>

<script>
export default {
    name:'NavPageBlog',
  
    
    methods: {
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
        
    }
}

</script>

<style scoped>

/* @import '~/assets/css/style.css';
@import '~/assets/css/style_bootstrap.css'; */

.navbar-brand a {
  text-decoration: none;
  color:white;
  font-size:17px;
  margin-right: 5px;
  padding:1rem;
 }

.navbar-brand a:hover {
    background-color:#15967d;
    border-radius: 5px;
 
}

.current {
    background-color:#15967d;
    border-radius: 5px;
 
}


.page-section .page-section-heading {
    padding-top:3rem;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

</style>