export default (globalState) => {
  const {
    widgetOpen,
    fontColor,
    fontSizeAdjustment,
    lineHeight,
    titleColor,
    letterSpacing,
    textBold,
    textCase,
    titleBackgroundColor,
    highlightTitles,
    highlightLinks,
    hideImages,
    textAlignment,
    monochrome,
  } = globalState;

  return `
    html {
        ${monochrome ? `filter:grayscale(1) !important;` : ''}
    }

    *{
        ${fontColor ? `color:${fontColor} !important;` : ''}
        ${
          textAlignment !== 'initial'
            ? `text-align:${textAlignment} !important;`
            : ''
        }

        ${textBold ? `font-weight:bold !important;` : ''}
        
        ${
          textCase !== 'initial' ? `text-transform:${textCase} !important;` : ''
        }
    }
    img {
        ${hideImages ? `display:none !important;` : ''}
    }

    a {
        ${
          highlightLinks
            ? `border:solid 2px black !important; background-color:white; color:white `
            : ''
        }
    }

    h1,h2,h3,h4,h5,h6 {
        ${
          highlightTitles
            ? `border:solid 2px black !important; background-color: ${
                titleBackgroundColor ? titleBackgroundColor : 'white'
              } !important; color:${
                fontColor ? fontColor : 'black'
              } !important;`
            : ''
        }
  
        ${titleColor ? `color:${titleColor} !important;` : ''}

        ${
          titleBackgroundColor
            ? `background-color:${titleBackgroundColor} !important;`
            : ''
        }

     
        ${
          fontSizeAdjustment
            ? `zoom:${1 + fontSizeAdjustment / 101} !important;`
            : ''
        }

        ${lineHeight ? `line-height:${1 + lineHeight / 101} !important;` : ''}

        ${
          letterSpacing
            ? `letter-spacing:${letterSpacing / 10}px !important;`
            : ''
        }

        
    }

    p, button, li, ol {
        ${
          fontSizeAdjustment
            ? `zoom:${1 + fontSizeAdjustment / 101} !important;`
            : ''
        }

        ${lineHeight ? `line-height:${1 + lineHeight / 101} !important;` : ''}
        

        ${
          letterSpacing
            ? `letter-spacing:${letterSpacing / 10}px !important;`
            : ''
        }
        

    }
    
    
    `;
};
