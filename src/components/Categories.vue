<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <!-- <breadcrumb30></breadcrumb30> -->
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12">
							<!--  -->
                            	<section class="news-events">
				<div class="container">
					<h3 class="top-title text-center">ZehniSehat Supports All Categories</h3>
					<h2 class="section-title text-center">Latest Edition</h2>

					<div class="row mt-5">
						<div class="col-md-4" v-for="singleCategory in this.all_categories" :key="singleCategory.id">
							<div class="card">
								<img src="@/assets/img/blog/blog-01_old.jpg" class="card-img-top" alt="News and Events">
								<div class="card-body">
								  <!-- <h5 class="card-title">{{singleCategory.created_at}}</h5> -->
								  <router-link to="#" ><h3 class="color-yellow">{{singleCategory.title}}</h3></router-link>
								  <p class="card-text">{{singleCategory.short_des}}</p>
								  <h6>Posted By: {{singleCategory.full_name}}</h6>
								  <router-link to="#" class="read-more-text">Readmore</router-link>
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
						<router-link to="#" class="btn btn-primary">See All</router-link>
					</div>
				</div>
			</section>
                            <!--  -->
						</div>
					</div>
				</div>
			</div>		
		<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>















<script>
import HomeService from '@/api-services/home.service';

export default {
	data(){
		return{
			all_categories:{}
		}
	},
	created(){
		this.getHomeAllCategories();
	},
	methods:{
		getHomeAllCategories(){
			HomeService.getHomeAllCategories().then((response) => {
				console.log(response.data);
					if(response.data.status==200){
						this.all_categories = response.data.data;
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
<style>
.color-yellow{
	color: #E1AD01 !important;
}
</style>