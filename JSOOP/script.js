class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.validateItem();
    }
    validateItem() {
        if(this.name.length < 3 || this.name.length > 50)
            throw new Error("Name must be a string between 3 and 50 letters!");
    }
    getItemInfo() {
        return `Item, ${this.id} - ${this.name}`;
    }
}

// const itemObject = new Item(1, "Iliyana Stoyanova");

class Weapon extends Item {
    constructor(id, name, attack, damageType, twoHanded, getItemInfo) {
        super(id, name, getItemInfo);
        this.attack = attack;
        this.damageType = damageType;
        this.twoHanded = twoHanded;
        this.chance = this.randomNumber(5, 50);
        this.validateWeapon();
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }
    validateWeapon() {
        if (this.attack < 1 || this.attack > 30000)
            throw new Error("Attack must be a number between 1 and 30000!");
        if (this.damageType !== "physical" && 
            this.damageType !== "poison" && 
            this.damageType !== "fire" && 
            this.damageType !== "water" &&
            this.damageType !== "air" &&
            this.damageType !== "earth")
            throw new Error("damageType must be one of the following strings: physical, poison, fire, water, air, earth");
        if (typeof this.twoHanded !== "boolean")
            throw new Error("twoHanded must be a boolean");
    }
    getItemInfo() {
        return ` ${super.getItemInfo()} has ${this.attack} of ${this.damageType} damage`;
    }
}

const weaponObject = new Weapon(2, "Ivan Ivanov", 3, "water", true);
console.log(weaponObject);