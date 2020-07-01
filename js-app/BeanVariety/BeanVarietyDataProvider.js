export const getVarieties = () => {
  return fetch('https://localhost:5001/api/beanvariety').then(response =>
    response.json()
  )
}

// export const useVarieties = () => {
//   return varieties
// }
