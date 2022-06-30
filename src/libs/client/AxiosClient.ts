import axios, { AxiosInstance } from "axios";

function createClient(): AxiosInstance {
  return axios.create({ timeout: 5000 });
}

const client = createClient();

export default client;
