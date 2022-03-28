<template>
    <div class="main-wrapper patient-register">
        <layout-header></layout-header>
        <!-- Page Content -->
			<div class="content bg-white">
				<div class="container-fluid">
					
					<div class="row">
						<div class="col-md-8 offset-md-2">
								
							<!-- Register Content -->
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src="@/assets/img/login-banner.png" class="img-fluid" alt="Doccure Register">	
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Patient Register <router-link to="/doctor/register">Are you a Practitioner?</router-link></h3>
											<div v-if="failedMessage">Something Went Wrong</div>
										</div>
										
										<!-- Register Form -->
										<form>
											<div class="form-group form-focus">
												<input type="text" v-model="patient_fullname" class="form-control floating">
												<label class="focus-label">Full Name</label>
											</div>
											<div class="form-group form-focus">
												<input type="text" v-model="patient_email" class="form-control floating">
												<label class="focus-label">Email</label>
											</div>
											<div class="form-group form-focus">
												<input type="password" v-model="patient_password" class="form-control floating">
												<label class="focus-label">Create Password</label>
											</div>
											<div class="text-right">
												<router-link class="forgot-link" to="/login">Already have an account?</router-link>
											</div>
											<button @click.prevent="registerPatient" class="btn btn-primary btn-block btn-lg login-btn" >Signup</button>
											<!-- <div class="login-or">
												<span class="or-line"></span>
												<span class="span-or">or</span>
											</div> -->
											<!-- <div class="row form-row social-login">
												<div class="col-6">
													<a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
												</div>
												<div class="col-6">
													<a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
												</div>
											</div> -->
										</form>
										<!-- /Register Form -->
										
									</div>
								</div>
							</div>
							<!-- /Register Content -->
								
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
			patient_fullname:'',
			patient_email:'',
			patient_password:'',
			role:'patient',
			failedMessage:false,
			responseData:{}

		}
	},
	 methods: {
       registerPatient(){
		   //this.$router.push('/doctor/index');
		   //this.$router.push('/');
		   let Patientdata = {
                        full_name:this.patient_fullname,
                        role:this.role,
                        email:this.patient_email,
                        password:this.patient_password
                           
                    }
		   PatientService.registerPatientService(Patientdata).then((response) => {
				
				// console.log(response.data);
				// 	if(response.data.status==200){
				// 		alert('in');
						this.responseData = response.data;
						//alert(this.responseData.data.status);
						if(this.responseData.data.status){
							
							this.failedMessage = false;
							this.$router.push('/login');
						}
						else{
							this.failedMessage = true;

						}
					// }
					// else{
						
					// }
				}).catch((error) => {
				
			});
	   }
    },
}
</script>
<style scoped>
/* .patient-register .content {
    padding: 190px 0 !important;
} */
</style>