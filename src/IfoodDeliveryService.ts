import { Route } from "./Route";
import { DeliveryService } from "./DeliveryService";

export class IfoodDeliveryService implements DeliveryService {
  calculate(route: Route): number {
    return 15.2;
  }
}
