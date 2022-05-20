<template>
   <!-- Our Benefits -->
			<section class="our-benefits">
				<div class="row m-0">
					<div class="col-md-12 col-lg-12 benefits-text">
						<h3 class="top-title">JOURNAL ARTICLES</h3>
						<h2 class="section-title">JOURNAL ARTICLES</h2>
						<p class="mb-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
						
						<div class="row">
							<div v-for="singleArticle in this.latestArticlesData" :key="singleArticle.id" class="col-md-4 mb-3">
								<h4>
									<router-link :to="'/doctor/blog-details/'+singleArticle.title">{{singleArticle.title}}</router-link>
								</h4>
								<p class="para-text mt-3">{{singleArticle.short_description.slice(0, 250).concat('...')}}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Our Benefits -->
</template>
<script>
import HomeService from '@/api-services/home.service';
export default {
	data(){
		return{
			latestArticlesData:{},
			
		}
	},
	created(){
		this.getLatestArticesData();
	},
	methods:{
		getLatestArticesData(){
			HomeService.getLatestArticlesService().then((response) => {
				console.log(response.data);
					if(response.data.status==200){
						this.latestArticlesData = response.data.data;
					}
					else{
						
					}
				}).catch((error) => {
				console.log(error.response.data);
			});

		},
	
	}
}
</script>