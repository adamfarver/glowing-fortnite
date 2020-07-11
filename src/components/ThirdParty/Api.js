
import axios from "axios";
const Endpoint = process.env.REACT_APP_API_URL;

export default axios.create({ baseURL: Endpoint});