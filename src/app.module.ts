import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatalogModule],
  // imports: [CatalogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
