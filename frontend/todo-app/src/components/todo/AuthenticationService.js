class AuthenticationService
{
    registerSuccessfulLogin(username,  password)
    {
        sessionStorage.setItem('authenticatedUser',username);
        //console.log('set session for:' + username )
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
}
export default new AuthenticationService()