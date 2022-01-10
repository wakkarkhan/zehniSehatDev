<template>
       <!-- Main Wrapper -->
       <div class="main-wrapper login-body">
        <div class="login-wrapper">
            <div class="container">
                <div class="loginbox">
                    <div class="login-left">
                        <img class="img-fluid" src="@/assets/admin_img/logo.svg" alt="Logo">
                    </div>
                    <div class="login-right">
                        <div class="login-right-wrap">
                            <h1>Login</h1>
                            <p class="account-subtitle">Access to our dashboard</p>
                            
                            <!-- Form -->
                            <form>
                                <div class="form-group">
                                    <input class="form-control" v-model="login_email" type="text" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" v-model="login_password" type="password" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-block" type="button" @click="login">Login</button>
                                </div>
                            </form>
                            <!-- /Form -->
                            
                            <!-- <div class="text-center forgotpass"><router-link to="/admin/forgotpassword">Forgot Password?</router-link></div>
                            <div class="login-or">
                                <span class="or-line"></span>
                                <span class="span-or">or</span>
                            </div> -->
                              
                            <!-- Social Login -->
                            <!-- <div class="social-login">
                                <span>Login with</span>
                                <a href="#" class="facebook"><i class="fab fa-facebook-square"></i></a><a href="#" class="google"><i class="fab fa-google"></i></a>
                            </div> -->
                            <!-- /Social Login -->
                            
                            <!-- <div class="text-center dont-have">Don’t have an account? <router-link to="/admin/register">Register</router-link></div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Main Wrapper -->
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
    if(window.localStorage.getItem('token') !=''&& window.localStorage.getItem('user') !='' && window.localStorage.getItem('role') =='admin') { this.$router.push({ path: '/admin/index'}) }
   
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
						 if(this.responseData.data.role=='admin'){
								
								window.localStorage.setItem('token', this.responseData.data.token);
								window.localStorage.setItem('user', this.responseData.data.id);
								window.localStorage.setItem('role', this.responseData.data.role);
						 		this.$router.push('/admin/index');
						 	
						 }
						 
					}
					else{
						this.$router.push('/login');
					}
				}).catch((error) => {
				
			    });
		}
	},	
}
</script>
