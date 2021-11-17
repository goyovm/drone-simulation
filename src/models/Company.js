import Drone from "./Drone";
import Location from "./Location";

class Company {
  constructor() {
    this.drones = [];
    this.locations = [];
    this.trips = [];
    this.observations = "";
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

  allPackagesDelivered() {
    for (let location of this.locations) {
      if (!location.scheduled) return false;
    }
    return true;
  }

  calculateTrips() {
    this.trips = [];
    var tripNumber = 1;
    while (!this.allPackagesDelivered()) {
      let added = false;
      for (let drone of this.drones) {
        drone.releaseAndRefuel();
        for (let loc of this.locations) {
          if (loc.scheduled === false) {
            if (drone.addPackage(loc)) {
              loc.scheduled = true;
              added = true;
            }
          }
        }
        if (drone.trips.length > 0) {
          this.trips.push({ tripNumber, drone, trips: drone.trips });
        }
      }
      if (added === false) {
        let locs = "";
        for (let loc of this.locations) {
          if (loc.scheduled === false) {
            locs += loc.name + ", ";
          }
        }
        if (locs.length > 0)
          this.observations = `Some packages can't be delivered. (${locs.substring(
            0,
            locs.length - 2
          )})`;
        else this.observations = "";
        break;
      }
      if (tripNumber === 10) return;
      tripNumber = tripNumber + 1;
    }
  }
}

export default Company;
