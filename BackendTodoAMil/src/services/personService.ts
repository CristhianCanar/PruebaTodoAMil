import { NewPersonEntry, NonSensitiveInfoPersonEntry, PersonEntry } from '../types'
import personsData from './persons.json'

const persons: PersonEntry[] = personsData as PersonEntry[]

export const getEntries = (): PersonEntry[] => persons

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoPersonEntry[] => {
  return persons.map(({ id, name, lastName, status, email, phone }) => {
    return {
      id,
      name,
      lastName,
      status,
      email,
      phone
    }
  })
}

export const findById = (id: number): NonSensitiveInfoPersonEntry | undefined => {
  const person = persons.find(d => d.id === id)
  if (person != null) {
    const { city, address, ...restOfPerson } = person
    return restOfPerson
  }
  return undefined
}
export const addPerson = (newPersonEntry: NewPersonEntry): PersonEntry => {
  const newPerson = {
    id: Math.max(...persons.map(d => d.id)) + 1,
    ...newPersonEntry
  }
  persons.push(newPerson)
  return newPerson
}
