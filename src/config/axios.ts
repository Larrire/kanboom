import axios from "axios";

const instance = axios.create({
  baseURL: 'https://x8ki-letl-twmt.n7.xano.io/api:zbSMGp0X'
});

// https://x8ki-letl-twmt.n7.xano.io/api:zbSMGp0X/board/${id}

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default instance