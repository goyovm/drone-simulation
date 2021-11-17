class Drone {
  constructor(name, maxWeight) {
    this.name = name;
    this.maxWeight = maxWeight;
    this.currentWeight = 0;
    this.trips = [];
  }

  releaseAndRefuel() {
    this.currentWeight = 0;
    this.trips = [];
  }

  addPackage(location) {
    if (
      location.scheduled === false &&
      location.packageWeight <= this.maxWeight - this.currentWeight
    ) {
      this.trips.push(location);
      this.currentWeight += Number(location.packageWeight);
      return true;
    } else {
      return false;
    }
  }
}

export default Drone;
