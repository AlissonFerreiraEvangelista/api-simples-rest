import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserController } from './controller/user.controller';
import { User } from './model/user.entity';
import { UserService } from './service/user.service';
import { UsersModule } from './user.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: 'Ta$2506f',
    database: 'user',
    entities: [User],
    synchronize: true,
    autoLoadEntities:true,
  }),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {

}
