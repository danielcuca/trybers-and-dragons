import Race from './Race';

export default class Dwarf extends Race {
  static raceCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf.raceCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.raceCreatedInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}