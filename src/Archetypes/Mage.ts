import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static archetypeCreatedInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.archetypeCreatedInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.archetypeCreatedInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}