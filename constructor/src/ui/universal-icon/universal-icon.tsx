interface UniversalIconProps {
  icon: string
}

export const UniversalIcon: React.FC<UniversalIconProps> = ({ icon }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-shark rounded-lg mr-3">
      <img src={icon} alt="Icon" />
    </div>
  )
}
