import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { CatalogEntity } from './entity/catalog.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CatalogEntity])],
  controllers: [CatalogController],
  providers: [CatalogService]
})
export class CatalogModule {}
