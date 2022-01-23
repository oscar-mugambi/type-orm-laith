import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('client')
export class Client extends BaseEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ unique: true, length: 10 })
  card_number: string;

  @Column({
    type: 'numeric',
  })
  balance: number;

  @Column({
    default: true,
    name: 'active',
  })
  is_active: Boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: 'simple-array',
    default: [],
  })
  family_members: string;
}
