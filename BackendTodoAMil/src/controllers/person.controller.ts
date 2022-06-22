import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database/conection'

export const getPersons = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM persons')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const getPersonsById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM persons WHERE id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const createPerson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      name,
      lastName,
      city,
      address,
      phone,
      email,
      status
    } = req.body
    const response: QueryResult = await pool.query('INSERT INTO persons ' +
    '(name, last_name, city, address, phone, email, status) ' +
    'values ($1, $2, $3, $4, $5, $6, $7)', [name, lastName, city, address, phone, email, status])
    if (response != null) {
      return res.status(200).json({
        message: 'Person created succesfully',
        body: {
          person: {
            name,
            lastName,
            city,
            address,
            phone,
            email,
            status
          }
        }
      })
    } else {
      return res.status(401).json({
        message: 'Error creating person!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const updatePerson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const {
      name,
      lastName,
      city,
      address,
      phone,
      email,
      status
    } = req.body

    const response: QueryResult = await pool.query('UPDATE persons SET ' +
    'name = $1, last_name = $2, city = $3, address = $4, phone = $5, email = $6, status = $7 ' +
    'WHERE id = $8', [name, lastName, city, address, phone, email, status, id])
    if (response != null) {
      return res.status(200).json({
        message: `Person ${id} updated successfuly`
      })
    } else {
      return res.status(401).json({
        message: 'Error deleting person!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const deletePerson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('DELETE FROM persons WHERE id = $1', [id])
    if (response != null) {
      return res.status(200).json({
        message: `Person ${id} deleted successfuly`
      })
    } else {
      return res.status(401).json({
        message: 'Error deleting person!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}
