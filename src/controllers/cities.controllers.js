import { getFlyCityIdDB, getCitiesDB, insertCityDB } from "../repositories/cities.repository.js"

export async function getCities(req, res) {
  try {
    const { rows } = await getCitiesDB()
    res.send(rows)

  } catch(err) {
    res.status(500).send(err.message)
  }
}

export async function getFlyCityId(req, res) {
  try {
    const { rows } = await getFlyCityIdDB(req.params)
    res.status(200).send(rows)

  } catch(err) {
    res.status(500).send(err.message)
  }
}

export async function insertCity(req, res) {
  try {
    await insertCityDB(req.body)
    res.sendStatus(200)

  } catch(err) {
    res.status(500).send(err.message)
  }
}