import axios from 'axios';
import AuthService from '../services/AuthService';

const USER_API_URL = 'http://localhost:3000/';
//const USER_API_URL = 'http:///';


class ProductService {


    async getProductsOfId(order) {
        console.log(await axios.get(USER_API_URL + 'api/products/' + order.id));
        return await axios.get(USER_API_URL + 'api/products/' + order.id);
    }

    async postProduct(product) {
        console.log('product in service: ' + JSON.stringify(product))
        console.log(await axios.post(USER_API_URL + 'api/products/'));
        return await axios.post(USER_API_URL + 'api/products/', JSON.stringify(product), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }




}

export default new ProductService();