import axios from 'axios';
import AuthService from '../services/AuthService';

const USER_API_URL = 'http://localhost:3000/';
//const USER_API_URL = 'http:///';


class ProductService {


    async getProductsOfId(order) {
        //console.log(await axios.get(USER_API_URL + 'api/products/' + order.id));
        return await axios.get(USER_API_URL + 'api/products/' + order.id, { headers: AuthService.authHeader() });
    }

    async postProduct(product) {
        console.log(USER_API_URL + 'api/products/')
        console.log((product.orderId))
        return await axios.post(USER_API_URL + 'api/products/', (product), { headers: AuthService.authHeader() })
    }

    async deleteProduct(productId) {
        console.log(USER_API_URL + 'api/products/' + productId);
        return await axios.delete(USER_API_URL + 'api/products/' + productId , { headers: AuthService.authHeader() })
    }

    async updateProduct(updateObject) {
        console.log('product sent from productService to update: ' + (updateObject))
        console.log(USER_API_URL + 'api/products/' + updateObject.id)
        return await axios.put(USER_API_URL + 'api/products/' + updateObject.id, (updateObject), { headers: AuthService.authHeader() })
    }




}

export default new ProductService();