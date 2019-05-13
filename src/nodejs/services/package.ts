import { getManager } from 'typeorm'
import { Packages } from '../models/Package'

const getPackages = async () => {
  const PackageRepo = getManager().getRepository(Packages)
  return PackageRepo.find()
}
const addPackage = async (id: number ,text: string) => {
  const PackageRepo = getManager().getRepository(Packages)
  const Package: Packages = new Packages()
  Package.name = text
  Package.id = id
  return PackageRepo.save(Package)
}
const updatePackage = async (id: number ,text: string) => {
  const PackageRepo = getManager().getRepository(Packages)
  const Package = await PackageRepo.findOne(id)
  Package.name = text
  return PackageRepo.update( id,Package)
}
const removePackage = async (id: number) => {
  const PackageRepo = getManager().getRepository(Packages)
  const Package = await PackageRepo.findOne(id)
  return PackageRepo.remove(Package)
}

export default {
  getPackages,
  addPackage,
  updatePackage,
  removePackage
}