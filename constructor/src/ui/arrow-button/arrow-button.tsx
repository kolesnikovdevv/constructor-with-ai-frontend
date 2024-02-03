import React from 'react'
import arrowIcon from '../../icons/arrow/arrow-icon.svg'

export const ArrowButton = () => {
  return (
    <button className="p-3 bg-blue-500 text-white relative">
      <img src={arrowIcon} alt="Arrow Icon" />
    </button>
  )
}
