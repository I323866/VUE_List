import { Entity, PrimaryGeneratedColumn, Column , ManyToMany, JoinTable} from "typeorm";
import { Packages } from './Package'
@Entity()
export class Scopeitem {
  @PrimaryGeneratedColumn()
  public id: number;
  
  @Column()
  public name: string;

  @ManyToMany(type => Packages, pkg => pkg.scopeitems)
  public packages: Packages[];
}
