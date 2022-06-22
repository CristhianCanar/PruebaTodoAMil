import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database/conection'

export const getCarts = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM carts')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const getCartsByPersonId = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM cart INNER JOIN orders ON cart.orders_id = orders.id WHERE person_id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const createCart = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      orderId,
      productId
    } = req.body
    const response: QueryResult = await pool.query('INSERT INTO carts ' +
    '(amount, status, person_id, payment_id) ' +
    'values ($1, $2, $3, $4)', [orderId, productId])
    if (response != null) {
      return res.status(200).json({
        message: 'Cart created succesfully',
        body: {
          cart: {
            orderId,
            productId
          }
        }
      })
    } else {
      return res.status(401).json({
        message: 'Error creating cart!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const updateCartByPersonId = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM cart INNER JOIN orders ON cart.orders_id = orders.id WHERE person_id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

// Developer, service api where search by person_id
