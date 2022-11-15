import { Router } from "express";
import { CreateCategories } from "./useCases/categories/createCategories";
import { ListCategories } from "./useCases/categories/listCategories";

export const router = Router()

router.get('/categories', ListCategories)
router.post('/categories', CreateCategories)

router.get('/products', (req, res) => res.send('ok'))
router.post('/products', (req, res) => res.send('ok'))

router.get('/categories/:categoryId/products', (req, res) => res.send('ok'))

router.get('/orders', (req, res) => res.send('ok'))
router.post('/orders', (req, res) => res.send('ok'))
router.patch('/orders/:orderId', (req, res) => res.send('ok'))
router.delete('/orders/:orderId', (req, res) => res.send('ok'))
