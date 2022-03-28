<template>
<div>
    <div class="main-wrapper">
         <layout-header2></layout-header2>
         <breadcrumb3></breadcrumb3>
         <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>

						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="row">
								<div class="col-sm-12">
									<div class="card">
										<div class="card-body">
											<h4 class="card-title">Schedule Timings</h4>
											<div class="profile-box">
												<!-- <div class="row">
													<div class="col-lg-4">
														<div class="form-group">               
															<label>Timing Slot Duration</label>
															<select class="select form-control">
																<option>-</option>
																<option>15 mins</option>
																<option selected="selected">30 mins</option>  
																<option>45 mins</option>
																<option>1 Hour</option>
															</select>
														</div>
													</div>
												</div>      -->
												<div class="row">
													<div class="col-md-12">
														<div class="card schedule-widget mb-0">
															<!-- Schedule Header -->
															<div class="schedule-header">
																<!-- Schedule Nav -->
																<div class="schedule-nav">
																	<ul class="nav nav-tabs nav-justified">
																		<li class="nav-item">
																			<a class="nav-link active" data-toggle="tab" href="#slot_sunday">Sunday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link " data-toggle="tab" href="#slot_monday">Monday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_tuesday">Tuesday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_wednesday">Wednesday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_thursday">Thursday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_friday">Friday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_saturday">Saturday</a>
																		</li>
																	</ul>
																</div>
																<!-- /Schedule Nav -->
															</div>
															<!-- /Schedule Header -->
															
															<!-- Schedule Content -->
															<div class="tab-content schedule-cont">
																
																<!-- Sunday Slot -->
																<div id="slot_sunday" class="tab-pane fade show active">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a v-if="this.therapist_sunday_data ==null" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
																		<a @click.prevent="editSundayData()" v-if="this.therapist_sunday_data !=null" class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	<p v-if="this.therapist_sunday_data ==null" class="text-muted mb-0">Not Available</p>
																	
																	<!-- Slot List -->
																	<div class="doc-times">
																		<div v-for="singleSlot in this.therapist_sunday_data" :key="singleSlot.id" class="doc-slot-list">
																			{{singleSlot.start_time}} - {{singleSlot.end_time}}
																			<!-- <a href="javascript:void(0)" class="delete_schedule">
																				<i class="fa fa-times"></i>
																			</a> -->
																		</div>
																		
																	</div>
																	<!-- /Slot List -->
																</div>
																<!-- /Sunday Slot -->

																<!-- Monday Slot -->
																<div id="slot_monday" class="tab-pane fade ">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a v-if="this.therapist_monday_data ==null" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
																		<a @click.prevent="editMondayData()" v-if="this.therapist_monday_data !=null" class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	<p v-if="this.therapist_monday_data ==null" class="text-muted mb-0">Not Available</p>
																	
																	<!-- Slot List -->
																	<div class="doc-times">
																		<div v-for="singleSlot in this.therapist_monday_data" :key="singleSlot.id" class="doc-slot-list">
																			{{singleSlot.start_time}} - {{singleSlot.end_time}}
																			<!-- <a href="javascript:void(0)" class="delete_schedule">
																				<i class="fa fa-times"></i>
																			</a> -->
																		</div>
																		
																	</div>
																	<!-- /Slot List -->
																</div>
																<!-- /Monday Slot -->

																<!-- Tuesday Slot -->
																<div id="slot_tuesday" class="tab-pane fade">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a v-if="this.therapist_tuesday_data ==null" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
																		<a @click.prevent="editTuesdayData()" v-if="this.therapist_tuesday_data !=null" class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	<p v-if="this.therapist_tuesday_data ==null" class="text-muted mb-0">Not Available</p>
																	<!-- Slot List -->
																	<div class="doc-times">
																		<div v-for="singleSlot in this.therapist_tuesday_data" :key="singleSlot.id" class="doc-slot-list">
																			{{singleSlot.start_time}} - {{singleSlot.end_time}}
																			<!-- <a href="javascript:void(0)" class="delete_schedule">
																				<i class="fa fa-times"></i>
																			</a> -->
																		</div>
																		
																	</div>
																	<!-- /Slot List -->
																</div>
																<!-- /Tuesday Slot -->

																<!-- Wednesday Slot -->
																<div id="slot_wednesday" class="tab-pane fade">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a v-if="this.therapist_wednesday_data ==null" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
																		<a @click.prevent="editWednesdayData()" v-if="this.therapist_wednesday_data !=null" class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	<p v-if="this.therapist_wednesday_data ==null" class="text-muted mb-0">Not Available</p>
																	<!-- Slot List -->
																	<div class="doc-times">
																		<div v-for="singleSlot in this.therapist_wednesday_data" :key="singleSlot.id" class="doc-slot-list">
																			{{singleSlot.start_time}} - {{singleSlot.end_time}}
																			<!-- <a href="javascript:void(0)" class="delete_schedule">
																				<i class="fa fa-times"></i>
																			</a> -->
																		</div>
																		
																	</div>
																	<!-- /Slot List -->
																</div>
																<!-- /Wednesday Slot -->

																<!-- Thursday Slot -->
																<div id="slot_thursday" class="tab-pane fade">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a v-if="this.therapist_thursday_data ==null" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
																		<a @click.prevent="editThursdayData()" v-if="this.therapist_thursday_data !=null" class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	<p v-if="this.therapist_thursday_data ==null" class="text-muted mb-0">Not Available</p>
																	<!-- Slot List -->
																	<div class="doc-times">
																		<div v-for="singleSlot in this.therapist_thursday_data" :key="singleSlot.id" class="doc-slot-list">
																			{{singleSlot.start_time}} - {{singleSlot.end_time}}
																			<!-- <a href="javascript:void(0)" class="delete_schedule">
																				<i class="fa fa-times"></i>
																			</a> -->
																		</div>
																		
																	</div>
																	<!-- /Slot List -->
																</div>
																<!-- /Thursday Slot -->

																<!-- Friday Slot -->
																<div id="slot_friday" class="tab-pane fade">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a v-if="this.therapist_friday_data ==null" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
																		<a @click.prevent="editFridayData()" v-if="this.therapist_friday_data !=null" class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	<p v-if="this.therapist_friday_data ==null" class="text-muted mb-0">Not Available</p>
																	<!-- Slot List -->
																	<div class="doc-times">
																		<div v-for="singleSlot in this.therapist_friday_data" :key="singleSlot.id" class="doc-slot-list">
																			{{singleSlot.start_time}} - {{singleSlot.end_time}}
																			<!-- <a href="javascript:void(0)" class="delete_schedule">
																				<i class="fa fa-times"></i>
																			</a> -->
																		</div>
																		
																	</div>
																	<!-- /Slot List -->
																</div>
																<!-- /Friday Slot -->

																<!-- Saturday Slot -->
																<div id="slot_saturday" class="tab-pane fade">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a v-if="this.therapist_saturday_data ==null" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
																		<a @click.prevent="editSaturdayData()" v-if="this.therapist_saturday_data !=null" class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	<p v-if="this.therapist_saturday_data ==null" class="text-muted mb-0">Not Available</p>
																	<!-- Slot List -->
																	<div class="doc-times">
																		<div v-for="singleSlot in this.therapist_saturday_data" :key="singleSlot.id" class="doc-slot-list">
																			{{singleSlot.start_time}} - {{singleSlot.end_time}}
																			<!-- <a href="javascript:void(0)" class="delete_schedule">
																				<i class="fa fa-times"></i>
																			</a> -->
																		</div>
																		
																	</div>
																	<!-- /Slot List -->
																</div>
																<!-- /Saturday Slot -->
															</div>
															<!-- /Schedule Content -->
														</div>
													</div>
												</div>
											</div>
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
	 	<!-- Edit Time Slot Modal -->
		<div class="modal fade custom-modal" id="edit_time_slot">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Edit Time Slots</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form @submit.prevent="editMondaySlots()">
							<div class="hours-info">
								<div class="row form-row hours-cont" v-for="(item, index) in temp_data_to_edit" :key="item.id">
									<div class="col-12 col-md-10">
										<div class="row form-row" >
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Start Time</label>
													<select class="form-control" v-model="item.start_time">
														
														<option :value="item.start_time">{{item.start_time}}</option>
														<option :value="itemStartTime" v-if="item.start_time != itemStartTime" v-for="(itemStartTime, mondayStartKey) in times" :key="mondayStartKey">{{itemStartTime}}</option>
														
													</select>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>End Time</label>
													<select class="form-control" v-model="item.end_time">
														<option :value="item.end_time">{{item.end_time}}</option>
														<option :value="itemEndTime" v-if="item.end_time != itemEndTime" v-for="(itemEndTime, mondayEndKey) in times" :key="mondayEndKey">{{itemEndTime}}</option>
														
													</select>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-2" v-show="index || ( !index && item.length > 1)"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a @click="removeSlotInEdit(index)" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>
								</div>

							</div>
							
							<div class="add-more mb-3">
								<a @click="addMoreSlotInEdit()" class="add-hours"><i class="fa fa-plus-circle"></i> Add More</a>
							</div>
							<div class="submit-section text-center">
								<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Time Slot Modal -->

		<!-- Add Time Slot Modal -->
		<div class="modal fade custom-modal" id="add_time_slot">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Add Time Slots</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="hours-info">
								<div class="row form-row hours-cont">
									<div class="col-12 col-md-10">
										<div class="row form-row">
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Start Time</label>
													<select class="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option>12.30 am</option>  
														<option>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div> 
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>End Time</label>
													<select class="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option>12.30 am</option>  
														<option>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div> 
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="add-more mb-3">
								<a href="javascript:void(0);" class="add-hours"><i class="fa fa-plus-circle"></i> Add More</a>
							</div>
							<div class="submit-section text-center">
								<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Time Slot Modal -->
</div>
</template>

<script>

import TherapistService from '@/api-services/therapists.service';


import patients from '../../assets/json/doctor/mypatients.json'
const images = require.context('@/assets/img/patients', false, /\.png$|\.jpg$/)
export default {
	data(){
		return{
			//therapist_availabilities_data:{},
			therapist_monday_data:[],
			therapist_tuesday_data:[],
			therapist_wednesday_data:[],
			therapist_thursday_data:[],
			therapist_friday_data:[],
			therapist_saturday_data:[],
			therapist_sunday_data:[],
			temp_data_to_edit:[],
			patients: patients,
			times:[
				'12:00am','12:30am','1:00am','1:30am','2:00am','2:30am','3:00am',
				'3:30am','4:00am','4:30am','5:00am','5:30am','6:00am','6:30am','7:00am',
				'7:30am','8:00am','8:30am','9:00am','9:30am','10:00am','10:30am',
				'11:00am','11:30am','12:00pm'
			],
			day:'',
        
		}
	},
	created(){
        if(window.localStorage.getItem('role') =='therapist') {
			
			this.getTherapistAvailabilitiesData();
        }
        else{
            this.$router.push('/login');
        }
	},
	methods:{
		editMondaySlots(){
			let token = window.localStorage.getItem('token');
            TherapistService.UpdateTherapistMondaySlots(token, this.temp_data_to_edit, this.day).then((response) => {
                if(response.status==200){
                    
            
                    location.reload();
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
		removeSlotInEdit(index){
			this.temp_data_to_edit.splice(index, 1);
		},
		addMoreSlotInEdit(){
			 this.temp_data_to_edit.push({
                available_day: '',
                start_time: '',
				end_time: '',
				status:'available'
            })
		},
		editMondayData(){
			this.day = 'Monday';
			this.temp_data_to_edit = this.therapist_monday_data;

		},
		editTuesdayData(){
			this.day = 'Tuesday';
			this.temp_data_to_edit = this.therapist_tuesday_data;

		},
		editWednesdayData(){
			this.day = 'Wednesday';
			this.temp_data_to_edit = this.therapist_wednesday_data;

		},
		editThursdayData(){
			this.day = 'Thursday';
			this.temp_data_to_edit = this.therapist_thursday_data;

		},
		editFridayData(){
			this.day = 'Friday';
			this.temp_data_to_edit = this.therapist_friday_data;

		},
		editSaturdayData(){
			this.day = 'Saturday';
			this.temp_data_to_edit = this.therapist_saturday_data;

		},
		editSundayData(){
			this.day = 'Sunday';
			this.temp_data_to_edit = this.therapist_sunday_data;

		},
		getTherapistAvailabilitiesData(){
			
			let token = window.localStorage.getItem('token');
            TherapistService.TherapistAvailabilitiesService(token).then((response) => {
                if(response.status==200){
                    //this.therapist_availabilities_data = response.data.data;
					this.therapist_monday_data = response.data.data.monday_data;
					this.therapist_tuesday_data = response.data.data.tuesday_data;
					this.therapist_wednesday_data = response.data.data.wednesday_data;
					this.therapist_thursday_data = response.data.data.thursday_data;
					this.therapist_friday_data = response.data.data.friday_data;
					this.therapist_saturday_data = response.data.data.saturday_data;
					this.therapist_sunday_data = response.data.data.sunday_data;
					console.log(this.therapist_sunday_data);
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
		 loadImg(imgPath) {
            return images('./' + imgPath)
        }
	},
	mounted() {
        if($('.select').length > 0) {
            $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
            });
		}
		//  $(".add-hours").on('click', function () {
		
		// var hourscontent = '<div class="row form-row hours-cont">' +
		// 	'<div class="col-12 col-md-10">' +
		// 		'<div class="row form-row">' +
		// 			'<div class="col-12 col-md-6">' +
		// 				'<div class="form-group">' +
		// 					'<label>Start Time</label>' +
		// 					'<select class="form-control">' +
		// 						'<option>-</option>' +
		// 						'<option>12.00 am</option>' +
		// 						'<option>12.30 am</option>' + 
		// 						'<option>1.00 am</option>' +
		// 						'<option>1.30 am</option>' +
		// 					'</select>' +
		// 				'</div>' +
		// 			'</div>' +
		// 			'<div class="col-12 col-md-6">' +
		// 				'<div class="form-group">' +
		// 					'<label>End Time</label>' +
		// 					'<select class="form-control">' +
		// 						'<option>-</option>' +
		// 						'<option>12.00 am</option>' +
		// 						'<option>12.30 am</option>' +
		// 						'<option>1.00 am</option>' +
		// 						'<option>1.30 am</option>' +
		// 					'</select>' +
		// 				'</div>' +
		// 			'</div>' +
		// 		'</div>' +
		// 	'</div>' +
		// 	'<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		// '</div>';
		
    //     $(".hours-info").append(hourscontent);
    //     return false;
    // });
	//  $(".hours-info").on('click','.trash', function () {
	// 	$(this).closest('.hours-cont').remove();
	// 	return false;
    // });

    },
    
    
}
</script>

