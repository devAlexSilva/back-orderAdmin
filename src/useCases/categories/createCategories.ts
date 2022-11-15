import { Request, Response } from 'express'
import { Category } from '../../model/Category'

export async function CreateCategories(req: Request, res: Response) {
  const { name, icon } = req.body
try {
    const categories = await Category.create({ name, icon })
    res.json(categories)  
} catch (error) {
    res.status(500).json({"error":`${error}`})
}
}
