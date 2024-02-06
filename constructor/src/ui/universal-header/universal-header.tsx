import React from "react"

interface HeaderProps {
  title: string
  titleClassName?: string
}

export const UniversalHeader: React.FC<HeaderProps> = ({
  title,
  titleClassName,
}) => {
  return <div className={titleClassName}>{title}</div>
}
