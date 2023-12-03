import { useState } from "react";
import axios from "axios";
import './login.css';
import { useNavigate } from "react-router-dom";


function Login() {
  
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  
  

  const [data, setData] = useState(null);

  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    
  };

  const login = async () => {
    try {
      const { data } = await axios("/api/auth/login", {
        method: "POST",
        data: credentials,
      });
      console.log(data);
      
      
  
      localStorage.setItem("token", data.token);
      console.log(data.message, data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const requestData = async () => {
    try {
      const { data } = await axios("/api/auth/profile", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
  
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="box">
    <div>
      <div>
       
        <input
          value={username}
          onChange={handleChange}
          name="username"
          type="text"
          className="form"
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          className="form"
        />
        
        <div className="form">
     <div className="login">
          <button className="button" onClick={()=>{login,navigate('/login',{replace:true, state:{username,password}})}}>
            Log in
          </button>
          <button className="button" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
      <div className="protected">
        <button className=" button" onClick={requestData}>
          Request protected data
        </button>
      </div>

      {data && (
        <div className="text-center p-4">
          <div className="alert">{data}</div>
        </div>
      )}
    </div>
    </div>
    
    </div>
  );
}

export default Login;
