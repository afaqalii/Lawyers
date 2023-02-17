import React from 'react'
import "../../assets/variables.scss";
import styled from 'styled-components';

const Button = ({content, bg, padding, color}) => {
    
    const Button = styled.button`
    cursor:pointer;
    padding:1em 2em;
    font-size:18px;
    border: 1px solid ${color};
    background-color:transparent;
    color:${color};
    transition: .5s;
    
    &:hover {
      background-color:${color};
      color:${bg};
    }
    
    `;

  return (
    <Button>
        {content}
    </Button>
  )
}

export default Button