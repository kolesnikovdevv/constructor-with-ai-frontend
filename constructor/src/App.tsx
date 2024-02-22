// App.tsx
import React from "react"

import { HomePage } from "./pages/home-page"
import { Provider } from "react-redux"
import { store } from "./state/store"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen bg-tuatara text-white">
        <HomePage></HomePage>
      </div>
    </Provider>
  )
}

export default App
