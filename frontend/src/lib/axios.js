import axios from "axios";

const axiosInstance = axios.create({
	baseURL:  "https://ecom-nvp3.onrender.com/api", 
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
