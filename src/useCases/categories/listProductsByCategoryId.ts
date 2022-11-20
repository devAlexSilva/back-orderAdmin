import { Request, Response } from 'express'
import { Product } from '../../model/Product'

export async function ListProductsByCategoryId(req: Request, res: Response) {
  const { categoryId } = req.params
  
  try {
    const products = await Product.find().where({
      category: categoryId,
    })
    res.json(products)
  
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
