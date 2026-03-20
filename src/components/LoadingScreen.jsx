import React, { useState, useEffect } from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHiding(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`loader${hiding ? ' loader--hide' : ''}`}>
      <div className="loader__content">
        <span className="loader__name">PC</span>
        <div className="loader__bar">
          <div className="loader__bar-fill"></div>
        </div>
        <p className="loader__text">Pradeepsinh Chavda</p>
      </div>
    </div>
  )
}

export default LoadingScreen
