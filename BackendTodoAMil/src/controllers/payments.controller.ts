import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database/conection'

export const getPayments = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM payments')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const getPaymentsById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM payments WHERE id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const createPayment = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      type,
      confirmationNumber,
      status,
      personId
    } = req.body
    const response: QueryResult = await pool.query('INSERT INTO payments ' +
    '(type, confirmation_number, status, person_id) ' +
    'values ($1, $2, $3, $4)', [type, confirmationNumber, status, personId])
    if (response != null) {
      return res.status(200).json({
        message: 'payment created succesfully',
        body: {
          payment: {
            type,
            confirmationNumber,
            status,
            personId
          }
        }
      })
    } else {
      return res.status(401).json({
        message: 'Error creating payment!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

// Developer, service api where search by person_id
