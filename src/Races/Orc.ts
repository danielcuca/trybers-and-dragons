import Race from './Race';

export default class Orc extends Race {
  static raceCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc.raceCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.raceCreatedInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}