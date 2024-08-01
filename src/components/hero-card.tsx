interface HeroCardProps {
  name: string
  fullName: string
  image: string
}

export function HeroCard({ name, image, fullName }: HeroCardProps) {
  return (
    <div className="border border-1 p-2 rounded-lg space-y-4">
      <img
        className="aspect-square object-cover rounded-md"
        src={image}
        alt={name}
      />
      <div className="">
        <strong className="block text-lg">{name}</strong>
        <span className="block text-muted-foreground">{fullName || "Sem nome completo"}</span>
      </div>
    </div>
  )
}