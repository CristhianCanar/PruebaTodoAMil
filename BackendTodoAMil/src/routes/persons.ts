import express from 'express'
import * as personService from '../services/personService'
import toNewPersonEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(personService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const person = personService.findById(+req.params.id)

  return (person != null)
    ? res.send(person)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newPersonEntry = toNewPersonEntry(req.body)
    const addPersonEntry = personService.addPerson(newPersonEntry)
    res.json(addPersonEntry)
  } catch (e) {
    if (typeof e === 'string') {
      e.toUpperCase() // works, `e` narrowed to string
    } else if (e instanceof Error) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      res.status(400).send(e.message)
    }
  }
})

export default router
