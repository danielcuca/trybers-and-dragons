import Race from './Race';

export default class Halfling extends Race {
  static raceCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling.raceCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.raceCreatedInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}