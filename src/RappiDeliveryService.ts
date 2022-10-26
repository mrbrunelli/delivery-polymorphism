import { Route } from "./Route";
import { DeliveryService } from "./DeliveryService";

export class RappiDeliveryService implements DeliveryService {
  calculate(route: Route): number {
    return 21;
  }
}
