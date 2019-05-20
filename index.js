// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return this.diameter * Math.PI
  }
  get area(){
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(circleDiameter){
    this.radius = circleDiameter / 2
  }
  set circumference(circleCircumference){
    this.radius = (circleCircumference / Math.PI) / 2
  }
  set area(circleArea){
    this.radius = Math.sqrt(circleArea / Math.PI)
  }

}
