import { Controller, Get, Post, Delete, Put, Patch, Body, Param, Query } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CatalogService } from './catalog.service';
import { AddCatDto } from './dto/add-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Get('/')
  findAll(@Query() query): Promise<AddCatDto[]> {
    if(query.offset && query.limit){
      return this.catalogService.displayPage(query.offset, query.limit);
    } else {
      return this.catalogService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<AddCatDto> {
    return this.catalogService.findOne(id);
  }

  @Post()
  createCat(@Body() addCatDto: AddCatDto): Promise<AddCatDto> {
    return this.catalogService.createCat(addCatDto);
  }

  @Delete(':id')
  deleteCat(@Param('id') id): string {
    this.catalogService.deleteCat(id);
    return `Cat number ${id} is removed`;
  }

  @Put(':id')
  updateCat(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): string {
    this.catalogService.updateCat(id, updateCatDto);
    return `Cat number ${id} has been updated`
  }

  @Patch('/:id/rent')
  rentCat(@Param('id') id): string{
    this.catalogService.updateCat(id, {status: 'busy'});
    return `Cat number ${id} rented successfully`
  }

  @Patch('/:id/free')
  freeCat(@Param('id') id): string{
    this.catalogService.updateCat(id, {status: 'free'});
    return `Cat number ${id} is now free`
  }

  // /catalog/1/unrent
  // /catalog/?25
  // //patch
}















