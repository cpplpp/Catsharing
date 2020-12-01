import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class CatalogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string

  @Column()
  description: string

  @Column({ nullable: false })
  breed: string

  @Column({ nullable: false })
  age: number

  @Column()
  image: string

  @Column()
  price: number

  @Column({ nullable: false })
  status: string

}
