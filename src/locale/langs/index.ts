import en from './en.json'
import fr from './fr.json'

interface IKeyValueStringObject {
  [x: string]: { [x: string]: string }
}

const langs: IKeyValueStringObject = { ENGLISH: en, FRENCH: fr }

export default langs
