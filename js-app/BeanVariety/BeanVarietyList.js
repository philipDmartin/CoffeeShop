import Variety from './BeanVariety.js'
import { getVarieties } from './BeanVarietyDataProvider.js'
const contentTarget = document.querySelector('.varietiesContainer')

const renderVarietyList = () => {
  getVarieties().then(allTheVarieties => {
    for (const variety of allTheVarieties) {
      const varietyHTML = Variety(variety)
      contentTarget.innerHTML += varietyHTML
    }
  })
}
const button = document.querySelector('#run-button')
button.addEventListener('click', () => {
  renderVarietyList()
})
