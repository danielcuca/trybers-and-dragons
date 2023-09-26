import Race from './Race';

export default class Elf extends Race {
  static raceCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf.raceCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.raceCreatedInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}