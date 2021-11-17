import Drone from "./Drone";
import Location from "./Location";

class Company {
  constructor() {
    this.drones = [];
    this.locations = [];
    this.trips = [];
  }

  addDrone(name, maxWeight) {
    if (name === null || name === undefined || name === "") {
      throw new Error("The drone name is not valid");
    }
    if (maxWeight <= 0) {
      throw new Error("The drone capacity is not valid");
    }
    if (this.drones.length === 100) {
      throw new Error("The maximum number of drones has been reached");
    }
    this.drones.push(new Drone(name, maxWeight));
    this.drones.sort((a, b) => a.maxWeight < b.maxWeight);
  }

  addLocation(name, packageWeight) {
    if (name === null || name === undefined || name === "") {
      throw new Error("The location name is not valid");
    }
    if (packageWeight < 0) {
      throw new Error("The package weight is not valid");
    }
    this.locations.push(new Location(name, packageWeight));
  }

  calculateTrips() {
    this.trips = [];
    for (let drone of this.drones) {
      drone.addPackage();
    }
  }
}

export default Company;
