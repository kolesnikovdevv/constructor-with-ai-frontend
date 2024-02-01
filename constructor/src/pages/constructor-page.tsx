// Constructor.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export const Constructor: React.FC = () => {
  return (
    <div>
      <h1>Страница конструктора</h1>
      <p>Это содержимое страницы конструктора.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  )
}
