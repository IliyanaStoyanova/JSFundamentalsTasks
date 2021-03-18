class Item {
    constructor(id, name) {
        this.id = id;
        this.setName(name);
    }
    setName(name) {        
        if(name.length >= 3 && name.length <= 50)
            return this.name = name;
        throw new Error("Name must be a string between 3 and 50 letters!");
        
    }
    getItemInfo() {
        return `Item, ${this.id} - ${this.name}`;
    }
}

// const itemObject = new Item(1, "Iliyana Stoyanova");

class Weapon extends Item {
    constructor(id, name, attack, damageType, twoHanded) {
        super(id, name);
        this.setAttack(attack);
        this.setDamageType(damageType);
        this.setTwoHanded(twoHanded);
        this.chance = this.randomNumber(5, 50);
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }
    setAttack(attack) {
        if (attack >= 1 && attack <= 30000)
            return this.attack = attack;
        throw new Error("Attack must be a number between 1 and 30000!");
    }
    setDamageType(damageType) {
        if (damageType === "physical" || 
            damageType === "poison" ||
            damageType === "fire" || 
            damageType === "water" ||
            damageType === "air" ||
            damageType === "earth")
            return this.damageType = damageType;
        throw new Error("damageType must be one of the following strings: physical, poison, fire, water, air, earth");
    }
    setTwoHanded(twoHanded) {
        if (typeof twoHanded === "boolean") 
            return this.twoHanded = twoHanded;
        throw new Error("twoHanded must be a boolean");
    }
    getItemInfo() {
        return ` ${super.getItemInfo()} has ${this.attack} of ${this.damageType} damage`;
    }
}

class Sword extends Weapon {
    constructor(id, name, attack, damageType, twoHanded) {
        super(id, name, attack, damageType, twoHanded);
        this.cripple = this.twoHanded;
        this.bleed = this.twoHanded;
    }
    getItemInfo() {
        let crippleStr = "";
        let bleedStr = "";
        if(this.cripple) crippleStr = "cripple";
        if(this.bleed) bleedStr = "bleed";
        return `${super.getItemInfo()} has ${this.chance}% to ${crippleStr} ${bleedStr}`;
    }
}

try{
    const SwordObject = new Sword(2, "Ivan Ivanov", 3, "water", true);
    console.log(SwordObject.getItemInfo());
}catch (e) {
    console.error(e);
}