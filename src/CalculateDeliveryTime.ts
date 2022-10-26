import { Route } from "./Route";
import { DeliveryService } from "./DeliveryService";

export class CalculateDeliveryTime {
  constructor(readonly deliveryService: DeliveryService) {}

  calculate(route: Route): number {
    return this.deliveryService.calculate(route);
  }
}
