import { StatusPerson } from './enums'
import { NewPersonEntry } from './types'

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }
  return nameFromRequest
}

const parseLastName = (lastNameFromRequest: any): string => {
  if (!isString(lastNameFromRequest)) {
    throw new Error('Incorrect or missing lastName')
  }
  return lastNameFromRequest
}

const parseCity = (cityFromRequest: any): string => {
  if (!isString(cityFromRequest)) {
    throw new Error('Incorrect or missing city')
  }
  return cityFromRequest
}

const parseAddress = (addressFromRequest: any): string => {
  if (!isString(addressFromRequest)) {
    throw new Error('Incorrect or missing address')
  }
  return addressFromRequest
}

const parsePhone = (phoneFromRequest: any): string => {
  if (!isString(phoneFromRequest)) {
    throw new Error('Incorrect or missing phone')
  }
  return phoneFromRequest
}

const parseEmail = (emailFromRequest: any): string => {
  if (!isString(emailFromRequest)) {
    throw new Error('Incorrect or missing email')
  }
  return emailFromRequest
}

const parseStatus = (statusFromRequest: any): StatusPerson => {
  if (!isString(statusFromRequest) || !isStatus(statusFromRequest)) {
    throw new Error('Incorrect or missing status')
  }
  return statusFromRequest
}

/* const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
} */

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isStatus = (param: any): boolean => {
  return Object.values(StatusPerson).includes(param)
}

const toNewPersonEntry = (object: any): NewPersonEntry => {
  const newPerson: NewPersonEntry = {
    name: parseName(object.name),
    lastName: parseLastName(object.lastName),
    city: parseCity(object.city),
    address: parseAddress(object.address),
    phone: parsePhone(object.phone),
    email: parseEmail(object.email),
    status: parseStatus(object.status)
  }
  return newPerson
}

export default toNewPersonEntry
