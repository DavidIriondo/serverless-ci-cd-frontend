import { useEffect, useState } from "preact/hooks";

export function ServiceCard({ name, url }) {
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);

  const fetchService = async () => {
    setStatus("loading");

    try {
      const response = await fetch(url);
      console.log(url)
      if (!response.ok){
        throw new Error();
      } 
      

      const json = await response.json();
      setData(json);
      setStatus("ok");
    } catch {

      setStatus("error");
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>
        <strong>URL:</strong> {url}
      </p>

      {status === "loading" && <p>Loading...</p>}
      {status === "error" && (
        <p style={styles.error}>Service unreachable</p>
      )}

      {status === "ok" && (
        <pre style={styles.pre}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <button onClick={fetchService}>Refresh</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "12px",
    marginBottom: "12px",
    background: "#fff"
  },
  pre: {
    background: "#f6f6f6",
    padding: "8px",
    fontSize: "12px",
    overflowX: "auto"
  },
  error: {
    color: "#c0392b"
  }
};
