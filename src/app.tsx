import { ChangeEvent, useEffect, useState } from "react"
import { Header } from "./components/header"
import { HeroCard } from "./components/hero-card"

interface Hero {
  id: number
  name: string
  biography: {fullName: string}
  images: {lg: string}
}

export function App() {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [searchedHero, setSearchedHero] = useState("")

  function onHeroInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchedHero(event.target.value)
  }
  
  function handleHeroSearch() {
    const filteredHeroes = heroes.filter(hero => {
      return hero.name.toLowerCase().includes(searchedHero.toLowerCase())
    })

    setHeroes(filteredHeroes)
  }

  useEffect(() => {
    async function fetchHeroes() {
      const res = await fetch("https://homologacao3.azapfy.com.br/api/ps/metahumans")
      const data = await res.json()

      setHeroes(data)
    }

    fetchHeroes()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Header handleHeroSearch={handleHeroSearch} onHeroInputChange={onHeroInputChange} />
      <div className="grid grid-cols-auto-fill gap-4">
        {heroes.map(hero => {
          return (
            <HeroCard
              key={hero.id}
              name={hero.name}
              image={hero.images.lg}
              fullName={hero.biography.fullName}
            />
          )
        })}
      </div>
    </div>
  )
}
