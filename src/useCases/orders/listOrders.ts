import { Request, Response } from "express"
import { Order } from "../../model/Order"

export async function ListOrders(req: Request, res: Response) {
    const orders = await Order.find()
    .sort({ createdAt: 1 }) //-1 to order desc, new > old 
    .populate('products.product')
    
    res.json(orders)
}