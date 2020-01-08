import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://bw-chef-portfolio.herokuapp.com/api`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: token
    }
  })
}
export default axiosWithAuth;