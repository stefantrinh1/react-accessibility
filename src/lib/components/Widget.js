import React, { useState, useEffect } from 'react'
import AccessibilityIcon from './assets/AccessibilityIcon.js'
import CloseIcon from './assets/CloseIcon'
import Header from './Header'
import StyleSettings from './StyleSettings.js'
import Footer from './Footer.js'
import './Widget.css'
import initialStyleSettings from './variables/initialStyleSettings.js'
import styled from 'styled-components'

export default function Widget() {
  const [widgetOpen, setWidgetOpen] = useState(false)
  const [styleSetting, setStyleSettings] = useState(initialStyleSettings)

  useEffect(() => {
    return () => {}
  }, [styleSetting])

  return (
    <Container>
      <div id='accessibility-widget'>
        <div id='accessibility-widget-button'>
          <AccessibilityIcon onClick={() => setWidgetOpen(true)} />
        </div>
        {widgetOpen && (
          <div id='accessibility-widget-settings-box-container'>
            <CloseIcon
              className='closebtn'
              onClick={() => setWidgetOpen(false)}
            />
            <div id='accessibility-widget-settings-box'>
              <Header />
              <StyleSettings
                setStyleSettings={setStyleSettings}
                styleSetting={styleSetting}
              />
              <Footer
                setStyleSettings={setStyleSettings}
                styleSetting={styleSetting}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

const Container = styled.div``
