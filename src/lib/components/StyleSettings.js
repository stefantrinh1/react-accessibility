import React from 'react'
import HideImages from './ConfigComponents/HideImages'

export default function StyleSettings({ setStyleSettings, styleSetting }) {
  return (
    <div>
      <HideImages
        setStyleSettings={setStyleSettings}
        styleSetting={styleSetting}
      />

      {/* <FontColor /> */}
    </div>
  )
}
