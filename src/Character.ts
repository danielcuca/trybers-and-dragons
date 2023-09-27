import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _energy: Energy;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _maxLifePoints: number;

  constructor(
    name: string,
    race?: Race,
    archetype?: Archetype,
  ) {
    this._name = name || 'Name not defined';
    this._dexterity = getRandomInt(1, 10);
    this._race = race || new Elf(this._name, this._dexterity);
    this._archetype = archetype || new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { 
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity; 
  }
  
  get lifePoints(): number {
    return this._lifePoints;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  receiveDamage(attackPoints: number): number {
    const hitDamage = attackPoints - this._defense;

    if (hitDamage > 0) {
      this._lifePoints -= hitDamage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: SimpleFighter): void {
    const dices = getRandomInt(2, 6);
    const hitDamage = getRandomInt(1, 10) * dices + this._strength;

    enemy.receiveDamage(hitDamage);
  }
}