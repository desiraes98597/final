<template>
<div>
   <NavPageBlog />
     <Nuxt />

  <article>
	  <nuxt-content :document="article" />
  </article>
  <FooterDiv />
  <Nuxt />
</div>
</template>

<script>
import NavPageBlog from '../src/components/NavPageBlog.vue';
import FooterDiv from '../src/components/FooterDiv.vue'
export default {
    async asyncData({ $content, params }) {
        const article = await $content("blog", params.slug).fetch();
        return { article };
    },
    components: {
        NavPageBlog,
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