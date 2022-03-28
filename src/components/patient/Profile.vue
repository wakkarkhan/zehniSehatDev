<template>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        <breadcrumb6></breadcrumb6>
        	
			<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
                        <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar1></sidebar1>
                        </div>						
						
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body">
									
									<!-- Profile Settings Form -->
									<form @submit.prevent="updatePatientData">
										<div class="row form-row">
											<div class="col-12 col-md-12">
												<div class="form-group">
													<div class="change-avatar">
														<div class="profile-img">
															<img src="@/assets/img/patients/patient.jpg" alt="User Image">
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
											<div class="col-12 col-md-12">
												<div class="form-group">
													<label>Full Name</label>
													<input v-model="patient_data.full_name" type="text" class="form-control" required>
												</div>
											</div>
											
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Date of Birth</label>
													<div class="cal-icon">
														<input v-model="patient_data.dob" type="text" class="form-control datetimepicker" required>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Blood Group</label>
													<select v-model="patient_data.blood_group" class="form-control select" required>
														<option value="A">A-</option>
														<option value="A+">A+</option>
														<option value="B">B-</option>
														<option value="B+">B+</option>
														<option value="AB-">AB-</option>
														<option value="AB+">AB+</option>
														<option value="O">O-</option>
														<option value="0+">O+</option>
													</select>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Gender</label>
													<select v-model="patient_data.gender" class="form-control select" required>
														<option value="Male">Male</option>
														<option value="Female">Female</option>
														<option value="Other">Other</option>
														
													</select>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Phone</label>
													<input type="text" v-model="patient_data.phone_number" class="form-control" required>
												</div>
											</div>
											<div class="col-12">
												<div class="form-group">
												<label>Postal Address</label>
													<input type="text" class="form-control" v-model="patient_data.postal_adress" required>
												</div>
											</div>
											
										</div>
										
										<div class="submit-section">
											<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
										</div>
									</form>
									<!-- /Profile Settings Form -->
									
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
import PatientService from '@/api-services/patient.service';

export default {
	data(){
        return{
            patient_data:{}
        }
	},
	methods:{
		updatePatientData(){
			let token = window.localStorage.getItem('token');
            //let therapistID = this.$route.params.therapist_id;
            PatientService.updatePatientDataService(token, this.patient_data).then((response) => {
                if(response.status==200){
                    
                    //console.log(this.therapist_login_data[0]['login_info']);
                    //alert('true');
                    location.reload();
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
        getPatientDashboadData(){
            let token = window.localStorage.getItem('token');
            PatientService.patientDashboardService(token).then((response) => {
                if(response.status==200){
                    this.patient_data = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
        }
	},
	created(){
        
        if(window.localStorage.getItem('role') =='patient') {
            this.getPatientDashboadData();
        }
        else{
            this.$router.push('/login');
        }
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