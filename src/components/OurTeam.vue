<template>
    <!-- Our Team -->
			<section class="our-team ">
				<div class="container">
					<!-- <h3 class="top-title">{{ this.singleLatestCategoryData.title}}</h3> -->
					<h2 class="section-title">DISORDERS</h2>
						
					<!--  -->
					<div class="row-sm mrg-10">
						<div class="">
							<!-- <div class="card-header">
								<h4 class="card-title">Solid justified</h4>
							</div> -->
							<div class="">
								<ul class="nav nav-tabs nav-tabs-solid nav-justified">
									<li v-for="(singleCategory, index) in this.latestCategoriesData" :key="singleCategory.id" class="nav-item">
										<a v-if="index==0" class="nav-link active" :href="'#solid-justified-tab1'+singleCategory.id" data-toggle="tab">{{singleCategory.title}}</a>
										<a v-else class="nav-link" :href="'#solid-justified-tab1'+singleCategory.id" data-toggle="tab">{{singleCategory.title}}</a>
										<!-- <a v-if="index>0" class="nav-link" href="#solid-justified-tab1" data-toggle="tab">{{singleCategory.title}}</a> -->
									</li>
								</ul>
								<div class="tab-content">
									<div v-for="(singleCategoryArticle, index) in this.latestCategoriesArticlesData" :key="singleCategoryArticle.id" :class="'tab-pane text-left '+(index==0 ? 'active':'')" :id="'solid-justified-tab1'+singleCategoryArticle.id">
										<!-- Tab content {{singleCategoryArticle.id}} -->
										<!--  -->
										<div class="row-sm mrg-10">
											
											<!-- Location List -->
											<div class="location-list">
												<div class="row">
												
													<!-- Clinic Content -->
													<div class="col-md-12">
														<div class="clinic-content">
															
															<ul class="latest-posts">
																	<li v-for="singleArticle in singleCategoryArticle.single_category_articles" :key="singleArticle.id">
																		<!-- <div v-if="singleArticle.check_articles" class="post-thumb my-post-thumb"> -->
																		<div class="post-thumb my-post-thumb">
																			<router-link to="/doctor/blog-details">
																				<img class="img-fluid width-100" src="@/assets/img/blog/blog-01_old.jpg" alt="">
																			</router-link>
																		</div>
																		<div class="my-post-info">
																			<h4>
																				<router-link :to="'/doctor/blog-details/'+singleArticle.title">{{singleArticle.title}}</router-link>
																			</h4>
																			<p>4 Dec 2019</p>
																			<p>{{singleArticle.short_description}}</p>
																		</div>
																	</li>
															</ul>
											
														</div>
													</div>
								
													
												</div>
											</div>
						
										</div>
										<!--  -->
									</div>
								
								</div>
							</div>
						</div>
					</div>
					<!--  -->
				</div>
			</section>
    <!-- /Our Team -->
</template>
<script>
import HomeService from '@/api-services/home.service';
export default {
	data(){
		return{
			singleLatestCategoryData:{},
			latestCategoriesData:{},
			latestCategoriesArticlesData:{},
			
		}
	},
	created(){
		this.getSingleLatestCategory();
		this.getLatestCategories();
		this.getLatestCategoriesArticles();
	},
	methods:{
		getSingleLatestCategory(){
			HomeService.getSingleLatestCategoryService().then((response) => {
				console.log(response.data);
					if(response.data.status==200){
						this.singleLatestCategoryData = response.data.data;
					}
					else{
						
					}
				}).catch((error) => {
				console.log(error.response.data);
			});

		},
		getLatestCategories(){
			HomeService.getLatestCategoriesService().then((response) => {
				console.log(response.data);
					if(response.data.status==200){
						this.latestCategoriesData = response.data.data;
					}
					else{
						
					}
				}).catch((error) => {
				console.log(error.response.data);
			});

		},
		getLatestCategoriesArticles(){
			HomeService.getLatestCategoriesArticlesService().then((response) => {
				console.log(response.data);
					if(response.data.status==200){
						this.latestCategoriesArticlesData = response.data.data;
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
<style scoped>
.my-post-thumb{
	width: 227px !important;
}
.my-post-info{
	float: left !important;
    width: 800px !important;
    margin-left: 17px !important;
}
.width-100{
	width: 100% !important;
}
.mrg-10{
	margin-top: 10px;
}
.our-team .card-body{
	background-color: white !important;
}
</style>