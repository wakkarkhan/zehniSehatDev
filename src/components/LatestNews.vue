<template>
    <!-- News and Events -->
			<section class="news-events">
				<div class="container">
					<h3 class="top-title text-center">ZehniSehat News</h3>
					<h2 class="section-title text-center">Latest News and Events</h2>

					<div class="row mt-5">
						<div class="col-md-4" v-for="singleArticle in this.randomArticlesData" :key="singleArticle.id">
							<div class="card">
								<img src="@/assets/img/blog/blog-01_old.jpg" class="card-img-top" alt="News and Events">
								<div class="card-body">
								  <h6 class="card-title">{{singleArticle.category_title}}</h6>
								  	<h4>
									  <router-link :to="'/doctor/blog-details/'+singleArticle.article_title">{{singleArticle.article_title}}</router-link>
									</h4>
								  <p class="card-text">{{singleArticle.short_des}}</p>
								  <h6>Posted By: Admin</h6>
								  <router-link :to="'/doctor/blog-details/'+singleArticle.article_title" class="read-more-text">Readmore</router-link>
								</div>
							</div>
						</div>
						<!-- <div class="col-md-4">
							<div class="card">
								<img src="@/assets/img/news-event-02.jpg" class="card-img-top" alt="News and Events">
								<div class="card-body">
								  <h5 class="card-title">Category Name</h5>
								  <h3>Who's the inner you?</h3>
								  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								  <h6>Posted By: Admin</h6>
								  <router-link to="/doctor/blog-details" class="read-more-text">Readmore</router-link>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card">
								<img src="@/assets/img/news-event-03.jpg" class="card-img-top" alt="News and Events">
								<div class="card-body">
								  <h5 class="card-title">Category Name</h5>
								  <h3>Who's the inner you?</h3>
								  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								  <h6>Posted By: Admin</h6>
								  <router-link to="/doctor/blog-details" class="read-more-text">Readmore</router-link>
								</div>
							</div>
						</div> -->
					</div>
					<div class="text-center mt-3 mb-3">
						<router-link to="/doctor/blog-list" class="btn btn-primary">MORE BLOG</router-link>
					</div>
				</div>
			</section>
			<!-- /News and Events -->
</template>
<script>
import HomeService from '@/api-services/home.service';

export default {
	data(){
		return{
			randomArticlesData:{}
		}
	},
	created(){
		this.getRandomArticles();
	},
	methods:{
		getRandomArticles(){
			HomeService.getRandomArticlesService().then((response) => {
				console.log(response.data);
					if(response.data.status==200){
						this.randomArticlesData = response.data.data;
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