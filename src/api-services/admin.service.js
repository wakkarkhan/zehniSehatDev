import Axios from 'axios';

const RESOURCE_DASHBOARD_DATA = '/getAdminDashboard';
const RESOURCE_ALL_APPOINTMENTS_DATA = '/getAllAppointments';
const RESOURCE_ALL_SPECIALITIES_DATA = '/getAllSpecialitites';
const RESOURCE_ALL_THERAPISTS_DATA = '/getAdminAllTherapists';

export default {
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
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer '+adminToken
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