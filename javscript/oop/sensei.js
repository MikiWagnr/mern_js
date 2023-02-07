const Ninja = require('./ninja.js')

class Sensei extends Ninja{
    constructor(name,wisdom){
        super(name,200)
        this.wisdom = 10
        this.speed = 10
        this.strength = 10
    }
    speakWisdom(){
        super.drinkSake()
        console.log(`As if you can outrun me ${this.health}`)
        return this
    }
}

const ryan = new Sensei('Ryan')

ryan.speakWisdom().showStats()