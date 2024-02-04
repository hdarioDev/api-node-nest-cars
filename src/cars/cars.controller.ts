import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return 'All Cars';
  }

  @Get(':id')
  GetCarById(@Param('id') id: string) {
    console.log('param', id);
    return `Car with id: ${id}`;
  }
}
