// pages/home-page.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline font-body text-green-700">
        Hello world!
      </h1>

      <div>
        <h1>Главная страница</h1>
        <p>Это содержимое главной страницы.</p>
        <Link to="/constructor">Перейти к конструктору</Link>
      </div>
    </>
  )
}
