// App.tsx
import React from "react"

import { HomePage } from "./pages/home-page"

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-600">
      <HomePage></HomePage>
    </div>
  )
}

export default App
