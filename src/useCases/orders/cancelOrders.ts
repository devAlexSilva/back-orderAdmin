import { Request, Response } from 'express'
import { Order } from '../../model/Order'

export async function CancelOrders(req: Request, res: Response) {
  const { orderId } = req.params

  try {
    await Order.findByIdAndDelete(orderId)
    res.sendStatus(204)
    
  } catch (error) {
    res.status(500).json({ error: `${error}` })
  }
}
