<template>
    <!-- Profile Sidebar -->
        <div class="profile-sidebar">
            <div class="widget-profile pro-widget-content">
                <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                        <img src="@/assets/img/patients/patient.jpg" alt="User Image">
                    </a>
                    <div class="profile-det-info">
                        <h3>{{patient_data.full_name}}</h3>
                        <div class="patient-details">
                            <h5>{{patient_data.email}}</h5>
                            <h5 class="mb-0"><i class="fas fa-phone"></i> {{patient_data.phone_number}}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard-widget">
                <nav class="dashboard-menu">
                    <ul>
                        <li :class="currentPath == 'patient-dashboard' ||  this.$route.name == 'patient-doctor-profile' || currentPath == 'add-dependent' || currentPath == 'dependent' || currentPath == 'find-doctor'  || currentPath == 'visit-reason' || currentPath == 'visit-type' || currentPath == 'visit-confirmed' || currentPath == 'health-profile' || currentPath == 'select-payment' || currentPath == 'choose-service'  || currentPath == 'appointment-detail'  ? 'active' : 'notaactive'">
                            <router-link to="/patient/index">
                                <i class="fas fa-columns"></i>
                                <span>Dashboard</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'favourites' ? 'active' : 'notaactive'">
                            <router-link to="/patient/favourites">
                                <i class="fas fa-bookmark"></i>
                                <span>Favourites</span>
                            </router-link>
                        </li>
                        <!-- <li :class="currentPath == 'dependent' ? 'active' : 'notaactive'">
                            <router-link to="/patient/dependent">
                                <i class="fas fa-users"></i>
                                <span>Dependent</span>
                            </router-link>
                        </li> -->
                        <!-- <li :class="currentPath == 'chat' ? 'active' : 'notaactive'">
                            <router-link to="/patient/chat">
                                <i class="fas fa-comments"></i>
                                <span>Message</span>
                                <small class="unread-msg">23</small>
                            </router-link>
                        </li> -->
                        <li :class="currentPath == 'patient-profile' || currentPath == 'patient-profile-settings' ? 'active' : 'notaactive'">
                            <router-link to="/patient/profile">
                                <i class="fas fa-user-cog"></i>
                                <span>Profile Settings</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'patient-changePassword' ? 'active' : 'notaactive'">
                            <router-link to="/patient/changePassword">
                                <i class="fas fa-lock"></i>
                                <span>Change Password</span>
                            </router-link>
                        </li>
                        <li>
                            <a class="cursor" @click="logoutPatient">
                                <i class="fas fa-sign-out-alt"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    <!-- /Profile Sidebar -->
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
        logoutPatient(){
			this.$localStorage.remove('token');
			this.$localStorage.remove('user');
			this.$localStorage.remove('role');
			this.$router.push('/login');
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
    computed:{
        currentPath() {
            return this.$route.name;
        }
    }
}
</script>
<style scoped>
.cursor{
    cursor: pointer;
}
</style>