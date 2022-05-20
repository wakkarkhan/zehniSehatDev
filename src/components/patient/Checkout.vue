<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb17></breadcrumb17>
        <!-- Page Content -->
			<div class="content">
				<div class="container">

					<div class="row">
						<div class="col-md-7 col-lg-8">
							<div class="card">
								<div class="card-body">
								
									<!-- Checkout Form -->
									<form @submit.prevent="bookAppointment">
									
										<!-- Personal Information -->
										<div class="info-widget">
											<h4 class="card-title">Booking Information</h4>
											<div class="row">
												<!-- <div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>Booking</label>
														<VueCtkDateTimePicker v-model="appointment_data.dateTime" />
														
													</div>
												</div> -->
												<div class="col-md-12 col-sm-12">
													<div class="form-group card-label">
														<label>Full Name</label>
														<input v-model="appointment_data.patient_full_name" class="form-control" type="text" required>
													</div>
												</div>
												<div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>Phone</label>
														<input v-model="appointment_data.patient_phone" class="form-control" type="number" required>
													</div>
												</div>
												<div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>Email</label>
														<input v-model="appointment_data.patient_email" class="form-control" type="email" required>
													</div>
												</div>
												<div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>Password</label>
														<input v-model="appointment_data.patient_password" class="form-control" type="password" required>
													</div>
												</div>
												<div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>Confirm Password</label>
														<label class="text-danger" v-show="danger">Password not matched</label>
														<input v-on:blur="validate" v-model="appointment_data.patient_confirm_password" class="form-control" type="password" required>
													</div>
												</div>
											</div>
											<!-- <div class="exist-customer">Existing Customer? <a href="#">Click here to login</a></div> -->
										</div>
										<!-- /Personal Information -->
										
										<div class="payment-widget">
											<!-- <h4 class="card-title">Payment Method</h4> -->
											
											<!-- Credit Card Payment -->
											<!-- <div class="payment-list">
												<label class="payment-radio credit-card-option">
													<input type="radio" name="radio" checked>
													<span class="checkmark"></span>
													Credit card
												</label>
												<div class="row">
													<div class="col-md-6">
														<div class="form-group card-label">
															<label for="card_name">Name on Card</label>
															<input class="form-control" id="card_name" type="text">
														</div>
													</div>
													<div class="col-md-6">
														<div class="form-group card-label">
															<label for="card_number">Card Number</label>
															<input class="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text">
														</div>
													</div>
													<div class="col-md-4">
														<div class="form-group card-label">
															<label for="expiry_month">Expiry Month</label>
															<input class="form-control" id="expiry_month" placeholder="MM" type="text">
														</div>
													</div>
													<div class="col-md-4">
														<div class="form-group card-label">
															<label for="expiry_year">Expiry Year</label>
															<input class="form-control" id="expiry_year" placeholder="YY" type="text">
														</div>
													</div>
													<div class="col-md-4">
														<div class="form-group card-label">
															<label for="cvv">CVV</label>
															<input class="form-control" id="cvv" type="text">
														</div>
													</div>
												</div>
											</div> -->
											<!-- /Credit Card Payment -->
											
											<!-- Paypal Payment -->
											<!-- <div class="payment-list">
												<label class="payment-radio paypal-option">
													<input type="radio" name="radio">
													<span class="checkmark"></span>
													Paypal
												</label>
											</div> -->
											<!-- /Paypal Payment -->
											
											<!-- Terms Accept -->
											<div class="terms-accept">
												<div class="custom-checkbox">
												   <input type="checkbox" id="terms_accept" required>
												   <label for="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
												</div>
											</div>
											<!-- /Terms Accept -->
											
											<!-- Submit Section -->
											<div class="submit-section mt-4">
												<button v-show="submit" type="submit" class="btn btn-primary submit-btn">Confirm </button>
											</div>
											<!-- /Submit Section -->
											
										</div>
									</form>
									<!-- /Checkout Form -->
									
								</div>
							</div>
							
						</div>
						
						<div class="col-md-5 col-lg-4 theiaStickySidebar">
						
							<!-- Booking Summary -->
							<div class="card booking-card">
								<div class="card-header">
									<h4 class="card-title">Booking Summary</h4>
								</div>
								<div class="card-body">
								
									<!-- Booking Doctor Info -->
									<div class="booking-doc-info">
										<router-link to="/doctor/profile" class="booking-doc-img">
											<img src="@/assets/img/doctors/doctor-11.jpg" alt="User Image">
										</router-link>
										<div class="booking-info">
											<h4><router-link :to="'/doctor/profile/'+this.$route.params.doctor_id">{{this.$route.params.doctor_name}}</router-link></h4>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">35</span>
											</div><br>
											<div class="clinic-details">
												<!-- <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p> -->
											</div>
										</div>
									</div>
									<!-- Booking Doctor Info -->
									
									<div class="booking-summary">
										<div class="booking-item-wrap">
											<ul class="booking-date">
												<li >Date Time <span>{{appointment_data.dateTime}}</span></li>
												<!-- <li>Time <span>10:00 AM</span></li> -->
											</ul>
											<ul class="booking-fee">
												<li>Consulting Fee <span>Rs.999</span></li>
												<li>Booking Fee <span>Rs.499</span></li>
												<!-- <li>Video Call <span>Rs.199</span></li> -->
											</ul>
											<div class="booking-total">
												<ul class="booking-total-list">
													<li>
														<span>Total</span>
														<span class="total-cost">Rs.999</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Booking Summary -->
							
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
			appointment_data:{
				therapist_id: this.$route.params.doctor_id,
				dateTime:'2022-05-13',
				patient_full_name:'',
				patient_phone:'',
				patient_email:'',
				patient_password:'',
				patient_confirm_password:'',
			},
			danger: false,
			submit: true,
		}
	},
	methods: {
		bookAppointment() {

            console.log(this.appointment_data);
           // let token = window.localStorage.getItem('token');
        //     let therapist = {
        //     "therapist_bio":this.therapist_bio
        // }
            HomeService.bookAppointment(this.appointment_data).then((response) => {
                if(response.status==200){
                    if(response.data.status){

                        this.$router.push('/patient/booking-success/'+this.$route.params.doctor_name)
                    }
                    else{
                        alert('Email Already Exists')
                    }
                    // this.specialities = response.data.data;
                }
                else{
					alert('Server not responding');
				}

            }).catch((error) => {
				
			});
			
			//this.$router.push('/patient/booking-success');
		},
		validate(){
			if((this.patient_password === this.patient_confirm_password)){
				
				this.danger = false;
				this.submit = true;
			}
			else{
				
				
				this.danger = true;
				this.submit = false;

			}
		}
	}
}
</script>