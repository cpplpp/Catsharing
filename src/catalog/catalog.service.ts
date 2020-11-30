import { Injectable } from '@nestjs/common';
import { AddCatDto } from './dto/add-cat.dto';
// import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatalogService {
  public cats: AddCatDto[] = [];

  createCat(cat: AddCatDto): AddCatDto {
    this.cats.push(cat);
    return cat;
  }

  findAll(): AddCatDto[] {
    return this.cats;
  }

}
