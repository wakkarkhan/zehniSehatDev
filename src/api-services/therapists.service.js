import Axios from 'axios';

const RESOURCE_All_THERAPISTS = '/getAllTherapists';


export default {
    getAllTherapistService() {
        return Axios.get(RESOURCE_All_THERAPISTS);
      },
    
}