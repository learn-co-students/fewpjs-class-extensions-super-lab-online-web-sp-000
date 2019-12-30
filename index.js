class Tree {
    constructor(species) {
        this.species = species;
    }

    static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

class Deciduous extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }

    static definition() {
        return super.definition() + ` Deciduous trees shed their leaves annually.`
    }
}

// - An `Evergreen` instance takes two parameters, `species` and `name`. Use
//   `super()` in the constructor to use the parent class constructor to assign
//   `species`, then assign `name` to a property in the `Evergreen`
//   constructor
// - Create a static method, `definition()`, that uses `super` to access
//   `definition()` from `Tree` and add the following to the provide a specific
//   definition for `Evergreen`:
 
// > Evergreens keep their leaves all year round.

class Evergreen extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }

    static definition() {
        return super.definition() + ` Evergreens keep their leaves all year round.`
    }
}