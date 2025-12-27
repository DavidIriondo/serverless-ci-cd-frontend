import { getEnv } from "../env";
const { BASE_URL } = getEnv();

export const services = [
  {
    name: "Instance information 💻",
    url: `${BASE_URL}/instance`
  },
  {
    name: "Creator message 🐱",
    url: `${BASE_URL}/message`
  },
  {
    name: "Health 🖤",
    url: `${BASE_URL}/health`
  }
];
