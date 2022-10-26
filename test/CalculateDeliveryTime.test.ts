import { expect, test } from "vitest";
import { CalculateDeliveryTime } from "../src/CalculateDeliveryTime";
import { IfoodDeliveryService } from "../src/IfoodDeliveryService";
import { RappiDeliveryService } from "../src/RappiDeliveryService";
import { Route } from "../src/Route";
import { UberEatsDeliveryService } from "../src/UberEatsDeliveryService";

const route: Route = {
  from: {
    latitude: -23.3787529,
    longitude: -53.2935049,
  },
  to: {
    latitude: -23.3873933,
    longitude: -53.2958336,
  },
};

test("should be able to calculate a Ifood delivery service", () => {
  const calculateDeliveryTime = new CalculateDeliveryTime(
    new IfoodDeliveryService()
  );
  const result = calculateDeliveryTime.calculate(route);
  expect(result).toBe(15.2);
});

test("should be able to calculate a UberEats delivery service", () => {
  const calculateDeliveryTime = new CalculateDeliveryTime(
    new UberEatsDeliveryService()
  );
  const result = calculateDeliveryTime.calculate(route);
  expect(result).toBe(19.4);
});

test("should be able to calculate a Rappi delivery service", () => {
  const calculateDeliveryTime = new CalculateDeliveryTime(
    new RappiDeliveryService()
  );
  const result = calculateDeliveryTime.calculate(route);
  expect(result).toBe(21);
});
