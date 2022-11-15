import { Request, Response } from 'express'
import { Product } from '../../model/Product'

export async function CreateProducts(req: Request, res: Response) {
  try {
    /*  const products = await Product.create({ name, icon })
     */
    const imagePath = req.file?.filename
    const { name, description, price, category, ingredients } = req.body
    const materials = JSON.parse(ingredients)

    const product = await Product.create({
      name,
      price,
      description,
      imagePath,
      category,
      ingredients: materials,
    })

    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `${error}` })
  }
}
