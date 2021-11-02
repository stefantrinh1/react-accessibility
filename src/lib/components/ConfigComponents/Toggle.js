import React from 'react';
import Switch from 'react-switch';

export default function Toggle({ onChange, checked, ...rest }) {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      height={25}
      width={45}
      {...rest}
    />
  );
}
