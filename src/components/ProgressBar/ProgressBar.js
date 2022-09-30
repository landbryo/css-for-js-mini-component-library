/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from "../../constants";

const ProgressBar = ({value, size}) => {
    let Component;

    switch (size) {
        case 'large':
            Component = ProgressLarge
            break;
        case 'medium':
            Component = ProgressMedium
            break;
        case 'small':
            Component = ProgressSmall
            break;
        default:
            throw new Error(`Unrecognized size: ${size}`);
    }

    return <Component aria-label="Progress Bar" max="100" value={value}></Component>;
};

const ProgressBase = styled.progress`
  -webkit-appearance: none;
  appearance: none;

  max-width: 100%;
  width: 100%;

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: 4px;
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
    border-radius: ${p => p.value > 98 && '4px'}
  }
`;

const ProgressSmall = styled(ProgressBase)`
  height: 8px;
`;

const ProgressMedium = styled(ProgressBase)`
  height: 12px;
`;

const ProgressLarge = styled(ProgressBase)`
  height: 24px;

  &::-webkit-progress-bar {
    border-radius: 8px;
    padding: 4px;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
