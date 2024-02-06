import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.tdo';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id')
  GetCarById(@Param('id', ParseIntPipe) id: string) {
    return this.carsService.findByOneId(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Patch('/:id')
  updateCar(@Param('id') id: string, @Body() body: any) {
    return body;
  }

  @Delete('/:id')
  deleteCar(@Param('id') id: string) {
    return {
      message: `Car with id ${id} has been deleted`,
    };
  }
}
