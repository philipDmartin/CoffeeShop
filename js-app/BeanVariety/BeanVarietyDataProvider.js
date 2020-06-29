let varieties = []

const setVarieties = varietyArray => (varieties = varietyArray.splice(0))

export const getVarieties = () => {
  return fetch('https://localhost:5001/api/beanvariety')
    .then(response => response.json())
    .then(parsedVarieties => {
      varieties = parsedVarieties.slice()
      console.log(varieties)
    })
}

export const useVarieties = () => {
  return varieties
}
