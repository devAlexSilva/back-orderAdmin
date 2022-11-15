import { Request, Response } from 'express'
import { Product } from '../../model/Product'

export async function ListProducts(req: Request, res: Response) {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
