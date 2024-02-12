import { ArrowButton } from "../../ui/arrow-button/arrow-button"
import { UniversalIcon } from "../../ui/universal-icon/universal-icon"

interface IconSectionProps {
  icon: string
  text: string
  onClick?: () => void
}

export const IconSection: React.FC<IconSectionProps> = ({
  icon,
  text,
  onClick,
}) => {
  return (
    <div
      className="flex items-stretch mb-2 p-1 cursor-pointer transition duration-300 ease-in-out hover:bg-woodsmoke rounded-xl"
      onClick={onClick}
    >
      <UniversalIcon icon={icon}></UniversalIcon>

      <p className="my-auto grow">{text}</p>
      <div className="pr-2 flex">
        <ArrowButton></ArrowButton>
      </div>
    </div>
  )
}
