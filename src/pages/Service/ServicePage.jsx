import { services } from "../../services";
import { ServiceCard } from "../../components/ServiceCard";

export function ServicesPage() {
  return (
    <div style={styles.page}>
      <h1>Microservices API Dashboard</h1>
      <p>
        This page shows which microservice instance handled each request.
        <b>Click refresh</b> to see load balancing in action.
      </p>

      {services.map(service => (
        <ServiceCard
          key={service.name}
          name={service.name}
          url={service.url}
        />
      ))}
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "16px"
  }
};
