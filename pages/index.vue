<template>
  <div>
    <NavPage />
    <Nuxt />
<div>
    <section id="index">

      <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">

        <!-- Icon Divider-->
         <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"><em>Web Designer</em></i></div>
                <div class="divider-custom-line"></div>
            </div>
         
    
       <br>
        <div class="container d-flex align-items-center flex-column">
          <!-- Masthead Avatar Image-->
          <div class="row">
            <div class="col-md-9">
               <h1 class="masthead-heading text-uppercase mb-0">A little about me</h1>
              <!-- Masthead Heading-->
              <p>I became interested in web design way back in 1998, when I worked for a small electronics company who
                had
                no web site presence.
                Of course, at the time web sites very rudenmentry and had to be hand coded. I created a huge online
                catalog presence for this company
                and found I could work for hours and not even be phased. I loved it. I did not know anything, so I had
                to
                teach myself from scratch
                and back then there was not even css, or least not that I knew, so lots and lots of tables. :-). After
                that company cloaed in 2008 due to
                economic hit, I went back to school for web design. Received a certificate, and then never worked in the
                field. I was intimated and
                suffered from imposter syndrome enough to keep me out of the job market. Fast forward to now and I am
                back, trying to learn all the skills
                I did not back in 2010. Things have changed so much.</p>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-3">
              <div class="row"> <img class="masthead-avatar mb-5" src="../src/assets/img/denise.png"
                  alt="cartoon image of myself" /></div>

            </div>
          </div>
       </div>
              </div>
        </header>
        </section>
        </div>
    <FooterDiv />
    <Nuxt />
  </div>
</template>

<script>
import NavPage from '../src/components/NavPage.vue'
import FooterDiv from '../src/components/FooterDiv.vue'
export default {
  name: "index",
  data() {
    return {
      name: ''
    }
  },
  components: {
    NavPage,
    FooterDiv
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: "index" })
    }
  }
}
</script>

<style scoped>

</style>