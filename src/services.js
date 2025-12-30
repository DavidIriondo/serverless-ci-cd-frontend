import { getEnv } from "../env";
const { BASE_URL } = getEnv();

export const services = [
  {
    name: "Instance information 💻",
    url: `http://${BASE_URL}/back/instance`
  },
  {
    name: "Creator message 🐱",
    url: `http://${BASE_URL}/back/message`
  },
  {
    name: "Health 🖤",
    url: `http://${BASE_URL}/back/health`
  }
];
