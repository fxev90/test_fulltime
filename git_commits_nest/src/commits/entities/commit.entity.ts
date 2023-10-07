import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('commits')
export class Commit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  sha: string;

  @Column({ type: 'text', nullable: true })
  message: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  authorName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  authorEmail: string;
}
