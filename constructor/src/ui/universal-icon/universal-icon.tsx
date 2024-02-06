interface UniversalIconProps {
  icon: string
}

export const UniversalIcon: React.FC<UniversalIconProps> = ({ icon }) => {
  return (
    <div className="flex items-center justify-center w-9 h-9 bg-shark rounded-lg mr-3">
      <img src={icon} alt="Icon" />
    </div>
  )
}
