const random = {
    setRandomNumber(min, max) {
       this.chanceRandom = Math.floor(Math.random() * (max-min + 1)) + min;
    }, 
    getRandomNumber() {
        return this.chanceRandom;
    }
};
const validate = {
    checkRange (min, max, value) {
        if(value >= min && value <= max)
            return this.validate = true;
        return this.validate = false;
    },
    getValidate() {
        return this.validate;
    }
}

class Item {
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#setName(name);
    }
    #setName(name) {        
        Object.assign(this, validate).checkRange(3, 50, name.length);
        if (this.getValidate())  
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
        Object.assign(this, validate).checkRange(1, 30000, attack);
        if (this.getValidate())
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
        Object.assign(this, validate).checkRange(1, 50000, defense);
        if (this.getValidate())  
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
        return `${super.getItemInfo()} has ${this.#defense} and ${this.#chance}% ${this.#resistance} resistance`;
    }
}

class Helm extends Armor {
    #attractiveness; 
    constructor(id, name, defense, resistance, attractiveness) {
        super(id, name, defense, resistance);
        this.#setAttractiveness(attractiveness);
    }
    #setAttractiveness(attractiveness) {
        Object.assign(this, validate).checkRange(-5, 5, attractiveness);
        if (this.getValidate())  
            return this.#attractiveness = attractiveness;
        throw new Error("attractiveness must be a number between -5 and 5");
    }
    getItemInfo() {
        return `${super.getItemInfo()} and adds ${this.#attractiveness} attractiveness`;
    }
}

class Boots extends Armor {
    #speed;
    constructor(id, name, defense, resistance, speed) {
        super(id, name, defense, resistance);
        this.#setSpeed(speed);
    }
    #setSpeed(speed) {
        Object.assign(this, validate).checkRange(1, 10, speed);
        if (this.getValidate())
            return this.#speed = speed;
        throw new Error("speed must be a number between 1 and 10");
    }
    getItemInfo() {
        return `${super.getItemInfo()} and adds ${this.#speed} speed`;
    }
}

class Gloves extends Armor {
    #crafting;
    constructor(id, name, defense, resistance, crafting) {
        super(id, name, defense, resistance);
        this.#setCrafting(crafting);
    }
    #setCrafting(crafting) {
        Object.assign(this, validate).checkRange(1, 10, crafting);
        if (this.getValidate())
            return this.#crafting = crafting;
        throw new Error("crafting must be a number between 1 and 10");
    }
    getItemInfo() {
        return `${super.getItemInfo()} and adds ${this.#crafting} crafting`;
    }
}

class Robe extends Armor {
    #reputation;
    constructor(id, name, defense, resistance, reputation) {
        super(id, name, defense, resistance);
        this.#setReputation(reputation);
    }
    #setReputation(reputation) {
        Object.assign(this, validate).checkRange(1, 10, reputation);
        if (this.getValidate())
            return this.#reputation = reputation;
        throw new Error("reputation must be a number between 1 and 10");
    }
    getItemInfo() {
        return `${super.getItemInfo()} and adds ${this.#reputation} reputation`;
    }
}

class Consumable extends Item {
    #heals;
    #type;
    #effect;  
    constructor(id, name, heals, type) {
        super(id, name);
        this.#setHeals(heals);
        this.#setType(type);
        this.#setEffect();
    }
    #setHeals(heals){
        if (typeof heals === "boolean") 
            return this.#heals = heals;
        throw new Error("heals must be a boolean");
    }
    #setType(type){
        if(type === "minor" ||
            type === "medium" ||
            type === "big")
            return this.#type = type;
        throw new Error("type must be one of string - minor, medium, big");
    }
    #setEffect(){
        if(this.#type === "minor") {
            Object.assign(this, random).setRandomNumber(1,10);
            return this.#effect = this.getRandomNumber();
        }
        if(this.#type === "medium") {
            Object.assign(this, random).setRandomNumber(11,20);
            return this.#effect = this.getRandomNumber();
        }
        if(this.#type === "big") {
            Object.assign(this, random).setRandomNumber(21,30);
            return this.#effect = this.getRandomNumber();
        }        
    }
    getItemInfo() {
        if(this.#heals) 
            return `${super.getItemInfo()} it is ${this.#type} potion and heals for ${this.#effect}`;
        return `${super.getItemInfo()} it is ${this.#type} potion and damages for ${this.#effect}`;
    }
}

try{
     const consumableObject = new Consumable(2, "Ivan Ivanov", true, "medium");
     console.log(consumableObject.getItemInfo());
}catch (e) {
    console.error(e);
}