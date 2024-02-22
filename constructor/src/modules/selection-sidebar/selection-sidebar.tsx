import { IconSection } from "../../components/icon-selection/icon-section"
import { SearchForm } from "../../components/search-form/search-form"
import { UniversalHeader } from "../../ui/universal-header/universal-header"
import pagesIcon from "../../icons/elements/pages-icon.svg"
import formsIcon from "../../icons/elements/forms-icon.svg"
import blocksIcon from "../../icons/elements/blocks-icon.svg"
import buttonsIcon from "../../icons/elements/buttons-icon.svg"
import starIcon from "../../icons/elements/star-icon.svg"
import utilitiesIcon from "../../icons/elements/utilities-icon.svg"
import starIconAI from "../../icons/ai/stars-icon.svg"
import magnifierIcon from "../../icons/magnifier/magnifier-icon.svg"
import { useState } from "react"
import { PopUpMenu } from "../../components/pop-up-menu/pop-up-menu"
import { StylePanel } from "../style-panel/style-panel"

export const SelectionSidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | "">("pages")

  const handleItemClick = (item: string) => {
    setSelectedItem((prevItem) => (prevItem === item ? "" : item))
  }
  return (
    <div className="flex h-full">
      <div className="p-4 pt-20 bg-cod_gray h-screen flex flex-col border-r border-masala">
        <SearchForm
          icon={magnifierIcon}
          placeholder="введите запрос"
        ></SearchForm>
        <UniversalHeader
          title="Common"
          titleClassName="opacity-50 mb-4 mt-4"
        ></UniversalHeader>
        <IconSection
          icon={pagesIcon}
          text="Страницы"
          onClick={() => handleItemClick("pages")}
        ></IconSection>
        <IconSection
          icon={blocksIcon}
          text="Блоки"
          onClick={() => handleItemClick("blocks")}
        ></IconSection>
        <div className="w-full border-t-2 opacity-10 border-white mb-2"></div>
        <UniversalHeader
          title="Elements"
          titleClassName="opacity-50 mb-4"
        ></UniversalHeader>
        <IconSection icon={formsIcon} text="Формы"></IconSection>
        <IconSection icon={buttonsIcon} text="Кнопки"></IconSection>
        <IconSection icon={starIcon} text="Иконки"></IconSection>
        <IconSection icon={utilitiesIcon} text="Утилиты"></IconSection>
        <div className="w-full border-t-2 opacity-10 border-white mb-2"></div>
        <div className="flex-grow"></div>
        <UniversalHeader
          title="Нейронная сеть"
          titleClassName="opacity-50 mb-4"
        ></UniversalHeader>
        <SearchForm icon={starIconAI} placeholder="введите запрос"></SearchForm>
      </div>
      <PopUpMenu selectedItem={selectedItem}></PopUpMenu>
    </div>
  )
}
