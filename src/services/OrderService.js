import axios from 'axios';
import AuthService from '../services/AuthService';

const USER_API_URL = 'http://localhost:3000/';
//const USER_API_URL = 'http:///';


class OrderService {


    async getEverything() {
        return await axios.get(USER_API_URL + 'api/orders', { headers: AuthService.authHeader() });
    }

    async getProductsOfId(order) {
        console.log((USER_API_URL + 'api/products/' + order.id));
        return await axios.get(USER_API_URL + 'api/products/' + order.id, { headers: AuthService.authHeader() });
    }

    async postOrder(order) {
        console.log(JSON.stringify(order))
        console.log((USER_API_URL + 'api/orders/'));
        return await axios.post(USER_API_URL + 'api/orders/', order, { headers: AuthService.authHeader() })
    }

    async deleteOrder(orderid) {
        console.log(('delete:::' + USER_API_URL + 'api/orders/' + orderid));
        return await axios.delete(USER_API_URL + 'api/orders/' + orderid)
    }

    // async getAllOrdersForUser() {
    //     //let result = await axios.get(USER_API_URL + 'api/orders');
    //     //console.log(result);
    //     return await axios.get(USER_API_URL + 'api/orders', { headers: AuthService.authHeader() });
    // }

    // async postOrderForUser(order) {
    //     return await axios.post(USER_API_URL + 'api/orders', order, { headers: AuthService.authHeader() });
    // }


}

export default new OrderService();