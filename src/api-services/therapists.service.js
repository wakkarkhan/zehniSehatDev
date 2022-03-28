import Axios from 'axios';

const RESOURCE_All_THERAPISTS = '/getAllTherapists';
const RESOURCE_GET_SINGLE_THERAPIST = '/getSingleTherapist';
const RESOURCE_GET_SINGLE_THERAPIST_EDUCATION = '/getSingleTherapistEducation';
const RESOURCE_THERAPIST_DASHBOARD_DATA = '/getTherapistData';
const RESOURCE_THERAPIST_DASHBOARD_APPOINTMENTS_DATA = '/getTherapistDashboardData';
const RESOURCE_THERAPIST_PATIENTS_DATA = '/getTherapistPatientData';
const RESOURCE_THERAPIST_REVIEWS_DATA = '/getTherapistReviewsData';
const RESOURCE_THERAPIST_ALL_DATA = '/getTherapistGeneralData';
const RESOURCE_THERAPIST_ALL_SPECIALITY_DATA = '/getTherapistAllSpecialitites';
const RESOURCE_UPDATE_THERAPIST_DATA = '/updateAllTherapistData';
const RESOURCE_UPDATE_THERAPIST_PASSWORD = '/updateTherapistPassword';
const RESOURCE_REGISTER_THERAPIST = '/registerTherapist';
const RESOURCE_GET_FILTERED_THERAPIST_DATA = '/getAllFilteredTherapists';
const RESOURCE_CHANGE_APPOINTMENT_STATUS_DATA = '/changeAppointmentStatus';
const RESOURCE_THERAPIST_AVAILABILITIES_DATA = '/getTherapistAvailabilities';
const RESOURCE_UPDATE_THERAPIST_MONDAY_SLOTS = '/updateTherapistMondaySlots';
export default {

    // THERAPIST_DASHBOARD
    UpdateTherapistMondaySlots(therapistToken, mondaySlots, day){
        const json = JSON.stringify({ 
            monday_slots: mondaySlots,
            day: day,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + therapistToken
        };
        return Axios.post(RESOURCE_UPDATE_THERAPIST_MONDAY_SLOTS, json, {headers},
        );
    },
    TherapistAvailabilitiesService(therapistToken) {
        return Axios.get(RESOURCE_THERAPIST_AVAILABILITIES_DATA, {
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + therapistToken
            }
        });
    },
    ChangeAppointmentStatusService(therapistToken, appointment_id, dateTime){
        const json = JSON.stringify({ 
            appointment_id: appointment_id,
            date_time: dateTime,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + therapistToken
        };
        return Axios.post(RESOURCE_CHANGE_APPOINTMENT_STATUS_DATA, json, {headers},
            );
    },
    registerTherapistService(data) {
        return Axios.post(RESOURCE_REGISTER_THERAPIST, data);
    },
    updateTherapistPasswordService(therapistToken, password){
        const json = JSON.stringify({ 
          therapistPassword: password,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + therapistToken
        };
        return Axios.post(RESOURCE_UPDATE_THERAPIST_PASSWORD, json, {headers},
        );
      },
    updateTherapistService(therapistToken, therapistData){
        const json = JSON.stringify({ 
            therapist_data: therapistData });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + therapistToken
        };
        
        return Axios.post(RESOURCE_UPDATE_THERAPIST_DATA, json, { headers },
        
        );
    },
    therapistAllSpecialitiesService(therapistToken){
        return Axios.get(RESOURCE_THERAPIST_ALL_SPECIALITY_DATA, {
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + therapistToken
            }
        });
    },
    therapistAllDataService(therapistToken){
        return Axios.get(RESOURCE_THERAPIST_ALL_DATA, {
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + therapistToken
            }
        });
    },
    therapistReviewsService(therapistToken){
        return Axios.get(RESOURCE_THERAPIST_REVIEWS_DATA, {
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + therapistToken
            }
        });
    },
    therapistPatientsService(therapistToken){
        return Axios.get(RESOURCE_THERAPIST_PATIENTS_DATA, {
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + therapistToken
            }
        });
    },
    therapistDashboardAppointmentsService(therapistToken){
        return Axios.get(RESOURCE_THERAPIST_DASHBOARD_APPOINTMENTS_DATA, {
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + therapistToken
            }
        });
    },
    therapistDashboardService(therapistToken){
        return Axios.get(RESOURCE_THERAPIST_DASHBOARD_DATA, {
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + therapistToken
            }
        });
    },
    getAllFilteredTherapistService(array) {
        const json = JSON.stringify({ 
            categories: array });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        };
        
        return Axios.post(RESOURCE_GET_FILTERED_THERAPIST_DATA, json, { headers },
        
        );
    },


    getAllTherapistService() {
        return Axios.get(RESOURCE_All_THERAPISTS);
    },
    getTherapistEducationService(id){
        const json = JSON.stringify({ 
            therapist_id: id,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            // 'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_GET_SINGLE_THERAPIST_EDUCATION, json, {headers},
            );
    },
    getTherapistProfileService(id){
        const json = JSON.stringify({ 
            therapist_id: id,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            // 'Authorization': 'Bearer ' + adminToken
        };
        return Axios.post(RESOURCE_GET_SINGLE_THERAPIST, json, {headers},
        );

    },
    
}