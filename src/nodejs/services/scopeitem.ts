import { getManager } from 'typeorm'
import { Scopeitem } from '../models/Scopeitem'

const getScopeItems = async () => {
  const ScopeItemRepo = getManager().getRepository(Scopeitem)
  return ScopeItemRepo.find()
}
const addScopeItem = async (text: string) => {
  const ScopeItemRepo = getManager().getRepository(Scopeitem)
  const ScopeItem: Scopeitem = new Scopeitem()
  ScopeItem.name = text
  return ScopeItemRepo.save(ScopeItem)
}

export default {
  getScopeItems,
  addScopeItem
}