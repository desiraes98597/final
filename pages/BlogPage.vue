<template>
<div>
    <NavPage />
     <Nuxt />
      <h2 class="page-section-heading text-center text-uppercase text-white">
                Hello {{ name }}, Welcome to the Blog page</h2>
     <div class="home-page">
	  <h2>Latest Posts</h2>
	  <div class="articles">
		  <div class="article" v-for="article of articles" :key="article">
			  <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
				  <div class="article-inner">
						<img :src="require(`~/assets/resources/${article.img}`)" alt="" />
						<div class="detail">
							<h3>{{ article.title }}</h3>
							<p>{{ article.description }}</p>
						</div>
				  </div>
			  </nuxt-link>
		  </div>
	  </div>
  </div>

    <FooterDiv />
     <Nuxt />
    </div>

</template>

<script>

import NavPage from '../src/components/NavPage.vue'
import FooterDiv from '../src/components/FooterDiv.vue'

export default {
    async asyncData({ $content, params }) {
		const articles = await $content('blog', params.slug)
			.only(['title', 'description', 'img', 'slug'])
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			articles
		}
	},

    name: "BlogPage",
    data() {
        return {
            name: ''
        }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'Blog Page',
            content: 'This the my blog page'
          }
        ]
      }
    },
    components: {
        NavPage,
        FooterDiv
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        // this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: "BlogPage" })
        }
        // else {
        //   this.$router.push({SignUp})
        // }
    }

}
</script>

<style scoped>
.page-section .page-section-heading {
    padding-top: 6rem;
}

.home-page {
  padding: 50px 30px;
}

h2 {
  margin-bottom: 30px;
  text-align: center;
}

.articles {
  margin: 0 auto;
  max-width: 800px;
}

.article {
  margin-bottom: 15px;
}

.article-inner {
  padding: 15px;
  background: #FFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
}

.article-inner img {
  display: block;
  width: 100%;
  max-width: 300px;
}
.article-inner .detail {
  padding-left: 15px;
  padding-right: 15px;
}

h3 {
  color: #212121;
  font-size: 24px;
  text-decoration: none;
}

p {
  color: #888;
  font-size: 18px;
  text-decoration: none;
}
</style>