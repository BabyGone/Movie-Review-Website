import axios from "axios";

export default axios.create({
    baseURL: 'https://78ce-2402-800-6170-40e0-9182-93b2-6a92-a9f2.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});

// http://9c96-103-106-239-104.ap.ngrok.io
// localhost:8080
// https://78ce-2402-800-6170-40e0-9182-93b2-6a92-a9f2.ngrok-free.app