export enum Entity {
  People = 'people',
  Films = 'films',
  Starships = 'starships',
  Vehicles = 'vehicles',
  Species = 'species',
  Planets = 'planets',
}

export type People = {
  name: string
  birth_year: string
}

export type Films = {
  title: string
  episode_id: string
}

export type Starships = {
  name: string
  model: string
}
