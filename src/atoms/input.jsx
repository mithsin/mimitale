import styled from '@emotion/styled'
import { FormHelperText, TextField } from '@mui/material';

const InputWrap = styled.div`
  width: 100%;
`;
const ErrorText = styled(FormHelperText)`
  font-size: 1rem;
  color: red;
  font-weight: 600;
`;

export const InputStandard = ({
  label,
  id,
  error,
  required,
  onChange,
  ...restProps
}) => {
  return (
    <InputWrap>
      <TextField 
        fullWidth 
        hiddenLabel
        label={label}
        id={id}
        required={required}
        margin="dense"
        error={error}
        {...restProps}
        inputProps={{...restProps}}
        onChange={onChange}/>
      {error && <ErrorText id="component-error-text">please check format</ErrorText>}
    </InputWrap>
  )
};

export const InputBorder = ({
  label,
  id,
  error,
  required,
  onChange,
  ...restProps
}) => {
  return (
    <InputWrap>
      <TextField
        fullWidth 
        hiddenLabel
        label={label}
        id={id}
        required={required}
        defaultValue="Normal"
        variant="filled"
        margin="dense"
        error={error}
        {...restProps}
        inputProps={{...restProps}}
        onChange={onChange}
      />
      {error && <FormHelperText id="component-error-text">please check format</FormHelperText>}
    </InputWrap>
  )
};