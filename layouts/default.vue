<template>
  <div>
<NavPageBlog />
     <Nuxt />
     <!-- <FooterDiv />
  <Nuxt /> -->
   

  </div>
</template>

<script>
import NavPageBlog from '../src/components/NavPageBlog.vue';
import FooterDiv from '../src/components/FooterDiv.vue'
export default {
   
    components: {
        NavPageBlog,
        FooterDiv
    },
}
</script>



