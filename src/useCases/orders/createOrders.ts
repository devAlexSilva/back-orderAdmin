import { Request, Response } from 'express'
import { Order } from '../../model/Order'

export async function CreateOrders(req: Request, res: Response) {
  const { table, products } = req.body
try {
    const order = await Order.create({ 
      table,
      products
     })
    res.json(order)  
} catch (error) {
    res.status(500).json({"error":`${error}`})
}
}
