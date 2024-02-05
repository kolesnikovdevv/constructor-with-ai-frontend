// App.tsx
import React from "react"

import { HomePage } from "./pages/home-page"

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-tuatara text-white font-body">
      <HomePage></HomePage>
    </div>
  )
}

export default App
