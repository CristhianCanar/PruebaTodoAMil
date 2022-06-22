import { StatusPerson } from './enums'

export interface PersonEntry {
  id: number
  name: string
  lastName: string
  city: string
  address: string
  phone: string
  email: string
  status: StatusPerson
}

export interface ProductEntry {
  id: number
  expirationDate: string
  admissionDate: string
  mark: string
  quantity: number
  price: number
  employeeId: number
}

export type NewPersonEntry = Omit<PersonEntry, 'id'>
export type NonSensitiveInfoPersonEntry = Omit<PersonEntry, 'address', 'city'>

export type NonSensitiveInfoProductEntry = Omit<ProductEntry, 'employeeId'>
