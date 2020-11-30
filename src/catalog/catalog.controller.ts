import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { AddCatDto } from './dto/add-cat.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Get()
  findAll() {
    return this.catalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This is cat number ${id}`;
  }

  @Post()
  createCat(@Body() addCatDto: AddCatDto): AddCatDto {
    return this.catalogService.createCat(addCatDto);
  }

  @Delete(':id')
  deleteCat(@Param('id') id): string {
    return `Cat number ${id} is removed`;
  }

  @Put(':id')
  updateCat(@Body() addCatDto: AddCatDto, @Param('id') id): string {
    return `Cat number ${id} is updated. Current name: ${addCatDto.name}, current description: ${addCatDto.description}, current price: ${addCatDto.price}`;
  }
  // /catalog/1/unrent
  // /catalog/?25
  // //patch
}
