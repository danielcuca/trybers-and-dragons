import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static archetypeCreatedInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.archetypeCreatedInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.archetypeCreatedInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}