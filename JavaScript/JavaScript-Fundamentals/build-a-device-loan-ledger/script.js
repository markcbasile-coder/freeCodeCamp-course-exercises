function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

function checkoutDevice(ledger, assetTag, borrower) {
  const jsonString = serializeLedger(ledger);
  const updatedLedger = loadLedger(jsonString);

  if (!updatedLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Asset tag ${assetTag} was not found.`,
    };
  }

  if (updatedLedger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Device ${assetTag} is already checked out.`,
    };
  }

  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked out by ${borrower.name}.`,
  };
}

function checkinDevice(ledger, assetTag) {
  const jsonString = serializeLedger(ledger);
  const updatedLedger = loadLedger(jsonString);

  if (!updatedLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Asset tag ${assetTag} was not found.`,
    };
  }

  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked in.`,
  };
}

function parseDate(dateStr) {
  const parts = dateStr.split("/");
  const month = parseInt(parts[0], 10);
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  // Return a sortable number format like YYYYMMDD
  return year * 10000 + month * 100 + day;
}

function listOverdueDevices(ledger, today) {
  const todayValue = parseDate(today);
  const overdueDevices = [];

  for (const assetTag in ledger) {
    const device = ledger[assetTag];
    if (device.status === "CheckedOut" && device.dueDate) {
      const dueDateValue = parseDate(device.dueDate);
      if (dueDateValue < todayValue) {
        overdueDevices.push(device);
      }
    }
  }

  // Sort by dueDate in ascending order using custom numeric date representation
  overdueDevices.sort((a, b) => {
    return parseDate(a.dueDate) - parseDate(b.dueDate);
  });

  return overdueDevices;
}
