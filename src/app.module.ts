import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndustriaController } from './industria.controller';
import { Industria } from './industria.model';
import { IndustriaServices } from './industria.services';

@Module({
  imports: [
    
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Tristanaismymain11769',
    database: 'banco_de_dados_ecognitive',
    autoLoadModels: true,
    synchronize: true,
  }),
  SequelizeModule.forFeature([ Industria ])
],
  controllers: [AppController, IndustriaController],
  providers: [AppService, IndustriaServices],
})
export class AppModule {}
