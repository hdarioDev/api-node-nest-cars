import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Camry',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Rav4',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findByOneId(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(CreateCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...CreateCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findByOneId(id);
    const index = this.cars.indexOf(car);
    this.cars[index] = {
      ...car,
      ...updateCarDto,
    };
    return this.cars[index];
  }

  delete(id: string) {
    this.findByOneId(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
