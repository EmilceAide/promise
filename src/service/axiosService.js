import APIRequest from '../utils/config/axiosConfig';


export function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }); // https://randomuser.me/api/ 
}


