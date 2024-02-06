import { IconSection } from "../../components/icon-selection/icon-section"
import { SearchForm } from "../../components/search-form/search-form"
import formsIcon from "../../icons/elements/forms-icon.svg"
import { UniversalHeader } from "../../ui/universal-header/universal-header"

export const SelectionSidebar: React.FC = () => {
  return (
    <div className="w-1/6 p-4 bg-cod_gray h-full flex flex-col">
      <SearchForm></SearchForm>
      <UniversalHeader
        title="Common"
        titleClassName="opacity-50 mb-4"
      ></UniversalHeader>
      <IconSection icon={formsIcon} text="Страницы"></IconSection>
      <IconSection icon={formsIcon} text="Блоки"></IconSection>
      <div className="w-full border-t-2 opacity-10 border-white mb-2"></div>
      <UniversalHeader
        title="Elements"
        titleClassName="opacity-50 mb-4"
      ></UniversalHeader>
      <IconSection icon={formsIcon} text="Формы"></IconSection>
      <IconSection icon={formsIcon} text="Кнопки"></IconSection>
      <IconSection icon={formsIcon} text="Иконки"></IconSection>
      <IconSection icon={formsIcon} text="Утилиты"></IconSection>
      <div className="w-full border-t-2 opacity-10 border-white mb-2"></div>
      <div className="flex-grow"></div>
      <SearchForm></SearchForm>
    </div>
  )
}
