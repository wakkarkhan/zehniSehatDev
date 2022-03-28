<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb6></breadcrumb6>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>
						<div class="col-md-7 col-lg-8 col-xl-9">
							<form @submit.prevent="updateTherapistData">
							<!-- Basic Information -->
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Basic Information</h4>
									<div class="row form-row">
										<div class="col-md-12">
											<div class="form-group">
												<div class="change-avatar">
													<div class="profile-img">
														<img src="@/assets/img/doctors/doctor-11.jpg" alt="User Image">
													</div>
													<div class="upload-img">
														<div class="change-photo-btn">
															<span><i class="fa fa-upload"></i> Upload Photo</span>
															<input type="file" class="upload">
														</div>
														<small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
													</div>
												</div>
											</div>
										</div>
										
										<div class="col-md-6">
											<div class="form-group">
												<label>Email <span class="text-danger">*</span></label>
												<input v-model="all_therapist_data.general_info[0].email" type="email" class="form-control" readonly>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Full Name <span class="text-danger">*</span></label>
												<input v-model="all_therapist_data.general_info[0].full_name" type="text" class="form-control">
											</div>
										</div>
										
										<div class="col-md-6">
											<div class="form-group">
												<label>Phone Number</label>
												<input v-model="all_therapist_data.general_info[0].phone_number" type="number" class="form-control">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Gender</label>
												<select v-model="all_therapist_data.general_info[0].gender" class="form-control select">
												
													<!-- <option :value="this.all_therapist_data.general_info[0].gender">{{this.all_therapist_data.general_info[0].gender}}</option> -->
													<option value="Male">Male</option>
													<option value="Female">Female</option>
													<option value="Other">Other</option>
												</select>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Blood Group</label>
												<select v-model="all_therapist_data.general_info[0].blood_group" class="form-control select">
													<!-- <option :value="this.all_therapist_data.general_info[0].blood_group">{{this.all_therapist_data.general_info[0].blood_group}}</option> -->
													<option value="A">A-</option>
													<option value="A+">A+</option>
													<option value="AB+">AB+</option>
													<option value="AB-">AB-</option>
													<option value="B+">B+</option>
													<option value="B-">B-</option>
													<option value="O+">O+</option>
													<option value="O-">O-</option>
												</select>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group mb-0">
												<label>Date of Birth</label>
												<div class="cal-icon">
													<input v-model="all_therapist_data.general_info[0].dob" type="text" class="form-control datetimepicker" >
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Basic Information -->
							
							<!-- About Me -->
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">About Me</h4>
									
								<div class="row form-row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Specialization</label>
											<select v-model="all_therapist_data.bio_info[0].category_id" class="form-control select">
												<option v-for="singleSpeciality in specialities" :key="singleSpeciality.id" :value="singleSpeciality.id">{{singleSpeciality.title}}</option>
											</select>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Fee</label>
											<input v-model="all_therapist_data.bio_info[0].therapist_fee" type="number" class="form-control">
										</div>
									</div>
									<div class="col-md-12">
										<label>Biography</label>
										<textarea v-model="all_therapist_data.bio_info[0].about_therapist"  class="form-control" rows="5"></textarea>
									</div>
								</div>
								</div>
							</div>
							<!-- /About Me -->
							
						

							
						
							
							
						 
							<!-- Education -->
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Education</h4>
									<div class="education-info">
										<div class="row form-row education-cont" v-for="(singleEducation,k) in this.all_therapist_data.education_info" :key="k">
											<div class="col-12 col-md-10 col-lg-11">
												<div class="row form-row">
													<div class="col-12 col-md-4 col-lg-4">
														<div class="form-group">
															<label>Degree</label>
															<input v-model="singleEducation.degree_program" type="text" class="form-control">
														</div> 
													</div>
													<div class="col-12 col-md-4 col-lg-4">
														<div class="form-group">
															<label>College/Institute</label>
															<input v-model="singleEducation.university_name" type="text" class="form-control">
														</div> 
													</div>
													<div class="col-12 col-md-3 col-lg-3">
														<div class="form-group">
															<label>Year of Completion</label>
															<input v-model="singleEducation.tenure" type="text" class="form-control">
														</div> 
													</div>
													<div class="col-12 col-md-1 col-lg-1 p-6">
                                                                <div class="add-more "><a @click="removeEducation(k)" class="add-education-button"><i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && singleEducation.length > 1)">Remove</i></a></div>
                                                    </div>
												</div>
											</div>
										</div>
									</div>
									<div class="add-more">
										<a @click="addEducation(k)" class="add-education"><i class="fa fa-plus-circle"></i> Add More</a>
									</div>
								</div>
							</div>
							<!-- /Education -->
						
							<!-- Experience -->
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Experience</h4>
									<div class="experience-info">
										<div class="row form-row experience-cont" v-for="(singleExperience,x) in this.all_therapist_data.work_info" :key="'Ex'+x">
											<div class="col-12 col-md-10 col-lg-11">
												<div class="row form-row">
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Organization</label>
															<input v-model="singleExperience.organization_name" type="text" class="form-control">
														</div> 
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<div class="form-group">
															<label>Designation</label>
															<input v-model="singleExperience.designation" type="text" class="form-control">
														</div> 
													</div>
													<div class="col-12 col-md-6 col-lg-2">
														<div class="form-group">
															<label>From</label>
															<input v-model="singleExperience.tenure" type="text" class="form-control">
														</div> 
													</div>
													<div class="col-12 col-md-6 col-lg-2">
														<div class="form-group">
															<label>To</label>
															<input v-model="singleExperience.tenure" type="text" class="form-control">
														</div> 
													</div>
													<div class="col-12 col-md-6 col-lg-2">
                                                                <div class="add-more "><a @click="removeExperience(x)" class="add-education-button"><i class="fas fa-minus-circle" v-show="x || ( !x && singleExperience.length > 1)">Remove</i></a></div>
                                                    </div>
													
												</div>
											</div>
										</div>
									</div>
									<div class="add-more">
										<a @click="addExperience()" class="add-experience"><i class="fa fa-plus-circle"></i> Add More</a>
									</div>
								</div>
							</div>
							<!-- /Experience -->
							
						
					
							
						
							
							<div class="submit-section submit-btn-bottom">
								<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
							</div>
						</form>	
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

export default {
	data(){
		return{
			all_therapist_data:{},
			specialities:{},
		}
	},
	created(){
        if(window.localStorage.getItem('role') =='therapist') {
			this.getAllTherapistData();
			this.getTherapistAllSpecialities();
        }
        else{
            this.$router.push('/login');
        }
	},
	methods:{
		updateTherapistData(){
			let token = window.localStorage.getItem('token');
        //     let therapist = {
        //     "therapist_bio":this.therapist_bio
        // }
            TherapistService.updateTherapistService(token,this.all_therapist_data).then((response) => {
                if(response.status==200){
                    if(response.data.status){

						alert('true')
						//location.reload();
					}
                    else{
                        alert('Something Went wrong')
                    }
                    
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
		getTherapistAllSpecialities(){
			let token = window.localStorage.getItem('token');
            TherapistService.therapistAllSpecialitiesService(token).then((response) => {
                if(response.status==200){
                    this.specialities = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
		addExperience () {
            this.all_therapist_data.work_info.push({
                designation: '',
                tenure: '',
                organization_name: '',
            })
        },
		addEducation () {
            this.all_therapist_data.education_info.push({
                degree_program: '',
                tenure: '',
                university_name: '',
            })
        },
		removeEducation (index) {
            this.all_therapist_data.education_info.splice(index, 1);
		},
		removeExperience (index) {
			this.all_therapist_data.work_info.splice(index, 1);
		},
		getAllTherapistData(){
			let token = window.localStorage.getItem('token');
            TherapistService.therapistAllDataService(token).then((response) => {
                if(response.status==200){
                    this.all_therapist_data = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
		
	},
	mounted() {
        if($('.select').length > 0) {
            $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
            });
		}
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