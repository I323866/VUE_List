import { Request, Response } from 'express'
import PackageService from '../services/package'

/* API Controllers */
export const getPackages = async (req:Request, res:Response) => {
  try {
    const packages = await PackageService.getPackages()
    res.json(packages)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
export const addPackage = async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const text = req.body.name
    const pkg = await PackageService.addPackage(id , text)
    res.json(pkg)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
export const updatePackage = async (req: Request, res: Response) => {
  try {
    const text = req.body.name
    const id = req.params.id
    const pkg = await PackageService.updatePackage(id ,text)
    res.json(pkg)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
export const removePackage = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await PackageService.removePackage(id)
    res.send('ok')
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

