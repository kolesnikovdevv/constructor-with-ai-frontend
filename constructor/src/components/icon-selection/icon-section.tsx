// IconSection.tsx

import { ArrowButton } from "../../ui/arrow-button/arrow-button"
import { UniversalIcon } from "../../ui/universal-icon/universal-icon"

interface IconSectionProps {
  icon: string
  text: string
}

export const IconSection: React.FC<IconSectionProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      <UniversalIcon icon={icon}></UniversalIcon>
      <p>{text}</p>
      <ArrowButton></ArrowButton>
    </div>
  )
}
