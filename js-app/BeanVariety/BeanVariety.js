const VarietiesComponent = varieties => {
  return `
    <section class="varieties">
        <div>${varieties.name}</div>
        <div>${varieties.region}</div>
        <div>${varieties.notes}</div>
    </section>
    `
}

export default VarietiesComponent
