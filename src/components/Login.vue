<template>
	<div class="account-page">
		<div class="main-wrapper">
			<layout-header></layout-header>
			
				<!-- Page Content -->
				<div class="content">
					<div class="container-fluid">
						
						<div class="row">
							<div class="col-md-8 offset-md-2">
								
								<!-- Login Tab Content -->
								<div class="account-content">
									<div class="row align-items-center justify-content-center">
										<div class="col-md-7 col-lg-6 login-left">
											<img src="@/assets/img/login-banner.png" class="img-fluid" alt="Doccure Login">	
										</div>
										<div class="col-md-12 col-lg-6 login-right">
											<div class="login-header">
												<h3>Login <span>Zehni-Sehat</span></h3>
											</div>
											<form>
												<div class="form-group form-focus">
													<input type="email" v-model="login_email" class="form-control floating">
													<label class="focus-label">Email</label>
												</div>
												<div class="form-group form-focus">
													<input type="password" v-model="login_password" class="form-control floating">
													<label class="focus-label">Password</label>
												</div>
												<div class="text-right">
													<router-link class="forgot-link" to="/forgot-password">Forgot Password ?</router-link>
												</div>
												<button @click.prevent="login" class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
												<div class="login-or">
													<span class="or-line"></span>
													<span class="span-or">or</span>
												</div>
												<!-- <div class="row form-row social-login">
													<div class="col-6">
														<a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
													</div>
													<div class="col-6">
														<a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
													</div>
												</div> -->
												<div class="text-center dont-have">Don’t have an account? <router-link to="/patient/register">Register</router-link></div>
											</form>
										</div>
									</div>
								</div>
								<!-- /Login Tab Content -->
									
							</div>
						</div>

					</div>

				</div>		
				<!-- /Page Content -->
			<layout-footer></layout-footer>
		</div>
	</div>
</template>

<script>
import LoginService from '@/api-services/login.service';

export default {
	data(){
		return{
			login_email:'',
			login_password:'',
			responseData:{}
		}
	},
	created() {
    if(window.localStorage.getItem('token') !=''&& window.localStorage.getItem('user') !='' && window.localStorage.getItem('role') =='patient') { this.$router.push({ path: '/patient/index'}) }
    else{ this.$router.push({ path: '/login'})}
   
  	},
	methods: {
		login() {
			//this.$router.push('/')
			   //this.$router.push('/doctor/index');
		   //this.$router.push('/');
		   let loginData = {
                        email:this.login_email,
                        password:this.login_password
                           
                    }
		   LoginService.loginService(loginData).then((response) => {
				
				// console.log(response.data);
				 	if(response.status==200){
				 		//alert('in');
						 this.responseData = response.data;
						// alert(this.responseData.data.status);
						 if(this.responseData.data.role=='patient'){
								
								window.localStorage.setItem('token', this.responseData.data.token);
								window.localStorage.setItem('user', this.responseData.data.id);
								window.localStorage.setItem('role', this.responseData.data.role);
								this.$router.push('/patient/index');
						 	
						 }
						 else if(this.responseData.data.role=='therapist'){
								
								window.localStorage.setItem('token', this.responseData.data.token);
								window.localStorage.setItem('user', this.responseData.data.id);
								window.localStorage.setItem('role', this.responseData.data.role);
								this.$router.push('/doctor/index');
						 	
						 }
					}
					else{
						
					}
				}).catch((error) => {
				
			});
		}
	},	
}
</script>
<style scoped>
/* .account-page .content {
    padding: 190px 0 !important;
} */
</style>