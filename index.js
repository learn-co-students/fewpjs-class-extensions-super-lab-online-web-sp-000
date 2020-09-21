// Write your classes here

class Tree { 
    constructor (species) { //takes on parameter
    this.species = species; //assign it to property 
    }
static definition() { //static method returns a short definition of all trees
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

class Deciduous extends Tree {
    constructor(species, name){ //takes two parameters
      super(species)  //super in constructor to use parent class constructor to assign
      this.name = name //assign name property
    }
    static definition(){ //static method uses super to access definition from tree and add more specific definition
      return `${super.definition()} Deciduous trees shed their leaves annually.`
    }
  }
  //Deciduous.definition: 
  
  class Evergreen extends Tree { 
    constructor(species, name){ //takes two params 
      super(species) //super in constructor to use parent class to assign
      this.name = name //assign name property 
    }
  
    static definition(){ //static method uses super to access definiton from tree and add specific evergreen definition
      return `${super.definition()} Evergreens keep their leaves all year round.`
    }
}