const partnerLogos = [
  "HP 3D",
  "ABTA",
  "Saybrook",
  "Invictus",
  "Color Copy 01",
  "Beloveful",
]

export function BrandLogosSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Trusted By</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Brands We've Worked With</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partnerLogos.map((name) => (
            <div
              key={name}
              className="rounded-xl border border-border glass-effect px-4 py-5 text-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${name} logo placeholder`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
