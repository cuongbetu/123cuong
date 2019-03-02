import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRainbow } from '@fortawesome/free-solid-svg-icons';
class Login extends Component{
    render(){
        return(
            
        <div>
            <FontAwesomeIcon icon={faRainbow}/>
            <span>Coffee</span>
        </div>
        );
    }
}
export default Login;