const random = {
    setRandomNumber(min, max) {
       this.chanceRandom = Math.floor(Math.random() * (max-min + 1)) + min;
    }, 
    getRandomNumber() {
        return this.chanceRandom;
    }
};

class Item {
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#setName(name);
    }
    #setName(name) {        
        if(name.length >= 3 && name.length <= 50)
            return this.#name = name;
        throw new Error("Name must be a string between 3 and 50 letters!");
        
    }
    getItemInfo() {
        return `Item, ${this.#id} - ${this.#name}`;
    }
}

class Weapon extends Item {
    #attack;
    #damageType;
    #twoHanded;
    #chance;
    constructor(id, name, attack, damageType, twoHanded) {
        super(id, name);
        this.#setAttack(attack);
        this.#setDamageType(damageType);
        this.#setTwoHanded(twoHanded);

        Object.assign(this, random).setRandomNumber(5,50);
        this.#chance = this.getRandomNumber();
    }
    #setAttack(attack) {
        if (attack >= 1 && attack <= 30000)
            return this.#attack = attack;
        throw new Error("Attack must be a number between 1 and 30000!");
    }
    #setDamageType(damageType) {
        if (damageType === "physical" || 
            damageType === "poison" ||
            damageType === "fire" || 
            damageType === "water" ||
            damageType === "air" ||
            damageType === "earth")
            return this.#damageType = damageType;
        throw new Error("damageType must be one of the following strings: physical, poison, fire, water, air, earth");
    }
    #setTwoHanded(twoHanded) {
        if (typeof twoHanded === "boolean") 
            return this.#twoHanded = twoHanded;
        throw new Error("twoHanded must be a boolean");
    }
    getTwoHanded(){
        return this.#twoHanded;
    }
    getChance() {
        return this.#chance;
    }
    getDamageType(){
        return this.#damageType;
    }
    getItemInfo() {
        return ` ${super.getItemInfo()} has ${this.#attack} of ${this.#damageType} damage`;
    }
}

class Sword extends Weapon {
    #cripple;
    #bleed;
    constructor(id, name, attack, damageType, twoHanded) {
        super(id, name, attack, damageType, twoHanded);
        this.#cripple = this.getTwoHanded();
        this.#bleed = this.getTwoHanded();
    }
    getItemInfo() {
        let result = `${super.getItemInfo()} has ${super.getChance()}% to `;
        if(this.#cripple) result += "cripple, ";
        if(this.#bleed) result += "bleed";
        return result;
    }
}

class Bow extends Weapon {
    #pierce;
    #critical;
    constructor(id, name, attack, damageType, twoHanded, arrowType){
        super(id, name, attack, damageType, twoHanded);
        this.#setBow();
        this.#setArrowType(arrowType);
        this.#setPierce();
        this.#setCritical();
    }
    #setBow(){
        if(!this.getTwoHanded())
            throw new Error("twoHanded must be true!"); 
    }
    #setArrowType(arrowType){
        if(arrowType === "normal" || arrowType === "special") 
            return this.arrowType = arrowType;
        throw new Error("arrowType must be normal or special!");
    }
    #setPierce() {
        if(this.arrowType === "normal") {
            return this.#pierce = true;
        }
        return this.#pierce = false;
    }
    #setCritical() {
        if(this.arrowType === "special") {
            return this.#critical = true;
        }
        return this.#critical = false;
    } 
    getItemInfo() {
        let result = `${super.getItemInfo()} and has ${super.getChance()}% to apply `;
        if(this.#pierce) result += "pierce";
        if(this.#critical) result += "critical";
        return result;
    }
}

class Staff extends Weapon {
    #burn;
    #poison;
    #cold;
    #electrify;
    #tremor;
    constructor(id, name, attack, damageType, twoHanded){
        super(id, name, attack, damageType, twoHanded);
        this.#setStaff();
    }
    #setStaff() {
        if(!super.getTwoHanded() || super.getDamageType() === "physical")
            throw new Error("twoHanded must be true and damageType mustn't be physical");
        
        this.#burn = (super.getDamageType() === "fire") ? true : false;
        this.#poison = (super.getDamageType() === "poison") ? true : false;
        this.#cold = (super.getDamageType() === "water") ? true : false;
        this.#electrify = (super.getDamageType() === "air") ? true : false; 
        this.#tremor = (super.getDamageType() === "earth") ? true : false;
    }

    getItemInfo() {
        let result = `${super.getItemInfo()} and has ${super.getChance()}% to apply `;
        if(this.#burn) result += "burn";
        if(this.#poison) result += "poison";
        if(this.#cold) result += "cold";
        if(this.#electrify) result += "electrify";
        if(this.#tremor) result += "tremor";
        return result;
    }
}

class Armor extends Item {    
    #defense;
    #resistance;
    #chance;
    constructor(id, name, defense, resistance) {
        super(id, name);
        this.#setDefense(defense);
        this.#setResistance(resistance);

        Object.assign(this, random).setRandomNumber(10,100);
        this.#chance = this.getRandomNumber();        
    }
    #setDefense(defense) {
        if(defense >= 1 && defense <= 50000) 
            return this.#defense = defense;
        throw new Error("defense must be a number between 1 and 50000");
    }
    #setResistance(resistance) {
        if(resistance === "physical" || 
            resistance === "poison" || 
            resistance === "fire" || 
            resistance === "water" || 
            resistance === "air" || 
            resistance === "earth")            
           return  this.#resistance = resistance;
        throw new Error("resistance must be one of the following strings: physical, poison, fire, water, air, earth!");
    }
    getItemInfo() {        
        return `${super.getItemInfo()} has ${this.#defense} and ${this.#chance}% ${this.#resistance} resistance to the string`;
    }
}

try{
     const armorObject = new Armor(2, "Ivan Ivanov", 3, "air");
     console.log(armorObject.getItemInfo());
}catch (e) {
    console.error(e);
}