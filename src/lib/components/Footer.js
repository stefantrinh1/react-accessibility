import React from 'react'
import initialStyleSettings from './variables/initialStyleSettings'
export default function Footer({ setStyleSettings }) {
  return (
    <div className='widget-footer'>
      <button onClick={() => setStyleSettings(initialStyleSettings)}>
        Reset Settings
      </button>
    </div>
  )
}
