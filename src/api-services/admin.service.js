import Axios from 'axios';

const RESOURCE_DASHBOARD_DATA = '/getAdminDashboard';
const RESOURCE_ALL_APPOINTMENTS_DATA = '/getAllAppointments';
const RESOURCE_ALL_SPECIALITIES_DATA = '/getAllSpecialitites';
const RESOURCE_ALL_THERAPISTS_DATA = '/getAdminAllTherapists';
const RESOURCE_ALL_PATIENTS_DATA = '/getAdminAllPatients';
const RESOURCE_ALL_REVIEWS_DATA = '/getAdminAllReviews';
const RESOURCE_ALL_PROFILE_DATA = '/getAdminProfile';
const RESOURCE_NEW_THERAPIST = '/registerNewTherapist';
const RESOURCE_CHANGE_SPECIALITY = '/adminChangeSpeciality';
const RESOURCE_ADD_SPECIALITY = '/adminAddNewSpeciality';
const RESOURCE_GET_THERAPIST_BY_ID = '/getTherapistDataById';
const RESOURCE_ADD_THERAPIST_LOGIN_INFO = '/adminAddTherapistLoginInfo';
const RESOURCE_GET_THERAPIST_GENERAL_DATA = '/getTherapistGeneralInfo';
const RESOURCE_ADD_THERAPIST_GENERAL_INFO = '/adminAddTherapistGeneralInfo';
const RESOURCE_GET_THERAPIST_BIO_DATA = '/getTherapistBioInfo';
const RESOURCE_ADD_THERAPIST_BIO_INFO = '/adminAddTherapistBioInfo';
const RESOURCE_GET_THERAPIST_EDUCATION_DATA = '/getTherapistEducationInfo';
const RESOURCE_ADD_THERAPIST_EDUCATION_INFO = '/adminAddTherapistEducationInfo';
const RESOURCE_GET_THERAPIST_WORK_DATA = '/getTherapistWorkInfo';
const RESOURCE_ADD_THERAPIST_WORK_INFO = '/adminAddTherapistWorkInfo';








export default {

    AdminAddTherapistWorkInfoService(adminToken, therapist, work_info){
        const json = JSON.stringify({ 
            therapist_id: therapist,
            work_info: work_info,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_ADD_THERAPIST_WORK_INFO, json, {headers},
        );
    },
    AdminAddTherapistEducationInfoService(adminToken, therapist, education_info){
        const json = JSON.stringify({ 
            therapist_id: therapist,
            education_info: education_info,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_ADD_THERAPIST_EDUCATION_INFO, json, {headers},
        );
    },
    AdminAddTherapistBioInfoService(adminToken, bio_info){
        const json = JSON.stringify({ 
            bio_info: bio_info,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_ADD_THERAPIST_BIO_INFO, json, {headers},
        );
    },
    AdminAddTherapistGeneralInfoService(adminToken, general_info){
        const json = JSON.stringify({ 
            general_info: general_info,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_ADD_THERAPIST_GENERAL_INFO, json, {headers},
        );
    },
    AdminAddTherapistLoginInfoService(adminToken, login_info){
        const json = JSON.stringify({ 
            login_info: login_info,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_ADD_THERAPIST_LOGIN_INFO, json, {headers},
        );
    },
    getTherapistWorkService(adminToken, id){
        const json = JSON.stringify({ 
            therapist_id: id,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_GET_THERAPIST_WORK_DATA, json, {headers},
            );
    },
    getTherapistEducationService(adminToken, id){
        const json = JSON.stringify({ 
            therapist_id: id,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_GET_THERAPIST_EDUCATION_DATA, json, {headers},
            );
    },
    getTherapistBioService(adminToken, id){
        const json = JSON.stringify({ 
            therapist_id: id,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_GET_THERAPIST_BIO_DATA, json, {headers},
            );
    },
    getTherapistGeneralService(adminToken, id){
        const json = JSON.stringify({ 
            therapist_id: id,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_GET_THERAPIST_GENERAL_DATA, json, {headers},
            );
    },
    getTherapistProfileService(adminToken, id){
        const json = JSON.stringify({ 
            therapist_id: id,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_GET_THERAPIST_BY_ID, json, {headers},
            );

    },
    AddNewSpecialityService(adminToken, category, description){
        //console.log(category);
        const json = JSON.stringify({ 
            category_name: category,
            category_description: description,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_ADD_SPECIALITY, json, {headers},
            );
        
    },
    ChangeSpecialityService(adminToken, speciality) {
        
        const json = JSON.stringify({ 
            speciality_data: speciality,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        
        return Axios.post(RESOURCE_CHANGE_SPECIALITY, json, { headers },
            );

    },
    RegisterTherapistService(adminToken, therapistData) {
        const json = JSON.stringify({ 
            therapist_data: therapistData });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + adminToken
        };
        
        return Axios.post(RESOURCE_NEW_THERAPIST, json, { headers },
        
        );

    },
    getAdminProfileService(adminToken) {
        return Axios.get(RESOURCE_ALL_PROFILE_DATA, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + adminToken
                }
        });

    },
    getAllReviewsService(adminToken) {
        return Axios.get(RESOURCE_ALL_REVIEWS_DATA, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + adminToken
                }
        });

    },
    getAllPatientsService(adminToken) {
        return Axios.get(RESOURCE_ALL_PATIENTS_DATA, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + adminToken
                }
        });

    },
    getAllTherapistsService(adminToken) {
        return Axios.get(RESOURCE_ALL_THERAPISTS_DATA, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + adminToken
                }
        });

    },
    AllSpecialitiesService(adminToken) {
        return Axios.get(RESOURCE_ALL_SPECIALITIES_DATA, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + adminToken
                }
        });

    },
    dashboardService(adminToken) {
        return Axios.get(RESOURCE_DASHBOARD_DATA, {
                 headers: { 
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': 'Bearer ' + adminToken
                }
        });

    },
    AllAppointmentsService(adminToken){
        return Axios.get(RESOURCE_ALL_APPOINTMENTS_DATA, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + adminToken
            }
    });
    }
}