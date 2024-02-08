import { v4 as uuid } from 'uuid';

import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Camry',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Prius',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: '4Runner',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Tacoma',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Tundra',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Highlander',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Sienna',
  },
];
