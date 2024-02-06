// IconSection.tsx

import { ArrowButton } from "../../ui/arrow-button/arrow-button"
import { UniversalIcon } from "../../ui/universal-icon/universal-icon"

interface IconSectionProps {
  icon: string
  text: string
}

export const IconSection: React.FC<IconSectionProps> = ({ icon, text }) => {
  return (
    <div className="flex items-stretch pb-4 pr-2">
      <UniversalIcon icon={icon}></UniversalIcon>
      <p className="my-auto grow">{text}</p>
      <ArrowButton></ArrowButton>
    </div>
  )
}
