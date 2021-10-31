import React, { useContext } from 'react'
import Switch from 'react-switch'
import { store } from '../Context/Store'
export default function HideImages({ setStyleSettings, styleSetting }) {
  const { globalState, dispatch } = useContext(store)

  return (
    <div className='widget-row'>
      <h5>Hide Images</h5>
      <Switch
        onChange={() =>
          dispatch({
            type: globalState.hideImages ? 'UNHIDE_IMAGES' : 'HIDE_IMAGES',
          })
        }
        checked={styleSetting.hideImages}
        height={25}
        width={45}
      />
    </div>
  )
}
