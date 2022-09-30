import React from 'react';
import styled from 'styled-components';
import {getDisplayedValue} from './Select.helpers';
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";

import {COLORS} from "../../constants";

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);
    const width = (8 * displayedValue.length) + 64 + 'px';

    return (
        <Wrapper>
            <VisuallyHidden>
                <label>{label}</label>
            </VisuallyHidden>
            <SelectInput width={width} value={value} onChange={onChange}>
                {children}
            </SelectInput>
            <Arrow id="chevron-down" size="24" strokeWidth="2" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  position: relative;
  width: max-content;
`;

const SelectInput = styled.select`
  background: none;
  border: none;
  border-radius: 8px;
  color: inherit;
  font-size: 1rem;
  padding: 12px 16px;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: ${p => p.width};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const Arrow = styled(Icon)`
  color: inherit;
  pointer-events: none;
  position: absolute;
  right: 16px;
  top: 14px;
  
  ${SelectInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
