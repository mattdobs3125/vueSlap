export default class Target {
    constructor(data){
        this.health = data.health
        this.name = data.name
        this.attacks = data.attacks
        this.items = data.items

    }
attack(type){
    if(this.attacks[type]){
        this.health -= this.attack[type]
    }
}

}