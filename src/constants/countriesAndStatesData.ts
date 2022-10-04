import { TCountry } from "../types"
import firstCharToUpperCase from "../utils/firstCharToUpperCase"

const countryAndStates = {
    nigeria: [
        "lagos",
        "abuja",
        "kaduna"
    ],
    usa: [
        "chicago",
        "carlifornia"
    ]
}

export const deriveCountriesDropdownKeyAndValue = () => {
    const data = [{key: "-- Select Country --", value: ""}]
    for (const key in countryAndStates) {
        if (Object.prototype.hasOwnProperty.call(countryAndStates, key)) {
            data.push({ "key": firstCharToUpperCase(key), value: key})
        }
    }
    return data
}

export const getStatesDropdownDataFromCountry = (country: TCountry) => {
    const statesDropDown = [{key: "-- Select State --", value: ""}]

    const statesData = countryAndStates[country]
    for (const key in statesData) {
        if (Object.prototype.hasOwnProperty.call(statesData, key)) {
            const state =statesData[key]
            statesDropDown.push({ "key": firstCharToUpperCase(state), value: state})
        }
    }
    return statesDropDown || []
}

export default countryAndStates
