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
                        <div class="profile-header">
                            <div class="row align-items-center">
                                <div class="col-auto profile-image">
                                    <a href="#">
                                        <img class="rounded-circle" alt="User Image" src="@/assets/admin_img/profiles/avatar-01.jpg">
                                    </a>
                                </div>
                                <div class="col ml-md-n2 profile-user-info">
                                    <h4 class="user-name mb-0">{{this.therapist_login_data.full_name}}</h4>
                                    <h6 class="text-muted">{{this.therapist_login_data.email}}</h6>
                                    <div class="user-Location"><i class="fa fa-map-marker"></i> Abbottabad, Pakistan</div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="profile-menu">
                            <ul class="nav nav-tabs nav-tabs-solid">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#login_tab"><i class="fa fa-edit mr-1"></i>Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#general"><i class="fa fa-edit mr-1"></i>General</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#bio"><i class="fa fa-edit mr-1"></i>Bio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#education"><i class="fa fa-edit mr-1"></i>Education</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#work_experience"><i class="fa fa-edit mr-1"></i>Work Experience</a>
                                </li>
                                <!-- <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#clinic">Clinic</a>
                                </li> -->
                            </ul>
                        </div>	
                        <div class="tab-content profile-tab-cont">
                            
                            <!-- Login Tab -->
                            <div class="tab-pane fade show active" id="login_tab">
                            
                                
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                 <form @submit="adminAddLoginInfo">
                                                    <div class="row form-row">
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Login Information</span></h5>
                                                        </div>
                                                        <div class="col-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label>Full Name</label>
                                                                <input type="text" v-model="therapist_login_data.full_name" class="form-control" placeholder="Full Name" required>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Email ID</label>
                                                                <input type="email" v-model="therapist_login_data.email" class="form-control" placeholder="johndoe@example.com" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Password</label>
                                                                <input type="text" v-model="therapist_login_data.password" placeholder="MaxSixdigits" class="form-control" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-9"></div>
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <button type="submit" class="btn btn-primary btn-block">Save Changes</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                 </form>
                                            </div>
                                        </div>
                                        
                                    </div>

                                
                                </div>
                                
                            </div>
                            <!-- /Login Tab -->
                            
                            <!-- General Tab -->
                            <div id="general" class="tab-pane fade">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                 <form @submit="adminAddGeneralInfo">
                                                    <div class="row form-row">
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>General Information</span></h5>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                            <label>Phone</label>
                                                                <input type="text" v-model="therapist_general_data.phone" class="form-control" placeholder="+921234567890">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>DOB</label>
                                                                <input type="text" v-model="therapist_general_data.dob" class="form-control" placeholder="12-29-2022">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Gender</label>
                                                                <!-- <input type="text" class="form-control" placeholder="Male"> -->
                                                                <div class="form-group">
                                                                    <div class="">
                                                                        <select v-model="therapist_general_data.gender" class="form-control">
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
                                                                        <select v-model="therapist_general_data.blood_group" class="form-control">
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
                                                        <div class="col-12 col-sm-9"></div>
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <button type="submit" class="btn btn-primary btn-block">Save Changes</button>

                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                 </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /General Tab -->
                            <!-- Bio Tab -->
                            <div id="bio" class="tab-pane fade">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                 <form @submit="adminAddBioInfo">
                                                    <div class="row form-row">
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Therapist Bio</span></h5>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Specialization</label>
                                                                <!-- <input type="text" class="form-control" placeholder="Depression"> -->
                                                                <div class="form-group">
                                                                    <div class="">
                                                                        <select v-model="therapist_bio_data.category_id" class="form-control">
                                                                            <option>-- Select --</option>
                                                                            <option v-for="singleSpeciality in specialities" :key="singleSpeciality.id" :value="singleSpeciality.id">{{singleSpeciality.title}}</option>
                                                                            <!-- <option>Option 1</option>
                                                                            <option>Option 5</option> -->
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-group">
                                                                <label>Fee</label>
                                                                <input type="text" v-model="therapist_bio_data.therapist_fee" class="form-control" placeholder="$999">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label>Bio</label>
                                                                <textarea type="text" v-model="therapist_bio_data.about_therapist" class="form-control" placeholder="Bio"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-9"></div>
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <button type="submit" class="btn btn-primary btn-block">Save Changes</button>

                                                            </div>
                                                        </div>

                                                        
                                                    </div>
                                                    
                                                 </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <!-- /Bio Tab -->
                            <!-- Education Tab -->
                            <div id="education" class="tab-pane fade">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                 <form @submit="adminAddEducationInfo">
                                                    <div class="row form-row">
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Education Information</span></h5>
                                                        </div>
                                                        <div class="row col-12" v-for="(singleEducation, index) in education" :key="singleEducation.id">
                                                            <div class="col-12 col-sm-4">
                                                                <div class="form-group">
                                                                    <label>Degree</label>
                                                                    <input type="text" v-model="singleEducation.degree_program" class="form-control" placeholder="Bachelors">
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-4">
                                                                <div class="form-group">
                                                                    <label>College/Institution</label>
                                                                    <input type="text" v-model="singleEducation.university_name" class="form-control" placeholder="College">
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-3">
                                                                <div class="form-group">
                                                                    <label>Year Of Completion</label>
                                                                    <input type="text" v-model="singleEducation.tenure" class="form-control" placeholder="2022">
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-sm-1 p-6">
                                                                <div class="add-more "><a @click="removeEducation(index)" class="add-education-button"><i class="fas fa-minus-circle" v-show="index || ( !index && singleEducation.length > 1)">Remove</i></a></div>
                                                            </div>
                                                            
                                                        </div>
                                                        <div class="col-12 col-sm-12">
                                                            <div class="add-more"><a @click="addEducation(index)" class="add-education"><i class="fa fa-plus-circle"></i> Add More</a></div>
                                                        </div>
                                                        <div class="col-12 col-sm-9"></div>
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <button type="submit" class="btn btn-primary btn-block">Save Changes</button>

                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                 </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <!-- /Education Tab -->
                            <!-- Wrok Tab -->
                            <div id="work_experience" class="tab-pane fade">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                 <form @submit="adminAddWorkInfo">
                                                    <div class="row form-row">
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Work Experience</span></h5>
                                                        </div>
                                                        <div class="row col-12" v-for="(singleExperience,x) in work_experience" :key="'Ex'+x">
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <label>Organization</label>
                                                                <input type="text" v-model="singleExperience.organization_name" class="form-control" placeholder="SEBP">
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
                                                                <input type="text" v-model="singleExperience.tenure" class="form-control" placeholder="2022">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-2">
                                                            <div class="form-group">
                                                                <label>To</label>
                                                                <input type="text" v-model="singleExperience.tenure" class="form-control" placeholder="2022">
                                                            </div>
                                                        </div>

                                                        <div class="col-12 col-sm-1">
                                                                <div class="add-more "><a @click="removeExperience(x)" class="add-education-button"><i class="fas fa-minus-circle" v-show="x || ( !x && singleExperience.length > 1)">Remove</i></a></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-12">
                                                            <div class="add-more"><a @click="addExperience(x)" class="add-education"><i class="fa fa-plus-circle"></i> Add More</a></div>
                                                    </div>
                                                    <div class="col-12 col-sm-9"></div>
                                                        <div class="col-12 col-sm-3">
                                                            <div class="form-group">
                                                                <button type="submit" class="btn btn-primary btn-block">Save Changes</button>

                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                 </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <!-- /Work Tab -->
                            <!-- Wrok Tab -->
                            <div id="clinic" class="tab-pane fade">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                 <form>
                                                    <div class="row form-row">
                                                        <div class="col-12">
                                                            <h5 class="form-title text-primary"><span>Clinic Information</span></h5>
                                                        </div>
                                                        <div class="col-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label>Full Name</label>
                                                                <input type="text" class="form-control" placeholder="Full Name" required>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                 </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <!-- /Work Tab -->
                            
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
                specialities: {},
                therapist_login_data:{
                    id:'',
                    full_name:'',
                    email:'',
                    password:'',
                },
                therapist_general_data:{
                    id:'',
                    phone:'',
                    dob:'',
                    gender:'',
                    blood_group:'',
                },
                therapist_bio_data:{
                    therapist_id:'',
                    about_therapist:'',
                    therapist_fee:'',
                    category_id:'',
                    license_id:'111-222-333',
                    country:'Pakistan',
                    lat_long:'12233.312, 324123.213213',
                },
                education: [],
                work_experience:[],
            }
        },
        created(){
        if(window.localStorage.getItem('role') =='admin') {
            this.getTherapistProfileData();
            this.getTherapistGeneralData();
            this.getTherapistBioData();
            this.getTherapistEducationData();
            this.getTherapistWorkData();
            this.getAllSpecialities();
        }
        else{
            this.$router.push('/admin/login');
        }
    },
    methods:{
        adminAddWorkInfo(){
            let token = window.localStorage.getItem('token');
            let therapistID = this.$route.params.therapist_id;
            AdminService.AdminAddTherapistWorkInfoService(token, therapistID, this.work_experience).then((response) => {
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
        adminAddEducationInfo(){
            let token = window.localStorage.getItem('token');
            let therapistID = this.$route.params.therapist_id;
            AdminService.AdminAddTherapistEducationInfoService(token, therapistID, this.education).then((response) => {
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
        adminAddBioInfo(){
            let token = window.localStorage.getItem('token');
            //let therapistID = this.$route.params.therapist_id;
            AdminService.AdminAddTherapistBioInfoService(token, this.therapist_bio_data).then((response) => {
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
        adminAddGeneralInfo(){
            let token = window.localStorage.getItem('token');
            //let therapistID = this.$route.params.therapist_id;
            AdminService.AdminAddTherapistGeneralInfoService(token, this.therapist_general_data).then((response) => {
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
        adminAddLoginInfo(){
            let token = window.localStorage.getItem('token');
            //let therapistID = this.$route.params.therapist_id;
            AdminService.AdminAddTherapistLoginInfoService(token, this.therapist_login_data).then((response) => {
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
        getTherapistWorkData(){
            let token = window.localStorage.getItem('token');
            let therapistID = this.$route.params.therapist_id;
            AdminService.getTherapistWorkService(token, therapistID).then((response) => {
                if(response.status==200){
                    //alert('true');
                     this.work_experience = response.data.data.work_info;
                     console.log(this.work_experience);
                    // this.therapist_bio_data.therapist_id = response.data.data.bio_info.therapist_id;
                    // this.therapist_bio_data.therapist_fee = response.data.data.bio_info.therapist_fee;
                    // this.therapist_bio_data.category_id = response.data.data.bio_info.category_id;
                    // this.therapist_bio_data.about_therapist = response.data.data.bio_info.about_therapist;
                    //console.log(this.therapist_login_data[0]['login_info']);
                    //alert(this.admin_data[0].id);
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});

        },
        getTherapistEducationData(){
            let token = window.localStorage.getItem('token');
            let therapistID = this.$route.params.therapist_id;
            AdminService.getTherapistEducationService(token, therapistID).then((response) => {
                if(response.status==200){
                    //alert('true');
                     this.education = response.data.data.education_info;
                     console.log(this.education);
                    // this.therapist_bio_data.therapist_id = response.data.data.bio_info.therapist_id;
                    // this.therapist_bio_data.therapist_fee = response.data.data.bio_info.therapist_fee;
                    // this.therapist_bio_data.category_id = response.data.data.bio_info.category_id;
                    // this.therapist_bio_data.about_therapist = response.data.data.bio_info.about_therapist;
                    //console.log(this.therapist_login_data[0]['login_info']);
                    //alert(this.admin_data[0].id);
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});

        },
        getTherapistBioData(){
            let token = window.localStorage.getItem('token');
            let therapistID = this.$route.params.therapist_id;
            AdminService.getTherapistBioService(token, therapistID).then((response) => {
                if(response.status==200){
                    this.therapist_bio_data.id = response.data.data.bio_info.id;
                    this.therapist_bio_data.therapist_id = response.data.data.bio_info.therapist_id;
                    this.therapist_bio_data.therapist_fee = response.data.data.bio_info.therapist_fee;
                    this.therapist_bio_data.category_id = response.data.data.bio_info.category_id;
                    this.therapist_bio_data.about_therapist = response.data.data.bio_info.about_therapist;
                    //console.log(this.therapist_login_data[0]['login_info']);
                    //alert(this.admin_data[0].id);
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});

        },
        getTherapistGeneralData(){
            let token = window.localStorage.getItem('token');
            let therapistID = this.$route.params.therapist_id;
            AdminService.getTherapistGeneralService(token, therapistID).then((response) => {
                if(response.status==200){
                    this.therapist_general_data.id = response.data.data.general_info.id;
                    this.therapist_general_data.phone = response.data.data.general_info.phone_number;
                    this.therapist_general_data.dob = response.data.data.general_info.dob;
                    this.therapist_general_data.gender = response.data.data.general_info.gender;
                    this.therapist_general_data.blood_group = response.data.data.general_info.blood_group;
                    //console.log(this.therapist_login_data[0]['login_info']);
                    //alert(this.admin_data[0].id);
                }
                else{
					alert('fail');
				}

            }).catch((error) => {
				
			});

        },
        getTherapistProfileData(){
            let token = window.localStorage.getItem('token');
            let therapistID = this.$route.params.therapist_id;
            AdminService.getTherapistProfileService(token, therapistID).then((response) => {
                if(response.status==200){
                    this.therapist_login_data.id = response.data.data.login_info.id;
                    this.therapist_login_data.full_name = response.data.data.login_info.full_name;
                    this.therapist_login_data.email = response.data.data.login_info.email;
                    this.therapist_login_data.password = response.data.data.login_info.password;
                    //console.log(this.therapist_login_data[0]['login_info']);
                    //alert(this.admin_data[0].id);
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
        loadImg(imgPath, value) {
            if(value == 1) {
              return  images('./' + imgPath)
            } else {
              return  patientImages('./' + imgPath)
            }
        },
        removeEducation (index) {
            this.education.splice(index, 1)
        },
        addEducation () {
            this.education.push({
                therapist_id:this.$route.params.therapist_id,
                degree_program: '',
                university_name: '',
                tenure: '',
            })
            console.log(this.inputs)
        },
        removeExperience (index) {
            this.work_experience.splice(index, 1)
        },
        addExperience () {
            this.work_experience.push({
                therapist_id:this.$route.params.therapist_id,
                organization_name: '',
                designation: '',
                tenure: '',
            })
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