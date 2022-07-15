<template>
<div>
   <NavPage />
     <Nuxt />

  <article>
	  <nuxt-content :document="article" />
  </article>
  <FooterDiv />
  <Nuxt />
</div>
</template>

<script>
import NavPage from '../src/components/NavPage.vue';
import FooterDiv from '../src/components/FooterDiv.vue'
export default {
    async asyncData({ $content, params }) {
        const article = await $content("blog", params.slug).fetch();
        return { article };
    },
    components: {
        NavPage,
        FooterDiv
    },
}
</script>

<style>
article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 800px;
}

h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
}
</style>