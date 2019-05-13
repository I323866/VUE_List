import { Request, Response } from 'express'
import siassignmentService from '../services/siassignment'

/* API Controllers */
export const getSiassignment = async (req: Request, res: Response) => {
  try {
    const spid = req.params.id
    const siassignment = await siassignmentService.getSiassignment(spid)
    res.json(siassignment)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

export const addSiassignment = async (req: Request, res: Response) => {
  try {
    const siid = req.body.siid
    const spid = req.body.spid
    const siassignment = await siassignmentService.addSiassignment(siid, spid)
    res.json(siassignment)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

export const removeSiassignment = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const spid = req.body.spid
    const siassignment = await siassignmentService.removeSiassignment(id, spid)
    res.json(siassignment)
    // res.send('ok')
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
