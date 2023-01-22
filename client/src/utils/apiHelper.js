import axios from "axios";

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

export { addUser }

