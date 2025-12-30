import { getEnv } from "../public/env";
const { BASE_URL } = getEnv();

export const services = [
  {
    name: "Instance information 💻",
    url: `${BASE_URL}/back/instance`
  },
  {
    name: "Creator message 🐱",
    url: `${BASE_URL}/back/message`
  },
  {
    name: "Health 🖤",
    url: `${BASE_URL}/back/health`
  }
];
