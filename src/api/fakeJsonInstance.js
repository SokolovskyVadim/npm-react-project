import axios from "axios";

const fakeJsonAPI = axios.create({
  baseURL: 'https://app.fakejson.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default fakeJsonAPI