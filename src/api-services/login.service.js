import Axios from 'axios';

const RESOURCE_LOGIN = '/login';

export default {
    loginService(data) {
        return Axios.post(RESOURCE_LOGIN, data);
      },

}