import { CalculateDeliveryTime } from "./CalculateDeliveryTime";
import { DeliveryService } from "./DeliveryService";
import { Route } from "./Route";

export class FindFatestDeliveryService {
  private services: DeliveryService[] = [];

  setProvider(service: DeliveryService) {
    this.services.push(service);
    return this;
  }

  find(route: Route) {
    if (this.services.length === 0) {
      throw new Error("No delivery service set");
    }

    const [first, ...rest] = this.services.map((service) => {
      const value = new CalculateDeliveryTime(service).calculate(route);
      return {
        service: service.constructor.name,
        value,
      };
    });

    if (rest.length === 0) {
      return {
        service: first.service,
        value: first.value,
      };
    }

    return rest.reduce(
      (prev, curr) => (curr.value < prev.value ? curr : prev),
      first
    );
  }
}
