import axios from 'axios';
import AuthService from '../services/AuthService';

const USER_API_URL = 'http://localhost:3000/';
//const USER_API_URL = 'http:///';


class OrderService {


    async getEverything() {
        return await axios.get(USER_API_URL + 'api/orders');
    }

    async getAllOrdersForUser() {
        //let result = await axios.get(USER_API_URL + 'api/orders');
        //console.log(result);
        return await axios.get(USER_API_URL + 'api/orders', { headers: AuthService.authHeader() });
    }

    async postOrderForUser(order) {
        return await axios.post(USER_API_URL + 'api/orders', order, { headers: AuthService.authHeader() });
    }


}

export default new OrderService();