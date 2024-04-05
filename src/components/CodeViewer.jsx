import React, { useState } from 'react';
import { Paper, Typography, Divider, IconButton, MenuItem, Select } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ContentCopy } from '@mui/icons-material';

const CodeViewer = ({ files }) => {
  const [language, setLanguage] = useState(files[0].language);

  const handleCopy = () => {
    // Lógica para copiar el código al portapapeles
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const selectedFile = files.find(file => file.language === language);
  const code = selectedFile ? selectedFile.code : '';

  // Determinar si el código tiene más de 50 líneas
  const lines = code.split('\n');
  const hasScrollbar = lines.length > 20;

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 8, fontFamily: 'Menlo, Monaco, "Courier New", monospace', fontSize: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <Typography variant="h6" gutterBottom>
          Código
        </Typography>
       
        <div style={{ marginBottom: '8px', marginLeft:'40%'}}>
        <Select value={language} onChange={handleChangeLanguage} style={{ fontSize: '14px' }}>
          {files.map(file => (
            <MenuItem key={file.language} value={file.language}>{file.label}</MenuItem>
          ))}
        </Select>
      </div>
      </div>
      <Divider sx={{ my: 1 }} />
      <pre style={{ overflowY: hasScrollbar ? 'scroll' : 'auto', maxHeight: hasScrollbar ? '400px' : 'none', padding: '0px', margin: '0px'}}>
        <code className={`language-${language}`} style={{ lineHeight: '20px', padding: '0px', margin: '0px' }}>{code}</code>
      </pre>
      <CopyToClipboard text={code}>
        <IconButton onClick={handleCopy} size="small" disabled={!code} style={{ marginTop: '8px' }}>
          <ContentCopy />
        </IconButton>
      </CopyToClipboard>
    </Paper>
  );
};


export default CodeViewer;
