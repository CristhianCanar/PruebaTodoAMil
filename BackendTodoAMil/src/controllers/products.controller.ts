import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database/conection'

export const getProducts = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM products')
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const getProductsById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM products WHERE id = $1', [id])
    return res.status(200).json(response.rows)
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const createProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      name,
      uriImage,
      expirationDate,
      admissionDate,
      mark,
      quantity,
      price,
      employeeId
    } = req.body
    const response: QueryResult = await pool.query('INSERT INTO products ' +
      '(name, uri_image, expiration_date, admission_date, mark, quantity, price, employe_id) ' +
      'values ($1, $2, $3, $4, $5, $6, $7, $8)', [name, uriImage, expirationDate, admissionDate, mark, quantity, price, employeeId])
    if (response != null) {
      return res.status(200).json({
        message: 'Product created succesfully',
        body: {
          product: {
            name,
            uriImage,
            expirationDate,
            admissionDate,
            mark,
            quantity,
            price,
            employeeId
          }
        }
      })
    } else {
      return res.status(401).json({
        message: 'Error on create product!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const {
      name,
      uriImage,
      expirationDate,
      admissionDate,
      mark,
      quantity,
      price,
      employeeId
    } = req.body

    const response: QueryResult = await pool.query('UPDATE products SET ' +
    'name = $1, uri_image = $2, expirationDate = $3, admissionDate = $4, mark = $5, quantity = $6, price = $7, employe_id = $8' +
    'WHERE id = $9', [name, uriImage, expirationDate, admissionDate, mark, quantity, price, employeeId, id])
    if (response != null) {
      return res.status(200).json({
        message: `Product ${id} updated successfuly`
      })
    } else {
      return res.status(401).json({
        message: 'Error deleting product!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}

export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('DELETE FROM products WHERE id = $1', [id])
    if (response != null) {
      return res.status(200).json({
        message: `Product ${id} deleted successfuly`
      })
    } else {
      return res.status(401).json({
        message: 'Error deleting product!'
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json('Internal server error')
  }
}
