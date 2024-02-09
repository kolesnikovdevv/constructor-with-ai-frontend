interface UniversalIconProps {
  icon: string
  orangeBackground?: boolean // Пропс для оранжевого фона
}

export const UniversalIcon: React.FC<UniversalIconProps> = ({
  icon,
  orangeBackground,
}) => {
  const backgroundClass = orangeBackground ? "bg-orange" : "bg-shark"

  return (
    <div
      className={`flex items-center justify-center w-9 h-9 rounded-lg mr-3 ${backgroundClass}`}
    >
      <img src={icon} alt="Icon" />
    </div>
  )
}
