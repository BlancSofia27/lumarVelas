import React, { useState } from 'react';
import { Button, Typography, Input, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // Icono de subida

const FileUpload = ({ onFileSelect }: { onFileSelect: (file: File) => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Maneja la selección de archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
      onFileSelect(file); // Pasa el archivo al componente principal
    }
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Input
        accept="image/*"
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        sx={{ display: 'none' }} // Ocultamos el input real
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: '#1976d2', // Color personalizado
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '16px',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#1565c0', // Color al pasar el mouse
            },
          }}
        >
          Seleccionar Archivo
        </Button>
      </label>

      {/* Muestra el nombre del archivo seleccionado */}
      {selectedFile && (
        <Typography sx={{ marginTop: 2 }} color="text.secondary">
          {selectedFile.name}
        </Typography>
      )}
    </Box>
  );
};

export default FileUpload;
