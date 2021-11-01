import { useParams } from 'react-router';
import './login.css'
const Login = () => {
    const {id} = useParams();


    return ( 
        <div>
            <h2>
                name:{id}
            </h2>
        </div>
     );
}
 
export default Login;