import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static archetypeCreatedInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.archetypeCreatedInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.archetypeCreatedInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}