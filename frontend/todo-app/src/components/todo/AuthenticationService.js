import axios from 'axios'

class AuthenticationService
{

    executeBasicAuthenticationService(username, password) {
        return axios.get(`http://localhost:8080/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username,  password)
    {
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        console.log('user:' + user)
        if(null != user && user.trim().length > 0 )
            return true;
        else
            return false;
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser');
       // console.log('user:' + user)
        if(null != user && user.trim().length > 0 )
            return user;
        else
            return '';
    }

    setupAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

}
export default new AuthenticationService()