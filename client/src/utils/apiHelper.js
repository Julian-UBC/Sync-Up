import axios from "axios";
import { getAuth } from "firebase/auth";

const addUser = (uid, email) => {
  axios({
    method: 'PUT',
    url: "http://localhost:8000/api/user",
    timeout: 3000,
    data: {
      uniqueId: uid,
      email: email,
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
  if (user) {
    axios.get(`http://localhost:8000/api/user/${user.email}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log("getCurrentUser err: ", err)
    });
  } 
  return null
  
}

export { addUser, getCurrentUser }

