import axios from "axios";
import { getAuth } from "firebase/auth";

const isProduction = true;

const url = isProduction? "https://app.netlify.com/sites/ephemeral-basbousa-2c91f4/settings/deploys" : "http://localhost:8000"

const addUser = (uid, email) => {
  axios({
    method: 'PUT',
    url: `${url}/api/user`,
    timeout: 3000,
    data: {
      uniqueId: uid,
      email: email,
      point: 500,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log("Put user res: ", res)
    })
    .catch(err => {
      console.log("Put User failed: ", err)
    });
}

const getCurrentUser = () => {
  const user = getAuth().currentUser;
  let result = null
  if (user) {
    axios.get(`${url}/api/user/${user.email}`)
    .then((res) => {
      result = res.data
    })
    .catch((err) => {
      console.log("getCurrentUser err: ", err)
    });
  } 

  return result
}

export { addUser, getCurrentUser }

