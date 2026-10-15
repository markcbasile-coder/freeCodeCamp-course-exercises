const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  const parsedShipments = [];
  const seenSkus = {};

  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");

    const sku = parts[0] ? parts[0].trim() : "";
    const name = parts[1] ? parts[1].trim() : "";
    const qtyStr = parts[2] ? parts[2].trim() : "";
    const expires = parts[3] ? parts[3].trim() : "";
    const zone = parts[4] ? parts[4].trim() : "";

    const finalSku = sku || "Unknown";

    if (seenSkus[finalSku]) {
      continue;
    }

    seenSkus[finalSku] = true;

    parsedShipments.push({
      sku: finalSku,
      name: name || "Unknown",
      qty: qtyStr !== "" ? parseInt(qtyStr) : "Unknown",
      expires: expires || "Unknown",
      zone: zone || "general",
    });
  }

  return parsedShipments;
}

function planRestock(pantry, shipment) {
  let plan = [];
  let type = "";
  let item = "";

  for (let i = 0; i < shipment.length; i++) {
    let skuExists = false;
    if (shipment[i].qty <= 0) {
      type = "discard";
      plan.push({ type: type, item: shipment[i] });
      continue;
    }

    for (let j = 0; j < pantry.length; j++) {
      if (pantry[j].sku == shipment[i].sku) {
        type = "restock";
        item = shipment[i];
        skuExists = true;
        break;
      }
    }
    if (skuExists == true) {
      plan.push({ type: type, item: item });
    } else {
      type = "donate";
      item = shipment[i];
      plan.push({ type: type, item: item });
    }
  }
  return plan;
}

function groupByZone(actions) {
  const group = {};
  for (let i = 0; i < actions.length; i++) {
    const item = actions[i];
    const zoneKey = item.item.zone;
    if (!group[zoneKey]) {
      group[zoneKey] = [];
    }
    group[zoneKey].push(item);
  }
  return group;
}

function clonePantry(pantry) {
  let newPantry = [];
  for (let i = 0; i < pantry.length; i++) {
    newPantry.push({ ...pantry[i] });
  }
  return newPantry;
}

let parsedData = parseShipment(rawData);
let actions = planRestock(pantry, parsedData);
console.log(groupByZone(actions));
