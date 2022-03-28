<template>
    <div class="main-wrapper therapist-register">
        <layout-header></layout-header>
        	<!-- Page Content -->
			<div class="content bg-white">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-8 offset-md-2">
						
							<!-- Account Content -->
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src="@/assets/img/login-banner.png" class="img-fluid" alt="Login Banner">	
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Practitioner Register <router-link to="/patient/register">Not a Practitioner?</router-link></h3>
										</div>
										
										<!-- Register Form -->
										<!-- <form action="/doctor/index"> -->
										<form action="/">
											<div class="form-group form-focus">
												<input v-model="therapist_fullname" type="text" class="form-control floating">
												<label class="focus-label">Full Name</label>
											</div>
											<div class="form-group form-focus">
												<input v-model="therapist_email" type="email" class="form-control floating">
												<label  class="focus-label">Email</label>
											</div>
											<div class="form-group form-focus">
												<input v-model="therapist_password" type="password" class="form-control floating">
												<label class="focus-label">Create Password</label>
											</div>
											<div class="text-right">
												<router-link class="forgot-link" to="/login">Already have an account?</router-link>
											</div>
											<button @click.prevent="registerTherapist" class="btn btn-primary btn-block btn-lg login-btn">Signup</button>
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
							<!-- /Account Content -->
								
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
			therapist_fullname:'',
			therapist_email:'',
			therapist_password:'',
			role:'therapist',
			failedMessage:false,
			responseData:{}

		}
	},
	 methods: {
       registerTherapist(){
		   //this.$router.push('/doctor/index');
		   //this.$router.push('/');
		   let Therapistdata = {
                        full_name:this.therapist_fullname,
                        role:this.role,
                        email:this.therapist_email,
                        password:this.therapist_password
                           
                    }
		   TherapistService.registerTherapistService(Therapistdata).then((response) => {
				
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

/* .therapist-register .content {
    padding: 190px 0 !important;
} */
</style>