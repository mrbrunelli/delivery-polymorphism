import { Route } from "./Route";

export interface DeliveryService {
  calculate(route: Route): number;
}
