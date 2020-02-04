// Write your classes here

class Tree{
  constructor(species){
    this.species = species;
  }
  
  static definition(){
    return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`
  }
}

class Deciduous{
  constructor(species, name){
    super.species = species;
    this.name = name;
  }
  
  static definition(){
    return `${Tree.definition()} Deciduous trees shed their leaves annually.`
  }
}

class Evergreen{
  constructor(species, name){
    super.species = species;
    this.name = name;
  }
  
  static definition(){
    return `${Tree.definition()} Evergreens keep their leaves all year round.`
  }
}