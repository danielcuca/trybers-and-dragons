import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static archetypeCreatedInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.archetypeCreatedInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.archetypeCreatedInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}