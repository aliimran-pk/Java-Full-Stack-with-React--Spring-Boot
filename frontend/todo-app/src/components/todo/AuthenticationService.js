import axios from 'axios'

class AuthenticationService
{

   /*
    executeBasicAuthenticationService(username, password) {
        return axios.get(`http://localhost:8080/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }
    */

    registerSuccessfulLogin(username,  password)
    {
        sessionStorage.setItem('authenticatedUser',username);
        //console.log('set session for:' + username )
        this.setupAxiosInterceptors()
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

    setupAxiosInterceptors() {
        let username = 'user1'
        let password = 'pwd'
        let basicAuthHeader = 'Basis ' +  window.btoa(username + ":" + password)

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