import { Entity, PrimaryColumn, Column, ManyToMany,JoinTable } from 'typeorm'
import { Scopeitem } from './Scopeitem'
@Entity()
export class Packages {
  @PrimaryColumn()
  public id: number
  @Column()
  public name: string

  @ManyToMany(type => Scopeitem, scopeitem => scopeitem.packages)
  @JoinTable()
  public scopeitems: Scopeitem[]
}
