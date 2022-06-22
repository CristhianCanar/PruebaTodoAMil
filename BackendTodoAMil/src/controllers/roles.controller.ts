import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database/conection'

export const getRoles = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM roles')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const getRolesById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM roles WHERE id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const createRol = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      name,
      description
    } = req.body
    const response: QueryResult = await pool.query('INSERT INTO roles ' +
      '(name, description) ' +
      'values ($1, $2)', [name, description])
    if (response != null) {
      return res.status(200).json({
        message: 'Rol created succesfully',
        body: {
          rol: {
            name,
            description
          }
        }
      })
    } else {
      return res.status(401).json({
        message: 'Error create on Rol!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

/*
export const updateRole = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM persons WHERE')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}
export const deleteRole = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM persons WHERE')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
} */
