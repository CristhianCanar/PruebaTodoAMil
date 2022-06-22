import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database/conection'

export const getOrders = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM orders')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const getOrdersById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM orders WHERE id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const getOrdersByPersonId = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM orders WHERE person_id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const createOrder = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      amount,
      status,
      personId,
      paymentId
    } = req.body
    const response: QueryResult = await pool.query('INSERT INTO orders ' +
    '(amount, status, person_id, payment_id) ' +
    'values ($1, $2, $3, $4)', [amount, status, personId, paymentId])
    if (response != null) {
      return res.status(200).json({
        message: 'Order created succesfully',
        body: {
          order: {
            amount,
            status,
            personId,
            paymentId
          }
        }
      })
    } else {
      return res.status(401).json({
        message: 'Error creating order!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

// Developer, service api where search by person_id
