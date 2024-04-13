const car =   {
    constructor(make, model, year, colors, hybrid){
      car.make = make;
      this.model = model;
      this.year = year;
      this.colors = colors;
      this.hybrid = hybrid;
      this.engineOn = false;
      this.speed = 0;
    }
}
startEngine() {
    this.engineOn = true;
    console.log("Engine started");
  }