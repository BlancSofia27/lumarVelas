import React, { ChangeEvent } from 'react';
import { Box, Button } from '@mui/material';

const FileUpload = ({ onFileSelect }: { onFileSelect: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* Input HTML estándar */}
      <input
        accept="image/*"
        type="file"
        id="file-upload"
        onChange={onFileSelect}
        style={{ display: 'none' }}  // Ocultar el input real
      />
      {/* Label para hacer clic y activar el input */}
      <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          Subir Imagen
        </Button>
      </label>
    </Box>
  );
};

export default FileUpload;
