//import {URL_LOGIN} from "../config";
import axios from "axios";
import jwtDecode from "jwt-decode"
function authentificate(credentials){

    return axios.post("http://localhost:8080/login", credentials)
        .then(res=>res.data)
        .then(data=>{

            window.localStorage.setItem("authToken", data.accessToken)
            console.log(data.accessToken)
            axios.defaults.headers["Authorization"]="Token "+data.accessToken
            console.log(jwtDecode(data.accessToken))
            console.log(isAuthentificated())
        })
}
function isAuthentificated(){
    const token = window.localStorage.getItem("authToken")
    if(token){
        const exp = jwtDecode(token).exp
        const userId = jwtDecode(token).aud
        console.log(userId)

        if(exp*1000 > new Date().getTime()){
            return true
        }
        return false
    }
    return false
}
export default { 
    authentificate,
    isAuthentificated
};