import axios from "axios";

const fakeServerAPI : any = axios.create({
  baseURL: 'http://localhost:3004',
  timeout: 1000,
});

export default fakeServerAPI