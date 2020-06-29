import { getVarieties } from './BeanVarietyDataProvider.js'
import { VarietyListComponent } from './BeanVarietyList.js'

getVarieties().then(() => VarietyListComponent())

const url = 'https://localhost:5001/api/beanvariety/'

const button = document.querySelector('#run-button')
button.addEventListener('click', () => {
  getAllBeanVarieties().then(beanVarieties => {
    console.log(beanVarieties)
  })
})

function getAllBeanVarieties () {
  return fetch(url).then(resp => resp.json())
}
