<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb10></breadcrumb10>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
							<!-- <search-filter></search-filter> -->




							<!-- Search Filter -->
			<div class="card search-filter">
				<div class="card-header">
					<h4 class="card-title mb-0">Select Specialist</h4>
				</div>
				<div class="card-body">
				<!-- <div class="filter-widget">
					<div class="cal-icon">
						<input type="text" class="form-control datetimepicker" placeholder="Select Date">
					</div>			
				</div> -->
				<!-- <div class="filter-widget">
					<h4>Gender</h4>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="gender_type" checked>
							<span class="checkmark"></span> Male 
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="gender_type">
							<span class="checkmark"></span> Female 
						</label>
					</div>
				</div> -->
				<div class="filter-widget">
					<!-- <h4>Select Specialist</h4> -->
					<div v-for="singleCategory in this.allCategoriesData" :key="singleCategory.id">
						<label class="custom_check">
							<input  v-model="checkedUserIds" v-bind:value="singleCategory.id" type="checkbox" name="select_specialist">
							<span class="checkmark"></span> {{singleCategory.title}}
						</label>
					</div>
					
					
					
				</div>
					<div class="btn-search">
						<button @click="getFilteredData()" type="button" class="btn btn-block">Search</button>
					</div>	
				</div>
			</div>
		<!-- /Search Filter -->	













						</div>
						
						<div class="col-md-12 col-lg-8 col-xl-9">

							<!-- Doctor Widget -->
							<!-- <div class="card" v-for="item in allTherapistData.slice(0,5)" :key="item.id"> -->
							<div class="card" v-for="item in allTherapistData" :key="item.id">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<router-link  :to="'/doctor/profile/'+item.id">
													<img :src="loadImg()" class="img-fluid" alt="User Image">
												</router-link>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><router-link :to="'/doctor/profile/'+item.id">{{item.full_name}}</router-link></h4>
												<p class="doc-speciality">{{item.gender}}</p>
												<!-- <h5 class="doc-department"><img :src="loadImg()" class="img-fluid" alt="Speciality">{{item.category_title}}</h5> -->
												<!-- <div class="rating" v-if="item.rating == '1'">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star "></i>
													<i class="fas fa-star "></i>
													<i class="fas fa-star "></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">({{item.rating}}) reviews</span>
												</div>
												<div class="rating" v-if="item.rating == '2'">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star "></i>
													<i class="fas fa-star "></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">({{item.rating}}) reviews</span>
												</div>
												<div class="rating" v-if="item.rating == '3'">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star "></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">({{item.rating}}) reviews</span>
												</div>
												<div class="rating" v-if="item.rating == '4'">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">({{item.rating}}) reviews</span>
												</div> -->
												<!-- <div class="clinic-details">
													<ul class="clinic-gallery">
														<li >
															<a  data-fancybox="gallery">
																<img :src="loadImg()" alt="Feature">
															</a>
														</li>
													</ul>
												</div> -->
												<div class="rating"></div>
												<div class="clinic-services">
													<span>{{item.category_title}}</span>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<!-- <li><i class="far fa-thumbs-up"></i> {{item.likes}}</li>
													<li><i class="far fa-comment"></i> {{item.feedback}} Feedback</li> -->
													<li><i class="fas fa-map-marker-alt"></i> {{item.postal_adress}}</li>
													<li><i class="far fa-money-bill-alt"></i> {{item.therapist_fee}} <i class="fas fa-info-circle" data-toggle="tooltip" title="You have to pay this fee"></i> </li>
												</ul>
											</div>
											<div class="clinic-booking">
												<router-link class="view-pro-btn" :to="'/doctor/profile/'+item.id">View Profile</router-link>
												<router-link class="apt-btn" :to="'/patient/checkout/'+item.id+'/'+item.full_name">Book Appointment</router-link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Doctor Widget -->

						
							<div class="load-more text-center">
								<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>	
							</div>	
						</div>
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
            <layout-footer></layout-footer>
    </div>
</template>

<script>
import searchresults from '../../assets/json/patient/searchresults.json';
const doctorImages = require.context('@/assets/img/doctors', false, /\.jpg$/)
const specialityImages = require.context('@/assets/img/specialities', false, /\.png$/)
const featureImages = require.context('@/assets/img/features', false, /\.jpg$/)
import TherapistService from '@/api-services/therapists.service';
import HomeService from '@/api-services/home.service';

export default {
	
	data() {
		return {
			searchresults: searchresults,
			allTherapistData: {},
			allCategoriesData: {},
			checkedUserIds: [],
		}
	},
	created(){
		this.getAllTherapists();
		this.getAllCategories();
	},
	 methods: {
		 getFilteredData(){
			 console.log(this.checkedUserIds);
			 TherapistService.getAllFilteredTherapistService(this.checkedUserIds).then((response) => {
				//console.log(response.data);
					if(response.data.status==200){
						this.allTherapistData = {};
						this.allTherapistData = response.data.data;
					}
					else{
						
					}
				}).catch((error) => {
				console.log(error.response.data);
			});
		 },
		 getAllCategories(){
			 HomeService.getHomeAllCategories().then((response) => {
				//console.log(response.data);
					if(response.data.status==200){
						this.allCategoriesData = response.data.data;
					}
					else{
						
					}
				}).catch((error) => {
				console.log(error.response.data);
			});
		 },
		getAllTherapists(){
			TherapistService.getAllTherapistService().then((response) => {
				//console.log(response.data);
					if(response.data.status==200){
						this.allTherapistData = response.data.data;
					}
					else{
						
					}
				}).catch((error) => {
				console.log(error.response.data);
			});
		},
        loadImg(imgPath, value) {
			// if(value == 1) {
			 	return doctorImages('./doctor-11.jpg');
			// } else if(value == 2) {
			// 	return specialityImages('./' + imgPath)
			// } else {
			// 	return featureImages('./' + imgPath)
			// }
        },
	},
	mounted() {
		if($('.datetimepicker').length > 0) {
			$('.datetimepicker').datetimepicker({
				format: 'DD/MM/YYYY',
				icons: {
					up: "fas fa-chevron-up",
					down: "fas fa-chevron-down",
					next: 'fas fa-chevron-right',
					previous: 'fas fa-chevron-left'
				}
			});
		}
	},
}
</script>