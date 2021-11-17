class Drone {
  constructor(name, maxWeight) {
    this.name = name;
    this.maxWeight = maxWeight;
    this.currentWeight = 0;
    this.trips = [];
  }

  addPackage(location) {
    if (
      !location.isScheduled() &&
      location.packageWeight <= this.currentWeight
    ) {
      this.trips.push(location);
      location.setScheduled(true);
      this.currentWeight += location.packageWeight;
      this.trips.push(location);
      return true;
    } else {
      return false;
    }
  }
}

export default Drone;
