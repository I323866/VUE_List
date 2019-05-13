import { Request, Response } from 'express'
import scopeitemService from '../services/scopeitem'

/* API Controllers */
export const getscopeitems = async (req:Request, res:Response) => {
  try {
    const scopeitems = await scopeitemService.getScopeItems()
    res.json(scopeitems)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
export const addscopeitem = async (req: Request, res: Response) => {
  try {
    const text = req.body.text
    const pkg = await scopeitemService.addScopeItem(text)
    res.json(pkg)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

