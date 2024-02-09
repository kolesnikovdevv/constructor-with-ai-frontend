// pages/home-page.tsx
import React from "react"
// import { Link } from "react-router-dom"
// import { ArrowButton } from "../ui/arrow-button/arrow-button"

// import formsIcon from "../icons/elements/forms-icon.svg"
// import { UniversalIcon } from "../ui/universal-icon/universal-icon"
// import { IconSection } from "../components/icon-selection/icon-section"
// import { SearchForm } from "../components/search-form/search-form"
import { SelectionSidebar } from "../modules/selection-sidebar/selection-sidebar"
import { Navbar } from "../modules/navbar/navbar"

export const HomePage: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <SelectionSidebar></SelectionSidebar>
    </>
  )
}
