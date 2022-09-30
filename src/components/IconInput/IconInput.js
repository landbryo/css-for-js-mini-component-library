import React from 'react';
import styled from 'styled-components';
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import {COLORS} from "../../constants";

const STYLES = {
    small: {
        fontSize: 14,
        strokeWidth: 1,
        iconSize: 16,
        height: 24,
        borderThickness: 1
    },
    large: {
        fontSize: 18,
        strokeWidth: 2,
        iconSize: 24,
        height: 36,
        borderThickness: 2
    }
};

const IconInput = ({
                       label,
                       icon,
                       width = 250,
                       size,
                       ...delegated
                   }) => {

    const styles = STYLES[size];

    return (

        <Wrapper>
            <InputIcon id={icon} size={styles.iconSize} strokeWidth={styles.strokeWidth}/>
            <VisuallyHidden>{label}</VisuallyHidden>
            <Input style={{
                '--height': styles.height + 'px',
                '--width': width + 'px',
                '--border-thickness': styles.borderThickness + 'px',
                '--font-size': (styles.fontSize / 16) + 'rem'
            }} {...delegated}/>
        </Wrapper>
    );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  display: block;

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputIcon = styled(Icon)`
  color: inherit;
  margin: auto 0;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  top: 0;
`;

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  height: var(--height);
  padding-left: var(--height);
  position: relative;
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 4px;
  }
`;

export default IconInput;
