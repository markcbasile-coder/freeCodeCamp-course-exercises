/*{
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}*/

function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (manifest.unit == "lb") {
    newManifest.weight = manifest.weight * 0.45;
    newManifest.unit = "kg";
    return newManifest;
  } else {
    return newManifest;
  }
}

function validateManifest(manifest) {
  const incorrectItems = {};

  if (manifest.containerId === undefined) {
    incorrectItems.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    incorrectItems.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    incorrectItems.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    incorrectItems.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    incorrectItems.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    incorrectItems.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    incorrectItems.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    incorrectItems.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    incorrectItems.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    incorrectItems.hazmat = "Invalid";
  }

  return incorrectItems;
}

function processManifest(manifest) {
  let validated = validateManifest(manifest);
  let normalized = normalizeUnits(manifest);

  if (Object.keys(validated).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validated);
  }
}

processManifest({
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false,
});
