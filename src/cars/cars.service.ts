import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2010,
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'Camry',
      year: 2015,
    },
    {
      id: 3,
      brand: 'Toyota',
      model: 'Rav4',
      year: 2018,
    },
  ];

  findAll() {
    return this.cars;
  }

  findByOneId(id: number) {
    return this.cars.find((car) => car.id === id);
  }
}
