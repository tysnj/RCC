import React from 'react';

const FlexContainer = ({children, className, width, height, direction, justifyContent, alignItems, margin}) => {
  return (
    <div
      className={className}
      style={{  
        width: `${width}` || '100%',
        height: `${height}` || '100vh',
        display: 'flex',
        flexDirection: `${direction}`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
        margin: `${margin}`
      }}  
    >
      {children}
    </div>
  )
}

export default FlexContainer;
