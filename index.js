// Add your Circle class here\

console.log("Connected")

class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }   
    get circumference(){
        return Math.PI * this.diameter
    }
    get area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
   set diameter(diameter){
       this.diameter = diameter
   }
   set circumference(circumference){
       this.circumference = circumference
   }
   set area(area){
       this.area = area
   }

}