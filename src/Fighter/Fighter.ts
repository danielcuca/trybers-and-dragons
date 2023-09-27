import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  energy?: Energy;
  defense: number;

  special?(enemy: SimpleFighter): void;
  levelUp(): void;
}