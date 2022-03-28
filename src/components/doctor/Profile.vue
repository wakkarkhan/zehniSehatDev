<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb9></breadcrumb9>
        	<!-- Page Content -->
			<div class="content">
				<div class="container">

					<!-- Doctor Widget -->
					<div class="card">
						<div class="card-body">
							<div class="doctor-widget">
								<div class="doc-info-left">
									<div class="doctor-img">
										<img :src="loadImg()" class="img-fluid" alt="User Image">
									</div>
									<div class="doc-info-cont">
										<h4 class="doc-name">{{therapist_login_data.full_name}}</h4>
										<p class="doc-speciality">{{therapist_login_data.gender}}</p>
										<p class="doc-department"><img src="@/assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality">{{this.therapist_specialization[0].title}}</p>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(35)</span>
										</div>
										<div class="clinic-details">
											<p class="doc-location"><i class="fas fa-map-marker-alt"></i> {{therapist_login_data.postal_adress}} - <a href="javascript:void(0);">Get Directions</a></p>
											<!-- <ul class="clinic-gallery">
												<li>
													<a href="@/assets/img/features/feature-01.jpg" data-fancybox="gallery">
														<img src="@/assets/img/features/feature-01.jpg" alt="Feature">
													</a>
												</li>
											</ul> -->
										</div>
										<!-- <div class="clinic-services">
											<span>Surgery & Radiology</span>
											<span>Social Psychology</span>
										</div> -->
									</div>
								</div>
								<div class="doc-info-right">
									<!-- <div class="clini-infos">
										<ul>
											<li><i class="far fa-thumbs-up"></i> 99%</li>
											<li><i class="far fa-comment"></i> 35 Feedback</li>
											<li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
											<li><i class="far fa-money-bill-alt"></i> $100 per hour </li>
										</ul>
									</div> -->
									<!-- <div class="doctor-action">
										<a href="javascript:void(0)" class="btn btn-white fav-btn">
											<i class="far fa-bookmark"></i>
										</a>
										<router-link to="/patient/chat" class="btn btn-white msg-btn">
											<i class="far fa-comment-alt"></i>
										</router-link>
										<a href="javascript:void(0)" class="btn btn-white call-btn" data-toggle="modal" data-target="#voice_call">
											<i class="fas fa-phone"></i>
										</a>
										<a href="javascript:void(0)" class="btn btn-white call-btn" data-toggle="modal" data-target="#video_call">
											<i class="fas fa-video"></i>
										</a>
									</div> -->
									<div class="clinic-booking">
										<!-- <router-link class="apt-btn" :to="'/patient/checkout/'+this.$route.params.doctor_id+'/'+this.therapist_login_data.full_name">Book Appointment</router-link> -->
										<router-link class="apt-btn" :to="'/patient/booking/'+this.$route.params.doctor_id+'/'+this.therapist_login_data.full_name">Book Appointment</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Doctor Widget -->
					
					<!-- Doctor Details Tab -->
					<div class="card">
						<div class="card-body pt-0">
						
							<!-- Tab Menu -->
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<a class="nav-link active" href="#doc_overview" data-toggle="tab">Overview</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#doc_locations" data-toggle="tab">Locations</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#doc_reviews" data-toggle="tab">Reviews</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#doc_business_hours" data-toggle="tab">Business Hours</a>
									</li>
								</ul>
							</nav>
							<!-- /Tab Menu -->
							
							<!-- Tab Content -->
							<div class="tab-content pt-0">
							
								<!-- Overview Content -->
								<div role="tabpanel" id="doc_overview" class="tab-pane fade show active">
									<div class="row">
										<div class="col-md-12 col-lg-9">
										
											<!-- About Details -->
											<div class="widget about-widget">
												<h4 class="widget-title ">About Me</h4>
												<p>{{therapist_details.about_therapist}}</p>
											</div>
											<!-- /About Details -->
										
											<!-- Education Details -->
											<div class="widget education-widget">
												<h4 class="widget-title">Education</h4>
												<div class="experience-box">
													<ul class="experience-list">
														<li v-for="singleEducation in therapist_education_data" :key="singleEducation.id">
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<a href="#/" class="name">{{singleEducation.university_name}}</a>
																	<div>{{singleEducation.degree_program}}</div>
																	<span class="time">{{singleEducation.tenure}}</span>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<!-- /Education Details -->
									
											<!-- Experience Details -->
											<div class="widget experience-widget">
												<h4 class="widget-title">Work & Experience</h4>
												<div class="experience-box">
													<ul class="experience-list">
														<li v-for="singleWork in therapist_work_data" :key="singleWork.id">
															<div class="experience-user">
																<div class="before-circle"></div>
															</div>
															<div class="experience-content">
																<div class="timeline-content">
																	<a href="#/" class="name">{{singleWork.organization_name}}</a>
																	<span class="time">{{singleWork.tenure}}</span>
																	<span class="time">{{singleWork.designation}}</span>
																</div>
															</div>
														</li>
														
														
													</ul>
												</div>
											</div>
											<!-- /Experience Details -->
											
											<!-- Specializations List -->
											<div class="service-list">
												<h4>Specializations</h4>
												<ul class="clearfix">
													<li>{{this.therapist_specialization[0].title}}</li>
												</ul>
											</div>
											<!-- /Specializations List -->

										</div>
									</div>
								</div>
								<!-- /Overview Content -->
								
								<!-- Locations Content -->
								<div role="tabpanel" id="doc_locations" class="tab-pane fade">
								
									
									
									<!-- Location List -->
									<div class="location-list">
										<div class="row" v-for="singleLocation in therapist_locations_data" :key="singleLocation.id">
										
											<!-- Clinic Content -->
											<div class="col-md-12">
												<div class="clinic-content">
													<h4 class="clinic-name"><a href="#">{{singleLocation.clinic_name}}</a></h4>
													<p class="doc-speciality"></p>
													<div class="rating">
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star"></i>
														<span class="d-inline-block average-rating">(4)</span>
													</div>
													<div class="clinic-details mb-0">
														<p class="clinic-direction"> <i class="fas fa-map-marker-alt"></i>{{singleLocation.address}} <br><a href="javascript:void(0);">Get Directions</a></p>
													</div>

												</div>
											</div>
											<!-- /Clinic Content -->
											
											<!-- Clinic Timing -->
											<!-- <div class="col-md-4">
												<div class="clinic-timing">
													<div>
														<p class="timings-days">
															<span> Tue - Fri </span>
														</p>
														<p class="timings-times">
															<span>11:00 AM - 1:00 PM</span>
															<span>6:00 PM - 11:00 PM</span>
														</p>
													</div>
													<div>
														<p class="timings-days">
															<span>Sat - Sun</span>
														</p>
														<p class="timings-times">
															<span>8:00 AM - 10:00 AM</span>
															<span>3:00 PM - 7:00 PM</span>
														</p>
													</div>
												</div>
											</div> -->
											<!-- /Clinic Timing -->
											
											<!-- <div class="col-md-2">
												<div class="consult-price">
													$350
												</div>
											</div> -->
										</div>
									</div>
									<!-- /Location List -->

								</div>
								<!-- /Locations Content -->
								
								<!-- Reviews Content -->
								<div role="tabpanel" id="doc_reviews" class="tab-pane fade">
								
									<!-- Review Listing -->
									<div class="widget review-listing">
										<ul class="comments-list">
										
									
											
											
											<!-- Comment List -->
											<li>
												<div style="width: 100% !important;display: unset;" class="comment" v-for="singleReview in therapist_reviews_data" :key="singleReview.id">
													<!-- <img class="avatar avatar-sm rounded-circle" alt="User Image" src="@/assets/img/patients/patient2.jpg"> -->
													<div class="comment-body">
														<div class="meta-data">
															<span class="comment-author">Unknown</span>
															<span class="comment-date">Reviewed 4 Days ago</span>
															<div class="review-count rating">
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star filled"></i>
																<i class="fas fa-star"></i>
															</div>
														</div>
														<p class="comment-content">
															{{singleReview.feedback}}
														</p>
														
													</div>
												</div>
											</li>
											<!-- /Comment List -->
											
										</ul>
										
										<!-- Show All -->
										
										<!-- /Show All -->
										
									</div>
									<!-- /Review Listing -->
								
								
						
								</div>
								<!-- /Reviews Content -->
								
								<!-- Business Hours Content -->
								<div role="tabpanel" id="doc_business_hours" class="tab-pane fade">
									<div class="row">
										<div class="col-md-6 offset-md-3">
										
											<!-- Business Hours Widget -->
											<div class="widget business-widget">
												<div class="widget-content">
													<div class="listing-hours">
														<div class="listing-day current">
															<div class="day">Today <span>5 Nov 2019</span></div>
															<div class="time-items">
																<span class="open-status"><span class="badge bg-success-light">Open Now</span></span>
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Monday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Tuesday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Wednesday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Thursday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Friday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Saturday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day closed">
															<div class="day">Sunday</div>
															<div class="time-items">
																<span class="time"><span class="badge bg-danger-light">Closed</span></span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<!-- /Business Hours Widget -->
									
										</div>
									</div>
								</div>
								<!-- /Business Hours Content -->
								
							</div>
						</div>
					</div>
					<!-- /Doctor Details Tab -->

				</div>
			</div>		
			<!-- /Page Content -->
    </div>
</template>
<script>
import TherapistService from '@/api-services/therapists.service';

import appointments from '../../assets/json/doctor/appointments.json'
const images = require.context('@/assets/img/patients', false, /\.jpg$/)
const doctorImages = require.context('@/assets/img/doctors', false, /\.jpg$/)
export default {
    data() {
        return {
			appointments: appointments,
			therapist_login_data:{},
			therapist_details:{},
			therapist_education_data:{},
			therapist_work_data:{},
			therapist_locations_data:{},
			therapist_reviews_data:{},
			therapist_specialization:{}
        }
	},
	created(){
		this.getSingleTherapistProfileData();
	},
	 methods:{
		getSingleTherapistProfileData(){
            //let token = window.localStorage.getItem('token');
			let therapistID = this.$route.params.doctor_id;
            TherapistService.getTherapistProfileService(therapistID).then((response) => {
                if(response.status==200){
                    this.therapist_login_data = response.data.data.login_info;
                    this.therapist_details = response.data.data.therapist_details;
                    this.therapist_education_data = response.data.data.therapist_education;
                    this.therapist_work_data = response.data.data.therapist_work;
                    this.therapist_locations_data = response.data.data.therapist_locations;
                    this.therapist_reviews_data = response.data.data.therapist_reviews;
                    this.therapist_specialization = response.data.data.therapist_specialization;
                    // this.therapist_login_data.full_name = response.data.data.login_info.full_name;
                    // this.therapist_login_data.email = response.data.data.login_info.email;
                    // this.therapist_login_data.password = response.data.data.login_info.password;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});

        },
        loadImg(imgPath, value) {
			 	return doctorImages('./doctor-11.jpg');
        },
    }
}
</script>