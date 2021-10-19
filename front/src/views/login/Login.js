import React, {useContext, useState} from 'react';
import {TextField, Button} from "@material-ui/core"
import "./Login.css"
import authAPI from '../../services/AuthAPI';
import AuthContext from '../../contexts/AuthContext';
import { useHistory } from 'react-router';

const Login = () => {
    const history =useHistory()
    const [credentials, setCredentials] = useState({
        tel:"",
        password:""
    })
    const {setIsAuthentificated} = useContext(AuthContext)
    const handleChange = ({currentTarget})=>{
        console.log(currentTarget);
        // const value = currentTarget.value
        // const name = currentTarget.name
        const {value, name} = currentTarget
        console.log(value,name)
        setCredentials({
            ...credentials,
            [name]:value
        })
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            console.log("try")
            await authAPI.authentificate(credentials)
            setIsAuthentificated(true) 
            history.replace("/")
        }catch(error){
            console.log("erreur d'authenification")
        }
    

    }
    return(
        <form onSubmit={handleSubmit} className="login">
            <div>
                <TextField
                id="tel"
                label="Téléphone"
                type="text"
                name="tel"
                onChange={handleChange}
                />
                
            </div>
            <div>
                <TextField
                id="password"
                label="Mot de passe"
                type="text"
                name="password"
                onChange={handleChange}
                />
            </div>
            <div>
            <Button variant="contained" color="primary" type="submit"> 
            login
            </Button>
            </div>
        </form>
    );
}
export default Login;