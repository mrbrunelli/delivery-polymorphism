import { expect, test } from "vitest";
import { IfoodDeliveryService } from "../src/IfoodDeliveryService";
import { RappiDeliveryService } from "../src/RappiDeliveryService";
import { Route } from "../src/Route";
import { UberEatsDeliveryService } from "../src/UberEatsDeliveryService";
import { FindFatestDeliveryService } from "../src/FindFatestDeliveryService";

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

test("should be able to find a fatest delivery service", () => {
  const finder = new FindFatestDeliveryService()
    .setProvider(new UberEatsDeliveryService())
    .setProvider(new IfoodDeliveryService())
    .setProvider(new RappiDeliveryService());

  expect(finder.find(route)).toEqual({
    service: "IfoodDeliveryService",
    value: 15.2,
  });
});

test("should be able to find a fatest delivery service if only one was provided", () => {
  const finder = new FindFatestDeliveryService().setProvider(
    new UberEatsDeliveryService()
  );

  expect(finder.find(route)).toEqual({
    service: "UberEatsDeliveryService",
    value: 19.4,
  });
});

test("should throws if no delivery service is provided", () => {
  try {
    const finder = new FindFatestDeliveryService();
    finder.find(route);
  } catch (error) {
    expect(error.message).toBe("No delivery service set");
  }
});
