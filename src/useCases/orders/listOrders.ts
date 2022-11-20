import { Request, Response } from "express"
import { Order } from "../../model/Order"

export async function ListOrders(req: Request, res: Response) {
    const orders = await Order.find()
    res.json(orders)
}