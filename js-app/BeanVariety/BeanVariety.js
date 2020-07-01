const Variety = variety => {
  return `
    <section class="varieties">
        <div>${variety.name}</div>
        <div>${variety.region}</div>
        <div>${variety.notes}</div>
    </section>
    `
}

export default Variety
