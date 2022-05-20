<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb16></breadcrumb16>
        <!-- Page Content -->
			<div class="content">
				<div class="container">
				
					<div class="row">
						<div class="col-12">
						
							<div class="card">
								<div class="card-body">
									<div class="booking-doc-info">
										<router-link to="/doctor/profile" class="booking-doc-img">
											<img src="@/assets/img/doctors/doctor-11.jpg" alt="User Image">
										</router-link>
										<div class="booking-info">
											<h4><router-link to="/doctor/profile">{{this.$route.params.doctor_name}}</router-link></h4>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">35</span>
											</div>
											<p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 col-sm-12">
									<div class="form-group card-label">
										<label><h6>Please Select Date</h6></label> 
										<!-- <input type="text" required="required" class="form-control"> -->
										<datepicker class="col-12 col-sm-6 col-md-6 form-control my-input-picker" v-model="selectedDate" :format="customFormatter" @closed="checkDay"></datepicker>
									</div>
								</div>
								<!-- <div class="col-12 col-sm-6 col-md-6">
										<datepicker class="col-12 col-sm-6 col-md-6" v-model="selectedDate" :format="customFormatter" @closed="checkDay"></datepicker>
								</div> -->
								<div class="col-12 col-sm-6 col-md-6 text-sm-right">
									<div class="bookingrange btn btn-sm mb-3">
										<!-- <i class="far fa-calendar-alt mr-2"></i> -->
									
										<h4 class="mb-1">{{selectedDate}}</h4>
									<!-- <p class="text-muted">Monday</p> -->
										<!-- <i class="fas fa-chevron-down ml-2"></i> -->
									</div>
								</div>
                            </div>
							<!-- Schedule Widget -->
							<div class="card booking-schedule schedule-widget">
							
								<!-- Schedule Header -->
								<!-- <div class="schedule-header">
									<div class="row">
										<div class="col-md-12">
										
											Day Slot
											<div class="day-slot">
												<ul>
													<li class="left-arrow">
														<a href="">
															<i class="fa fa-chevron-left"></i>
														</a>
													</li>
													<li>
														<span>Mon</span>
														<span class="slot-date">11 Nov <small class="slot-year">2019</small></span>
													</li>
													<li>
														<span>Tue</span>
														<span class="slot-date">12 Nov <small class="slot-year">2019</small></span>
													</li>
													<li>
														<span>Wed</span>
														<span class="slot-date">13 Nov <small class="slot-year">2019</small></span>
													</li>
													<li>
														<span>Thu</span>
														<span class="slot-date">14 Nov <small class="slot-year">2019</small></span>
													</li>
													<li>
														<span>Fri</span>
														<span class="slot-date">15 Nov <small class="slot-year">2019</small></span>
													</li>
													<li>
														<span>Sat</span>
														<span class="slot-date">16 Nov <small class="slot-year">2019</small></span>
													</li>
													<li>
														<span>Sun</span>
														<span class="slot-date">17 Nov <small class="slot-year">2019</small></span>
													</li>
													<li class="right-arrow">
														<a href="">
															<i class="fa fa-chevron-right"></i>
														</a>
													</li>
												</ul>
											</div>
											/Day Slot
											
										</div>
									</div>
								</div> -->
								<!-- /Schedule Header -->
								
								<!-- Schedule Content -->
								<div class="schedule-cont">
									<div class="row">
										<div class="col-md-12">
										
											<!-- Time Slot -->
											<div class="time-slot">
												<ul class="clearfix">
													<li>
														<a class="timing" @click="gotoLink">
														<!-- <router-link class="timing" to="patient/checkout/98"> -->
															<span>9:00</span> <span>AM</span>
														<!-- </router-link> -->
														</a>
														<a class="timing" @click="gotoLink">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" @click="gotoLink">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" @click="gotoLink">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" @click="gotoLink">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" @click="gotoLink">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink" selected>
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" @click="gotoLink">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" @click="gotoLink">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" @click="gotoLink">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
												</ul>
											</div>
											<!-- /Time Slot -->
											
										</div>
									</div>
								</div>
								<!-- /Schedule Content -->
								
							</div>
							<!-- /Schedule Widget -->
							
							<!-- Submit Section -->
							<div class="submit-section proceed-btn text-right">
										<!-- <router-link class="apt-btn" :to="'/patient/checkout/'+this.$route.params.doctor_id+'/'+this.this.$route.params.doctor_name">Book Appointment</router-link> -->

								<!-- <router-link to="/patient/checkout" class="btn btn-primary submit-btn">Proceed to Pay</router-link> -->
							</div>
							<!-- /Submit Section -->
							
						</div>
					</div>
				</div>

			</div>		
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
export default {
	data(){
		return {
			selectedDate:''
		}
	},

	methods: {
		checkDay(){
			alert(this.selectedDate.getDay());
			alert(this.selectedDate.getDate());
		},
    	customFormatter(date) {
	  		return moment(date).format('MMMM Do YYYY');
		},
		gotoLink(){
			this.$router.push('/patient/checkout/98/Test Therapist');
		}
	},
	components: {
    	Datepicker
  	}
}
</script>