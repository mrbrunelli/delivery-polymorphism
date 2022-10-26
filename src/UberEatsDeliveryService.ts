import { Route } from "./Route";
import { DeliveryService } from "./DeliveryService";

export class UberEatsDeliveryService implements DeliveryService {
  calculate(route: Route): number {
    return 19.4;
  }
}
