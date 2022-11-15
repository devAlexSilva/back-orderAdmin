import { Request, Response } from 'express'
import { Product } from '../../model/Product'

export async function CreateProducts(req: Request, res: Response) {
  try {
  /*  const products = await Product.create({ name, icon })
  */
 res.json(req.body)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `${error}` })
  }
}
