import React from 'react';
import { Button, Container, Grid, Divider, Typography, InputAdornment } from '@mui/material';
import { Twitter, Facebook, LinkedIn, Instagram, YouTube, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="page-footer" style={{ overflow: 'hidden' }}>
      <style>
      </style>
      <div className="footer">
      <section className="section" style={{ backgroundColor: '#3E3C68', marginTop: '50px', marginBottom: '20px' }}>
  <Container maxWidth="md">
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={6}>
        <div className="stay-before">
          <div className="subscribe-container">
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src="https://www.cambiagro.com.sv/static/version1709849609/frontend/Cambiagro/default/es_CL/images/leaf.png" alt="disagro-plant" />
      </Grid>
    </Grid>
  </Container>
</section>
<section className="section py-5" style={{marginBottom: '20px' }}>
  <Container maxWidth="md">
    <Grid container justifyContent="center" alignItems="center">
      <Button href="https://www.twitter.com/cambiagro" target="_blank" rel="noopener">
        <Twitter fontSize="large" style={{ color: '#1CCC1D' }} />
      </Button>
      <Divider orientation="vertical" flexItem style={{ marginLeft: '10px', marginRight: '10px', height: '40px', backgroundColor: '#1CCC1D' }} />
      <Button href="https://www.facebook.com/cambiagro" target="_blank" rel="noopener">
        <Facebook fontSize="large" style={{ color: '#1CCC1D' }} />
      </Button>
      <Divider orientation="vertical" flexItem style={{ marginLeft: '10px', marginRight: '10px', height: '40px', backgroundColor: '#1CCC1D' }} />
      <Button href="https://www.linkedin.com/company/cambiagro" target="_blank" rel="noopener">
        <LinkedIn fontSize="large" style={{ color: '#1CCC1D' }} />
      </Button>
      <Divider orientation="vertical" flexItem style={{ marginLeft: '10px', marginRight: '10px', height: '40px', backgroundColor: '#1CCC1D' }} />
      <Button href="https://www.instagram.com/cambiagro" target="_blank" rel="noopener">
        <Instagram fontSize="large" style={{ color: '#1CCC1D' }} />
      </Button>
      <Divider orientation="vertical" flexItem style={{ marginLeft: '10px', marginRight: '10px', height: '40px', backgroundColor: '#1CCC1D' }} />
      <Button href="https://www.youtube.com/channel/UC5smQHnlR2OoMuB-bnlT0XQ?view_as=subscriber" target="_blank" rel="noopener">
        <YouTube fontSize="large" style={{ color: '#1CCC1D' }} />
      </Button>
    </Grid>
  </Container>
</section>
<section style={{ backgroundColor: '#0F1322',padding: '30px'  }}>
  <Container maxWidth="lg">
    <Typography variant="h1" component="h1" gutterBottom style={{ fontFamily: 'MarkPro, sans-serif', fontSize: '16px',  color: '#FFFFFF'}}>
      ACERCA DE NOSOTROS
    </Typography>
    <Grid container>
      <Grid item xs={12} md={8 }>
        <Typography variant="subtitle1" gutterBottom style={{ fontFamily: 'MarkPro, sans-serif', fontSize: '14px', color: '#FFFFFF'}}>
          Cambiagro es una plataforma digital diseñada para aquellos miembros del mundo agrícola con una visión de desarrollo a través del mundo digital. Cambiagro ofrece las funcionalidades, los productos y el conocimiento experto, para alcanzar la excelencia en los cultivos y obtener los mejores resultados financieros en su agro negocio. Es el espacio en el que ponemos a su disposición los recursos y las herramientas para hacer crecer su agro negocio.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
        <img src="https://www.cambiagro.com.sv/static/version1709849609/frontend/Cambiagro/default/es_CL/images/cambiagro-disagro-footer.png" alt="Cambiagro Disagro" className="footer-logo" />
        <Typography variant="subtitle1" gutterBottom style={{ fontFamily: 'MarkPro, sans-serif', fontSize: '16px' }}>
          Copyright © 2013 Magento, Inc. Todos los derechos reservados.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</section>

      </div>
    </footer>
  );
};

export default Footer;
