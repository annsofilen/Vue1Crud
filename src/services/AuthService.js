import axios from 'axios';

//const AUTH_API_URL = 'https://kwapinotes.azurewebsites.net/api/auth/';
const AUTH_API_URL = 'http://localhost:3000/api/auth/';

class AuthService {
  static async register(user) {
    try {
      return await axios.post(AUTH_API_URL + 'register', {
        username: user.username,
        email: user.email,
        password: user.password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    } catch (error) {
      console.error('Register error: ', error);
      throw error;
    }
  }

  static async login(user) {
    try {
      const response = await axios.post(AUTH_API_URL + 'login', {
        username: user.username,
        password: user.password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // API notes return the user data in the data property!
      // And Axios return the content in data. So, data.data ... :-)
      if (response.data.data.token) {

        localStorage.setItem('user', JSON.stringify(response.data.data));
      }

      return response.data.data;

    } catch (error) {
      console.error('Login error: ', error);
      throw error;
    }
  }

  static logout() {
    localStorage.removeItem('user');
    console.log("logged out")
  }

  static authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
      const headers = {
        Authorization: 'Bearer ' + user.token,
        'Content-Type': "application/x-www-form-urlencoded"

      }
      return headers;
    } else {
      return {

      };
    }
  }
}

export default AuthService;
