import React, { useContext } from "react"
import { localeDropdownOptions } from "../../../../constants/variables"
import { LanguageContext } from "../../../../store/contexts/LanguageContextProvider"


const LocaleSwitcher = () => {

  const langContext = useContext(LanguageContext)

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    langContext?.setLang(e.target.value)
  }

  return (
    <div>
      <select onChange={changeHandler}>
        <option value={langContext?.lang ?? ""}>{langContext?.lang?.toUpperCase() || ""}</option>
        {localeDropdownOptions?.filter(option => option.value !== langContext?.lang)?.map((option) =>  (
            <option key={option?.value} value={option?.value}>
              {option?.key}
            </option>
          )
        )}
      </select>
    </div>
  )
}

export default LocaleSwitcher