import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database/conection'

export const getEmployees = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM employees')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const getEmployeesById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM employees WHERE id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const createEmployee = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      name,
      lastName,
      city,
      address,
      phone,
      email,
      password,
      rolId
    } = req.body
    const response: QueryResult = await pool.query('INSERT INTO employees ' +
      '(name, last_name, city, address, phone, email, password, rol_id) ' +
      'values ($1, $2, $3, $4, $5, $6, $7, $8)', [name, lastName, city, address, phone, email, password, rolId])
    if (response != null) {
      return res.status(200).json({
        message: 'Employee created succesfully',
        body: {
          employee: {
            name,
            lastName,
            city,
            address,
            phone,
            email,
            password,
            rolId
          }
        }
      })
    } else {
      return res.status(401).json({
        message: 'Error creating employee!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const updateEmployee = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const {
      name,
      lastName,
      city,
      address,
      phone,
      email,
      password,
      rolId
    } = req.body

    const response: QueryResult = await pool.query('UPDATE employees SET ' +
    'name = $1, last_name = $2, city = $3, address = $4, phone = $5, email = $6, password = $7, rol_id = $8 ' +
    'WHERE id = $9', [name, lastName, city, address, phone, email, password, rolId, id])
    if (response != null) {
      return res.status(200).json({
        message: `Employee ${id} updated successfuly`
      })
    } else {
      return res.status(401).json({
        message: 'Error deleting employee!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const deleteEmployee = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('DELETE FROM employees WHERE id = $1', [id])
    if (response != null) {
      return res.status(200).json({
        message: `Employee ${id} deleted successfuly`
      })
    } else {
      return res.status(401).json({
        message: 'Error deleting employee!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}
