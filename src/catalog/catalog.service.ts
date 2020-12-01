import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { AddCatDto } from './dto/add-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatalogEntity } from './entity/catalog.entity';

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(CatalogEntity)
    private catalogRepository: Repository<CatalogEntity>
  ) {}

  createCat(cat: AddCatDto): Promise<AddCatDto> {
    return this.catalogRepository.save(cat);
  }

  findAll(): Promise<AddCatDto[]> {
    return this.catalogRepository.find();
  }

  findOne(id: number): Promise<AddCatDto> {
    return this.catalogRepository.findOne(id);
  }

  displayPage(offset: number, limit: number): Promise<AddCatDto[]> {
    return this.catalogRepository.find({
      skip: offset,
      take: limit
    });
  }

  async deleteCat(id: number): Promise<void> {
    await this.catalogRepository.delete(id);
  }

  async updateCat(id: number, cat: UpdateCatDto): Promise<UpdateResult> {
    return await this.catalogRepository.update(id, cat)
  }

  // test(id: number): Promise<AddCatDto> {
  //   return this.catalogRepository.findOne(id);
  // }

}










