import type { AxiosInstance } from "axios";
import axios from "axios";

function createClient(): AxiosInstance {
  return axios.create({ timeout: 5000 });
}

export const client = createClient();
