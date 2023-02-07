class Ninja {
    constructor(name, health, speed, strength){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3    
    }
    sayName(){
        console.log(`name: ${this.name}`)
        return this
    }
    showStats(){
        console.log(`Name: ${this.name} \n Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`)
        return this
    }
    drinkSake(){
        this.health +=10
        return this
    }
}

const ryan = new Ninja('Ryan',100)

ryan.sayName().showStats().drinkSake().showStats()

module.exports = Ninja