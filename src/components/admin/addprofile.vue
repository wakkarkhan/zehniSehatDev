<template>
    <div class="main-wrapper">
        <header-admin></header-admin>
        <sidebar-admin></sidebar-admin>
      	<!-- Page Wrapper -->
          <div class="page-wrapper">
            <div class="content container-fluid">
                
                <!-- Page Header -->
                <div class="page-header">
                    <div class="row">
                        <div class="col">
                            <h3 class="page-title">Profile</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->
                
                <div class="row">
                    <div class="col-md-12">
                        
                        	
                        <div class="tab-content profile-tab-cont">
                            
                            <!-- Personal Details Tab -->
                            <div class="tab-pane fade show active" id="per_details_tab">
                            
                                <!-- Personal Details -->
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                
                                                <form @submit.prevent="registerTherapist">
                                                    <div class="row form-row">
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Login Information</span></h5>
                                                        </div>
                                                        <div class="col-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label>Full Name</label>
                                                                <input type="text" v-model="login_information.full_name" class="form-control" placeholder="Full Name">
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Email ID</label>
                                                                <input type="email" v-model="login_information.email" class="form-control" placeholder="johndoe@example.com">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Password</label>
                                                                <input type="text" v-model="login_information.password" placeholder="MaxSixdigits" class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>General Information</span></h5>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                            <label>Phone/WhatsApp</label>
                                                                <input type="text" v-model="general_information.phone" class="form-control" placeholder="+921234567890">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>DOB</label>
                                                                <input type="text" v-model="general_information.dob" class="form-control" placeholder="12-29-2022">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Gender</label>
                                                                <!-- <input type="text" class="form-control" placeholder="Male"> -->
                                                                <div class="form-group">
                                                                    <div class="">
                                                                        <select v-model="general_information.gender" class="form-control">
                                                                            <option>-- Select --</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Female">Female</option>
                                                                            <option value="Other">Other</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Blood Group</label>
                                                                <!-- <input type="text" class="form-control" placeholder="A+"> -->
                                                                <div class="form-group">
                                                                    <div class="">
                                                                        <select v-model="general_information.blood" class="form-control">
                                                                            <option>-- Select --</option>
                                                                            <option value="A+">A+</option>
                                                                            <option value="A-">A-</option>
                                                                            <option value="B+">B+</option>
                                                                            <option value="B-">B-</option>
                                                                            <option value="O+">O+</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Therapist Bio</span></h5>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Specialization</label>
                                                                <!-- <input type="text" class="form-control" placeholder="Depression"> -->
                                                                <div class="form-group">
                                                                    <div class="">
                                                                        <select v-model="therapist_category" class="form-control">
                                                                            <option>-- Select --</option>
                                                                            <option v-for="singleSpeciality in specialities" :key="singleSpeciality.id" :value="singleSpeciality.id">{{singleSpeciality.title}}</option>
                                                                            <!-- <option>Option 1</option>
                                                                            <option>Option 2</option>
                                                                            <option>Option 3</option>
                                                                            <option>Option 4</option>
                                                                            <option>Option 5</option> -->
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Fee</label>
                                                                <input type="text" v-model="therapist_fee" class="form-control" placeholder="$999">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label>Bio</label>
                                                                <textarea type="text" v-model="therapist_bio" class="form-control" placeholder="Bio"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Education</span></h5>
                                                        </div>
                                                        
                                                        <div class="row col-12" v-for="(singleEducation,k) in education" :key="k">
                                                            <div class="col-12 col-sm-4">
                                                                <div class="form-group">
                                                                    <label>Degree</label>
                                                                    <input type="text" v-model="singleEducation.degree" class="form-control" placeholder="Bachelors">
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-4">
                                                                <div class="form-group">
                                                                    <label>College/Institution</label>
                                                                    <input type="text" v-model="singleEducation.college" class="form-control" placeholder="College">
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-3">
                                                                <div class="form-group">
                                                                    <label>Year Of Completion</label>
                                                                    <input type="text" v-model="singleEducation.completion" class="form-control" placeholder="2022">
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-sm-1 p-6">
                                                                <div class="add-more "><a @click="removeEducation(k)" class="add-education-button"><i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && singleEducation.length > 1)">Remove</i></a></div>
                                                            </div>
                                                            
                                                        </div>
                                                        <div class="col-12 col-sm-12">
                                                            <div class="add-more"><a @click="addEducation(k)" class="add-education"><i class="fa fa-plus-circle"></i> Add More</a></div>
                                                        </div>















                                                        <div class="p-4"></div>

                                                    
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Work Experience</span></h5>
                                                        </div>
                                                    <div class="row col-12" v-for="(singleExperience,x) in work_experience" :key="'Ex'+x">
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <label>Organization</label>
                                                                <input type="text" v-model="singleExperience.organization" class="form-control" placeholder="SEBP">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <label>Designation</label>
                                                                <input type="text" v-model="singleExperience.designation" class="form-control" placeholder="Intern">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <label>From</label>
                                                                <input type="text" v-model="singleExperience.date_from" class="form-control" placeholder="2022">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-2">
                                                            <div class="form-group">
                                                                <label>To</label>
                                                                <input type="text" v-model="singleExperience.date_to" class="form-control" placeholder="2022">
                                                            </div>
                                                        </div>

                                                        <div class="col-12 col-sm-1">
                                                                <div class="add-more "><a @click="removeExperience(x)" class="add-education-button"><i class="fas fa-minus-circle" v-show="x || ( !x && singleExperience.length > 1)">Remove</i></a></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-12">
                                                            <div class="add-more"><a @click="addExperience(x)" class="add-education"><i class="fa fa-plus-circle"></i> Add More</a></div>
                                                    </div>
                                                        
                                                        <div class="p-4"></div>
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Clinic Info</span></h5>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Name</label>
                                                                <input type="text" v-model="clinic_information.name" class="form-control" placeholder="Clinic">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Address</label>
                                                                <input type="text" v-model="clinic_information.address" class="form-control" placeholder="Address">
                                                            </div>
                                                        </div>
                                                    
                                                    </div>
                                                    <button type="submit" class="btn btn-primary btn-block">Save Changes</button>
                                                </form>

                                            </div>
                                        </div>
                                        
                                    </div>

                                
                                </div>
                                <!-- /Personal Details -->

                            </div>
                            <!-- /Personal Details Tab -->
                            
                          
                            
                        </div>
                    </div>
                </div>
            
            </div>			
        </div>
        <!-- /Page Wrapper -->
    </div>
</template>
<script>
import AdminService from '@/api-services/admin.service';

    export default {
        data(){
            return{
                 admin_data:{},
                 specialities: {},
                all_therapist_data:[{}],
                therapist_fee:'',
                therapist_bio:'',
                therapist_category:'',
                login_information:{
                    full_name:'',
                    email:'',
                    password:'',
                },
                general_information:{
                    phone:'',
                    dob:'',
                    gender:'',
                    blood:'',
                },
                clinic_information:{
                    name:'',
                    address:''
                },
                 education: [{
                    degree: '',
                    college: '',
                    completion: ''
                }],
                work_experience:[{
                    organization:"",
                    designation:"",
                    date_from:"",
                    date_to:"",
                }]
            }
        },
        created(){
        if(window.localStorage.getItem('role') =='admin') {
            this.getAllSpecialities();
        }
        else{
            this.$router.push('/admin/login');
        }
    },
    methods:{
        registerTherapist(){

            this.all_therapist_data[0]['therapist_login_info'] = this.login_information;
            this.all_therapist_data[0]['therapist_general_info'] = this.general_information;
            this.all_therapist_data[0]['therapist_category'] = this.therapist_category;
            this.all_therapist_data[0]['therapist_fee'] = this.therapist_fee;
            this.all_therapist_data[0]['therapist_bio'] = this.therapist_bio;
            this.all_therapist_data[0]['therapist_education_info'] = this.education;
            this.all_therapist_data[0]['therapist_work_info'] = this.work_experience;
            this.all_therapist_data[0]['therapist_clinic_info'] = this.clinic_information;
            console.log(this.all_therapist_data);
            let token = window.localStorage.getItem('token');
        //     let therapist = {
        //     "therapist_bio":this.therapist_bio
        // }
            AdminService.RegisterTherapistService(token,this.all_therapist_data).then((response) => {
                if(response.status==200){
                    if(response.data.status){

                        //alert('true')
                        location.reload();
                        //this.$router.push('/admin/doctorlist');
                    }
                    else{
                        alert('Something Went wrong')
                    }
                    // this.specialities = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});

        },
        getAllSpecialities(){
			let token = window.localStorage.getItem('token');
            AdminService.AllSpecialitiesService(token).then((response) => {
                if(response.status==200){
                    this.specialities = response.data.data;
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});
		},
        removeEducation (index) {
            this.education.splice(index, 1)
        },
        removeExperience (index) {
            this.work_experience.splice(index, 1)
        },
        addExperience () {
            this.work_experience.push({
                organization: '',
                designation: '',
                date_from: '',
                date_to: '',
            })
        },
        addEducation () {
            this.education.push({
                degree: '',
                college: '',
                completion: '',
            })
        },
        loadImg(imgPath, value) {
            if(value == 1) {
              return  images('./' + imgPath)
            } else {
              return  patientImages('./' + imgPath)
            }
        },
    },
    mounted() {
        $(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		// setTimeout(function(){ 
		// 	mA.redraw();
		// 	mL.redraw();
		// }, 300);
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
	});
}
    }
</script>
<style scoped>
.add-education-button{
    position: relative;
    top: 42px;
}
</style>