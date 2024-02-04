// pages/home-page.tsx
import React from "react"
import { Link } from "react-router-dom"
import { ArrowButton } from "../ui/arrow-button/arrow-button"

import formsIcon from "../icons/elements/forms-icon.svg"
import { UniversalIcon } from "../ui/universal-icon/universal-icon"
import { IconSection } from "../components/icon-selection/icon-section"
import { SearchForm } from "../components/search-form/search-form"

export const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline font-body text-green-700">
        Hello world!
      </h1>
      <div>
        <h1>Главная страница</h1>
        <p>Это содержимое главной страницы.</p>
        <Link to="/constructor">Перейти к конструктору</Link>
      </div>
      {/* <img src={formsIcon} alt="Arrow Icon" /> */}
      <UniversalIcon icon={formsIcon}></UniversalIcon>
      <ArrowButton></ArrowButton>
      <IconSection icon={formsIcon} text="Your text goes here"></IconSection>
      <SearchForm></SearchForm>
    </>
  )
}
