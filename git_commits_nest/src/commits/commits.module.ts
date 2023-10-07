import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commit } from './entities/commit.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Commit])],
  providers: [CommitsService],
})
export class CommitsModule {}
