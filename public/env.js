export function getEnv() {
  if (window.__ENV__) {
    return window.__ENV__;
  }

  // Local dev fallback
  return {
    BASE_URL: "http://localhost:8000"
  };
}