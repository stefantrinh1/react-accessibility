import React from 'react';
import styled from 'styled-components';

export default function ColorsSelect({ value, onChange, colors }) {
  const defaultColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
    'white',
  ];

  const selectedColors = colors ? colors : defaultColors;

  const renderColors = () => {
    return (
      <>
        {selectedColors.map((color) => {
          const activeStyles = value === color ? { borderColor: 'purple' } : {};

          return (
            <ColorContainer
              style={{ backgroundColor: color, ...activeStyles }}
              onClick={() => onChange(color)}
            />
          );
        })}
      </>
    );
  };

  return <ColorsContainer>{renderColors()}</ColorsContainer>;
}

const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColorContainer = styled.div`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  margin: 6px;
  ::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: solid 2px;
    border-color: inherit;
    height: 23px;
    width: 23px;
    border-radius: 100px;
  }
  :hover {
    opacity: 0.7;
  }
`;
