import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commit } from './entities/commit.entity';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [TypeOrmModule.forFeature([Commit]), HttpModule, ConfigModule],
  providers: [CommitsService],
})
export class CommitsModule {}
