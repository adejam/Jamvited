import React, { useContext } from "react"
import { FormattedMessage } from "react-intl"
import { localeDropdownOptions } from "../../../../constants/variables"
import { LanguageContext } from "../../../../store/contexts/LanguageContextProvider"
import LocaleSwitcherStyle from "./LocaleSwitcher.style"


const LocaleSwitcher = () => {

  const langContext = useContext(LanguageContext)

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    langContext?.setLang(e.target.value)
  }

  return (
    <LocaleSwitcherStyle>
      <label className="labelStyle" htmlFor="localeSwitcherSelect">
        <FormattedMessage id="LocaleSwitcher.changeLanguage"/>:
      </label>
      <select className="select" id="localeSwitcherSelect" onChange={changeHandler}>
        <option value={langContext?.lang ?? ""}>{langContext?.lang?.toUpperCase() || ""}</option>
        {localeDropdownOptions?.filter(option => option.value !== langContext?.lang)?.map((option) =>  (
            <option key={option?.value} value={option?.value}>
              {option?.key}
            </option>
          )
        )}
      </select>
    </LocaleSwitcherStyle>
  )
}

export default LocaleSwitcher
