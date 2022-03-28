import Axios from 'axios';

const RESOURCE_REGISTER_PATIENT = '/register';
const RESOURCE_PATIENT_DASHBOARD_DATA = '/getPatientData';
const RESOURCE_PATIENT_APPOINTMENT_DATA = '/getPatientAppointmentData';
const RESOURCE_UPDATE_PATIENT_DATA = '/updatePatientInfoData';
const RESOURCE_UPDATE_PATIENT_PASSWORD = '/updatePatientPassword';


export default {
  updatePatientPasswordService(patientToken, password){
    const json = JSON.stringify({ 
      patientPassword: password,
    });
    const headers = { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + patientToken
    };
    return Axios.post(RESOURCE_UPDATE_PATIENT_PASSWORD, json, {headers},
    );
  },
  updatePatientDataService(patientToken, patientInfo){
        const json = JSON.stringify({ 
          patientInfo: patientInfo,
        });
        const headers = { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + patientToken
        };
        return Axios.post(RESOURCE_UPDATE_PATIENT_DATA, json, {headers},
        );
  },
  patientAppointmentService(patientToken){
    return Axios.get(RESOURCE_PATIENT_APPOINTMENT_DATA, {
      headers: { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + patientToken
        }
    });
  },
  patientDashboardService(patientToken){
      return Axios.get(RESOURCE_PATIENT_DASHBOARD_DATA, {
            headers: { 
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              'Authorization': 'Bearer ' + patientToken
          }
      });
  },
  registerPatientService(data) {
      return Axios.post(RESOURCE_REGISTER_PATIENT, data);
  },

}