import { getManager } from 'typeorm'
import { Packages } from '../models/Package'
import { Scopeitem } from '../models/Scopeitem'
import _ from 'lodash'

const getSiassignment = async (spid: number) => {
  const PackagesRepo = getManager().getRepository(Packages)
  const Pkg = await PackagesRepo.findOne(spid, { relations: ['scopeitems'] })
  return Pkg.scopeitems
}

const addSiassignment = async (siid: number, spid: number) => {
  const PackagesRepo = getManager().getRepository(Packages)
  const Pkg = await PackagesRepo.findOne(spid, { relations: ['scopeitems'] })
  const silist = Pkg.scopeitems
  const leg = silist.length
  const siRepo = getManager().getRepository(Scopeitem)
  const si = await siRepo.findOne(siid)
  silist[leg] = si
  Pkg.scopeitems = silist
  PackagesRepo.save(Pkg)
  return si
}

const removeSiassignment = async (id: number, spid: number) => {
  const PackagesRepo = getManager().getRepository(Packages)
  const Pkg = await PackagesRepo.findOne(spid, { relations: ['scopeitems'] })
  const silist = Pkg.scopeitems
  const siRepo = getManager().getRepository(Scopeitem)
  const si = await siRepo.findOne(id)
  _.remove(silist, si)
  Pkg.scopeitems = silist
  PackagesRepo.save(Pkg)
  return silist
}

export default {
  getSiassignment,
  addSiassignment,
  removeSiassignment
}
