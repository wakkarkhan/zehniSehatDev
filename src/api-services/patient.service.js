import Axios from 'axios';

const RESOURCE_REGISTER_PATIENT = '/register';


export default {

    registerPatientService(data) {
        return Axios.post(RESOURCE_REGISTER_PATIENT, data);
      },

}