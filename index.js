// Write your classes here

//- A `Tree` instance should take in one parameter when created, `species`,
  // and assign this to a property named `species`.
  class Tree {
    constructor(species) {
      this.species = species;
    }
    // - A `Tree` should have a static method, `definition()`, that returns a short
  // definition of all trees.
    static definition() {
      return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`;
    }
  }

  // - A `Deciduous` instance takes two parameters, `species` and `name`. Use
  //   `super()` in the constructor to use the parent class constructor to assign
  //   `species`. After `super()`, assign the `name` parameter to the a `name`
  //   property in the `Deciduous` constructor
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  //   - Create a static method, `definition()`, that uses `super` to access
  // `definition()` from `Tree` and add the following to the provide a specific
  // definition for `Deciduous`:
    static definition() {
      return super.definition()+` Deciduous trees shed their leaves annually.`
    }
  }

  class Evergreen extends Tree {
    constructor(species,name) {
      super(species);
      this.name = name;
    }
    static definition() {
      return super.definition()+ ` Evergreens keep their leaves all year round.`
    }
  }
