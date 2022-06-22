/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createEmployee, deleteEmployee, getEmployees, getEmployeesById, updateEmployee } from '../controllers/employees.controller'
import { createPayment, getPayments, getPaymentsById } from '../controllers/payments.controller'
import { createPerson, deletePerson, getPersons, getPersonsById, updatePerson } from '../controllers/person.controller'
import { createProduct, getProducts, getProductsById } from '../controllers/products.controller'
import { createRol, getRoles, getRolesById } from '../controllers/roles.controller'

const router = express.Router()

// Routes API REST: Users
router.get('/persons', getPersons)
router.get('/persons/:id', getPersonsById)
router.post('/persons', createPerson)
router.put('/persons/:id', updatePerson)
router.delete('/persons/:id', deletePerson)
// Routes API REST: Employees
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployeesById)
router.post('/employees', createEmployee)
router.put('/employees/:id', updateEmployee)
router.delete('/employees/:id', deleteEmployee)
// Routes API REST: Products
router.get('/products', getProducts)
router.get('/products/:id', getProductsById)
router.post('/products', createProduct)
// Routes API REST: Roles
router.get('/roles', getRoles)
router.get('/roles/:id', getRolesById)
router.post('/roles', createRol)
// Routes API REST: Payments
router.get('/payments', getPayments)
router.get('/payments/:id', getPaymentsById)
router.post('/payments', createPayment)

export default router
