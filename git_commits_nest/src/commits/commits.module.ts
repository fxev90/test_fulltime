import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commit } from './entities/commit.entity';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [TypeOrmModule.forFeature([Commit]), HttpModule],
  providers: [CommitsService],
})
export class CommitsModule {}
