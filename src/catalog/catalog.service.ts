import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddCatDto } from './dto/add-cat.dto';
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
}
