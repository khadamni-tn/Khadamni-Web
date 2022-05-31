import axios from "axios";
//actions:
const API_URL = "http://localhost:3500/";

const register = ({user, pwd}) => { //send the data to the back
  return axios.post(API_URL + "register",
    JSON.stringify({ user, pwd }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true //ask Mr Ikdem
    })
  };

const login1 = ({user, pwd}) => {
  return axios.post(API_URL + "auth",  JSON.stringify({ user, pwd }))
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};


const login = async ({user, pwd}) => {
       
  
    try {
      console.log("testss")
        const response = await axios.post(API_URL + "auth",
            JSON.stringify({ user, pwd }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        
        const accessToken = response.data.accessToken;
        const roles = response.data.roles;
      //   setAuth({ user, pwd, roles, accessToken });
      //   setUser('');
      //   setPwd('');
      //   setSuccess(true)
        console.log("======")
        
        
    } catch (err) {
        console.log(err)
    }
}

const authService = {
  register,
  login,
  logout,
};

export default authService;