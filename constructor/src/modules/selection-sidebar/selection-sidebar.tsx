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

export const SelectionSidebar: React.FC = () => {
  return (
    <div className="w-1/6 p-4 bg-cod_gray h-full flex flex-col">
      <SearchForm
        icon={magnifierIcon}
        placeholder="введите запрос"
      ></SearchForm>
      <UniversalHeader
        title="Common"
        titleClassName="opacity-50 mb-4"
      ></UniversalHeader>
      <IconSection icon={pagesIcon} text="Страницы"></IconSection>
      <IconSection icon={blocksIcon} text="Блоки"></IconSection>
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
  )
}
