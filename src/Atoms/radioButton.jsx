import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import styled from '@emotion/styled'

const RadioGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #c0c0c0;
    margin: .5rem 0 1rem;
`;

const RadioWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const FormTitle = styled(FormLabel)`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const RadioButtonsGroup = ({
    title,
    name,
    contentList,
    ...resProps
}) => {
  return (
    <RadioGroupWrapper>
      <FormTitle id={`radio-button-${name}`}>{title}</FormTitle>
      <RadioGroup
        aria-labelledby={`radio-button-${name}`}
        
        name={name}
        {...resProps}
      >
        <RadioWrapper>
          {
              contentList.map((item)=>
                  <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)
          }
        </RadioWrapper>
      </RadioGroup>
    </RadioGroupWrapper>
  );
}