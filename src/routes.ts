import path from 'node:path'

import { Router } from 'express'
import multer from 'multer'

import { CreateProducts } from './useCases/products/createProducts'
import { ListProducts } from './useCases/products/listProducts'
import { CreateCategories } from './useCases/categories/createCategories'
import { ListCategories } from './useCases/categories/listCategories'
import { ListProductsByCategoryId } from './useCases/categories/listProductsByCategoryId'

export const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req, file, cb){
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  }),
})

router.get('/categories', ListCategories)
router.post('/categories', CreateCategories)

router.get('/products', ListProducts)
router.post('/products', upload.single('image'), CreateProducts)

router.get('/categories/:categoryId/products', ListProductsByCategoryId)

router.get('/orders', (req, res) => res.send('ok'))
router.post('/orders', (req, res) => res.send('ok'))
router.patch('/orders/:orderId', (req, res) => res.send('ok'))
router.delete('/orders/:orderId', (req, res) => res.send('ok'))
