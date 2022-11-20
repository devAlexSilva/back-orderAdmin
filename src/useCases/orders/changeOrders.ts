import { Request, Response } from 'express'
import { Order } from '../../model/Order'

export async function ChangeOrdes(req: Request, res: Response) {
  const { orderId } = req.params
  const { status } = req.body

  try {
    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res
        .status(400)
        .json({ error: 'status should be "WAITING", "IN_PRODUCTION", "DONE"' })
    }

    await Order.findByIdAndUpdate(orderId, { status })
    res.sendStatus(204)

  } catch (error) {
    res.status(500).json({ error: `${error}` })
  }
}
