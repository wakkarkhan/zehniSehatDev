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
										<div class="row">
											<div class="col-md-12 col-lg-6">
											
												<!-- Change Password Form -->
												<form @submit="changePatientPassword">
													
													<div class="form-group">
														<label>New Password</label>
														<input v-model="patientPassword" type="password" class="form-control">
													</div>
													<div class="form-group">
														<label>Confirm Password</label>
														<label class="text-danger" v-show="showDangerPass">Password Not matched</label>
														<input v-on:blur="checkPass" v-model="patientPasswordAgain" type="password" class="form-control">
													</div>
													<div class="submit-section">
														<button v-show="submitBtn" type="submit" class="btn btn-primary submit-btn">Save Changes</button>
													</div>
												</form>
												<!-- /Change Password Form -->
												
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
import PatientService from '@/api-services/patient.service';

export default {
    data(){
        return{
            patientPassword:'',
            patientPasswordAgain:'',
            showDangerPass: false,
            submitBtn:true
        }
    },
    methods:{
        checkPass(){
            if(this.patientPassword === this.patientPasswordAgain)
             {
                this.showDangerPass = false
                this.submitBtn = true
            }
            else{
                this.showDangerPass = true
                this.submitBtn = false

            }
        },
        changePatientPassword(){
            
           let token = window.localStorage.getItem('token');
            //let therapistID = this.$route.params.therapist_id;
            PatientService.updatePatientPasswordService(token, this.patientPassword).then((response) => {
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
        }
    },
    computed: {
         currentPath() {
            return this.$route.name;
        }
    }
}
</script>