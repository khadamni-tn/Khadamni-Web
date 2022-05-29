import axios from "axios";

const API_URL = "http://localhost:3500/";

const createPost = (field, location, schedule) => {
  console.log("Khedmet!")
  return axios.post("http://localhost:3500/api/post",
    JSON.stringify( {field, location, schedule} )
      )

  };



const postService = {
  createPost,
};

export default postService;