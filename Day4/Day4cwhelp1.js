import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Day4cwhelp1() {
  return (
    <Box
      component="form"
      sx={{c
        '& > :not(style)': { m: 1, width: '25h' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Name" variant="filled" />
    </Box>
  );
}