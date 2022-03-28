<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb></breadcrumb>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>
						
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="row">
								<div class="col-md-12">
									<div class="card dash-card">
										<div class="card-body">
											<div class="row">
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar1">
															<div class="circle-graph1" data-percent="40">
																<img src="@/assets/img/icon-01.png" class="img-fluid" alt="patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Total Patient</h6>
															<h3>{{total_patients}}</h3>
															<p class="text-muted">Till Today</p>
														</div>
													</div>
												</div>
												
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar2">
															<div class="circle-graph2" data-percent="60">
																<img src="@/assets/img/icon-02.png" class="img-fluid" alt="Patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Today Patient</h6>
															<h3>{{total_today_patients}}</h3>
															<p class="text-muted">06, Nov 2019</p>
														</div>
													</div>
												</div>
												
												<div class="col-md-12 col-lg-4">
														<div class="dash-widget">
														<div class="circle-bar circle-bar3">
															<div class="circle-graph3" data-percent="90">
																<img src="@/assets/img/icon-03.png" class="img-fluid" alt="Patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Appoinments</h6>
															<h3>{{total_appointments}}</h3>
															<p class="text-muted">06, Apr 2019</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-12">
									<h4 class="mb-4">Patient Appoinment</h4>
									<div class="appointment-tab">
									
										<!-- Appointment Tab -->
										<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
											<li class="nav-item">
												<a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">All</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
											</li> 
										</ul>
										<!-- /Appointment Tab -->
										
										<div class="tab-content">
										
											<!-- Upcoming Appointment Tab -->
											<div class="tab-pane show active" id="upcoming-appointments">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Status</th>
																		<!-- <th>Type</th> -->
																		<!-- <th class="text-center">Paid Amount</th> -->
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr v-for="item in this.upcoming_appointments" :key="item.id">
																		<td>
																			<h2 class="table-avatar">
																				<a href="" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-11.jpg" alt="User Image"></a>
																				<a href="">{{item.patient_name}}<span>#TH-{{item.id}}</span></a>
																			</h2>
																		</td>
																		<td>{{item.checkup_day_time}}</td>
																		<td>{{item.status}}</td>
																		<!-- <td>{{item.type}}</td> -->
																		<!-- <td class="text-center">{{item.paid_amount}}</td> -->
																		<td class="text-right">
																			<div class="table-action">
																				<!-- <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a> -->
																				
																				<a v-if="item.status == 'booked'" href="#Add_Specialities_details" data-toggle="modal" @click="AcceptAppointment(item.id)"  class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>		
														</div>
													</div>
												</div>
											</div>
											<!-- Add Modal -->
			<div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Please confirm your appointment</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form >
								<div class="row form-row">
									
									
												<div class="col-md-12 col-sm-12">
													<div class="form-group card-label">
														<label>Reset Booking</label>
														<VueCtkDateTimePicker v-model="update_appointment_date" />
														
													</div>
												</div>
								
									
								</div>
								<button @click="updateAppointment" class="btn btn-primary btn-block">Save Changes</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /ADD Modal -->
											<!-- /Upcoming Appointment Tab -->
									   
											<!-- Today Appointment Tab -->
											<div class="tab-pane" id="today-appointments">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Status</th>
																		<!-- <th>Type</th>
																		<th class="text-center">Paid Amount</th> -->
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr v-for="item in this.today_appointments" :key="item.id">
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="require('@/assets/img/doctors/doctor-11.jpg')" alt="User Image"></router-link>
																				<router-link to="#">{{item.patient_name}}<span>#TH-{{item.id}}</span></router-link>
																			</h2>
																		</td>
																		<td>{{item.checkup_day_time}}</td>
																		<td>{{item.status}}</td>
																		<td class="text-right">
																			<div class="table-action">
																				<!-- <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a> -->
																				
																				<a v-if="item.status == 'booked'" href="#Add_Specialities_details" data-toggle="modal" @click="AcceptAppointment(item.id)" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																
																</tbody>
															</table>		
														</div>	
													</div>	
												</div>	
											</div>
											<!-- /Today Appointment Tab -->
											
										</div>
									</div>
								</div>
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
import TherapistService from '@/api-services/therapists.service';

import upcomingpatients from '../../assets/json/doctor/upcomingpatients.json'
import todaypatients from '../../assets/json/doctor/todaypatients.json'

export default {
	data() {
		return {
			upcomingpatients: upcomingpatients,
			todaypatients: todaypatients,
			total_patients:'',
			total_today_patients:'',
			total_appointments:'',
			today_appointments:{},
			upcoming_appointments:{},
			update_appointment_id:'',
			update_appointment_date:'',
		}
	},
	created() {
    if(window.localStorage.getItem('token') !='' && window.localStorage.getItem('user') !='' && window.localStorage.getItem('role') =='therapist') {
		this.getTherapistDashboardData();
	}
    else{ this.$router.push({ path: '/login'})}
   
	},
	methods:{
		updateAppointment(){
			
			let token = window.localStorage.getItem('token');
            TherapistService.ChangeAppointmentStatusService(token, this.update_appointment_id, this.update_appointment_date).then((response) => {
                if(response.status==200){
					if(response.data.status){

						//alert('true')
						location.reload();
                        //this.$router.push({ path: '/admin/specialities' });
                    }
                    else{
                        alert('Something Went wrong');
                    }
                    //this.specialities = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
		AcceptAppointment(appointmentID){

			this.update_appointment_id = '';
			this.update_appointment_id = appointmentID;
			//alert(this.update_appointment_id);
		},
		getTherapistDashboardData(){
			 let token = window.localStorage.getItem('token');
            TherapistService.therapistDashboardAppointmentsService(token).then((response) => {
                if(response.status==200){
					
                    this.total_patients = response.data.total_patients;
                    this.total_today_patients = response.data.total_today_patients;
                    this.total_appointments = response.data.total_appointments;
                    this.today_appointments = response.data.today_appointments;
                    this.upcoming_appointments = response.data.upcoming_appointments;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
	},
	mounted() {
			$('.circle-bar1').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph1').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph1').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#da3f81'
					}
				});
			}
		});
			$('.circle-bar2').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph2').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph2').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#68dda9'
					}
				});
			}
		});
		$('.circle-bar3').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph3').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph3').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#1b5a90'
					}
				});
			}
		});
		  
	},
}
</script>
