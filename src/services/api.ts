import axios from "axios";

const api = axios.create({
    baseURL: "http://challenge-front-end.bovcontrol.com/v1",
    headers: {
        "Content-type": "application/json"
    }
});

export default api;
