class Location {
  constructor(name, packageWeight) {
    this.name = name;
    this.packageWeight = packageWeight;
    this.scheduled = false;
  }

  isScheduled() {
    return this.scheduled;
  }
  setScheduled(value) {
    this.scheduled = value;
  }
}

export default Location;
