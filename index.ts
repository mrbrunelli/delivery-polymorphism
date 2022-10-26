import { CalculateDeliveryTime } from "./src/CalculateDeliveryTime";
import { FindFatestDeliveryService } from "./src/FindFatestDeliveryService";
import { IfoodDeliveryService } from "./src/IfoodDeliveryService";
import { RappiDeliveryService } from "./src/RappiDeliveryService";
import { UberEatsDeliveryService } from "./src/UberEatsDeliveryService";

const ifoodService = new IfoodDeliveryService();
const uberEatsService = new UberEatsDeliveryService();
const rappiService = new RappiDeliveryService();
const calculateDeliveryTime = new CalculateDeliveryTime(ifoodService);

const route = {
  from: {
    latitude: -23.3787529,
    longitude: -53.2935049,
  },
  to: {
    latitude: -23.3873933,
    longitude: -53.2958336,
  },
};

const result = calculateDeliveryTime.calculate(route);
console.log(result);

const findFatestService = new FindFatestDeliveryService()
  .setProvider(rappiService)
  .setProvider(uberEatsService)
  .setProvider(ifoodService);
const fastest = findFatestService.find(route);
console.log(fastest);
