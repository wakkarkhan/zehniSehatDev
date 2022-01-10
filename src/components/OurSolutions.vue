<template>
    <!-- Our Solutions -->
			<section class="our-solutions">
				<div class="container">
					<h2 class="section-title">TRENDING WITH ENDOCRINOLOGISTS</h2>

					<div class="row mt-5">
						<div v-for="singleArticle in this.latestCategoriesAllArticlesData" :key="singleArticle.id" class="col-sm-6 col-md-4 col-lg-3">
							<div class="card">
								<h5>
									<router-link :to="'/doctor/blog-details/'+singleArticle.title">{{singleArticle.title}}</router-link>
								</h5>
								<p>{{singleArticle.short_description}}</p>
								<router-link class="read-more-text" :to="'/doctor/blog-details/'+singleArticle.title">Readmore</router-link>
								<!-- <a :href="'/doctor/blog-details/'+singleArticle.title" class="read-more-text">Readmore</a> -->
							</div>
						</div>
					</div>
				</div>
			</section>
	<!-- /Our Solutions -->
</template>
<script>
import HomeService from '@/api-services/home.service';
export default {
	data(){
		return{
			latestCategoriesAllArticlesData:{}
		}
	},
	created(){
		this.getLatestAllArticles();
	},
	methods:{
		getLatestAllArticles(){
			HomeService.getLatestCategoriesAllArticlesService().then((response) => {
				console.log(response.data);
					if(response.data.status==200){
						this.latestCategoriesAllArticlesData = response.data.data;
					}
					else{
						
					}
				}).catch((error) => {
				console.log(error.response.data);
			});

		}
	}
}
</script>