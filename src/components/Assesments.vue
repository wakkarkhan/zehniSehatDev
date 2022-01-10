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
					<h3 class="top-title text-center">ZehniSehat Standard Assesment Tests </h3>
					<h2 class="section-title text-center">Pick and get things done quickly</h2>

					<div class="row mt-5">
						<!-- <div class="col-md-4" v-for="singleArticle in this.randomArticlesData" :key="singleArticle.id">
							<div class="card">
								<img src="@/assets/img/news-event-01.jpg" class="card-img-top" alt="News and Events">
								<div class="card-body">
								  <h5 class="card-title">{{singleArticle.title}}</h5>
								  <h3>Who's the inner you?</h3>
								  <p class="card-text">{{singleArticle.description}}</p>
								  <h6>Posted By: Admin</h6>
								  <router-link to="/doctor/blog-details" class="read-more-text">Readmore</router-link>
								</div>
							</div>
						</div> -->
						 <div class="col-md-4">
							<div class="card">
								<img src="@/assets/img/green.png" class="card-img-top" alt="News and Events">
								<div class="card-body">
								  <h5 class="card-title">General Anxiety Disorder-7</h5>
								   <router-link to="/doctor/assessment" class="read-more-text"><h3>GAD-7</h3></router-link>
								  <p class="card-text">Generalized Anxiety Disorder 7 (GAD-7) is a self-reported questionnaire for screening and severity measuring of generalized anxiety disorder (GAD).</p>
								 
								  <router-link to="/doctor/assessment" class="read-more-text">Here</router-link>
								</div>
							</div>
						</div>
                         <div class="col-md-4">
							<div class="card">
								<img src="@/assets/img/green.png" class="card-img-top" alt="News and Events">
								<div class="card-body">
								  <h5 class="card-title">PATIENT HEALTH QUESTIONNAIRE-9</h5>
								   <router-link to="/doctor/assessment-phq" class="read-more-text"><h3>PHQ-9</h3></router-link>
								  <p class="card-text">The PHQ-9 (DEP-9 in some sources[1]) is a 9-question instrument given to patients in a primary care setting to screen for the presence and severity of depression.</p>
								 
								  <router-link to="/doctor/assessment-phq" class="read-more-text">Here</router-link>
								</div>
							</div>
						</div>
						<!-- <div class="col-md-4">
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
						<router-link to="/doctor/blog-list" class="btn btn-primary">See All</router-link>
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