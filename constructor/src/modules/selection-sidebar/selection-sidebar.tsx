import { IconSection } from "../../components/icon-selection/icon-section"
import { SearchForm } from "../../components/search-form/search-form"
import formsIcon from "../../icons/elements/forms-icon.svg"

export const SelectionSidebar: React.FC = () => {
  return (
    <div className="w-1/6 p-4 bg-cod_gray h-full flex flex-col">
      <IconSection icon={formsIcon} text="Form"></IconSection>
      <IconSection icon={formsIcon} text="Form"></IconSection>
      <IconSection icon={formsIcon} text="Form"></IconSection>
      <div className="flex-grow"></div>
      <SearchForm></SearchForm>
    </div>
  )
}
