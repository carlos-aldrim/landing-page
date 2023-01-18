import React from 'react';
import { PageContainer } from '../../../components/PageContainer';
import { useStyles } from './Home.styles';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Logo from '../../../assets/icon/Logo.svg';
import Slide1 from '../../../assets/img/slide1.jpg';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import { Comment } from '../../../components/Comment';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const [list, setList] = React.useState(false);
  const [name] = React.useState('Aldrim');
  const styles = useStyles();
  const navigate = useNavigate();

  const fadeImages = [
    'https://img.freepik.com/fotos-gratis/foto-de-foco-seletivo-dos-ramos-de-erva-doce-nas-colinas_181624-39484.jpg?w=740&t=st=1673712543~exp=1673713143~hmac=d870d874b0d987c6c61e7439926c9672690cabecad9b8507a37161b0804d078f',
    'https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg?w=740&t=st=1673714028~exp=1673714628~hmac=fc9a23a67e125f7f5b0d2401bccec7361bde4044960627e7cd072d4be6a958b7',
    'https://img.freepik.com/fotos-gratis/pier-em-um-lago-em-hallstatt-austria_181624-44201.jpg?w=740&t=st=1673712408~exp=1673713008~hmac=50e7c23976caba1e708ceb6612b79ba46488ddbed618b99776bdbd97ef28c14e',
    'https://img.freepik.com/fotos-gratis/ponte-de-madeira-cercada-pelo-mar-e-morros-cobertos-de-verde-sob-um-ceu-azul-no-brasil_181624-16705.jpg?w=740&t=st=1673714071~exp=1673714671~hmac=abff915c477ccb0deeb8fc4379a19018cb458d2bcee0e7ce4d1eda8630b8033a',
  ];

  const onListButtomClick = () => {
    if (list === false) {
      setList(true);
    } else {
      setList(false);
    }
  };

  return (
    <PageContainer className={styles.container}>
      <Header name={name} onClick={onListButtomClick} />
      <Box
        sx={{ display: list === false ? 'none' : 'flex' }}
        className={styles.list}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton className={styles.itemButtom}>
              <ListItemText primary='Item 1' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.itemButtom}>
              <ListItemText primary='Item 2' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.itemButtom}>
              <ListItemText primary='Item 3' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box onClick={list === true ? onListButtomClick : undefined}>
        <Box id='first-section' className={styles.firstSection}>
          <Box>
            <Typography className={styles.text}>Eu sou Carlos,</Typography>
            <Typography className={styles.subtext}>
              Estudante de Sistemas de Informação na Universidade Federal do Ceará no Campus de Crateús, e atualmente, Desenvolvedor Front-End.
            </Typography>
            <Button className={styles.button} href='https://github.com/Carlos-Melo3' >Veja mais</Button>
          </Box>
          <Box className={styles.logo}>
            <img src={Logo} alt='Logo' />
          </Box>
        </Box>
        <Box id='second-section' className={styles.secondSection}>
          <Box className={styles.titleSelection}>
            <Typography>Coleções</Typography>
          </Box>
          <Fade indicators={true}>
            {fadeImages.map((fadeImage) => (
              <Box>
                <img src={fadeImage} alt='slide' />
              </Box>
            ))}
          </Fade>
        </Box>
        <Box id='third-section' className={styles.thirdSection}>
          <Box className={styles.titleSelection}>
            <Typography>Comentários</Typography>
          </Box>
          <Box className={styles.comments}>
            <Comment
              name={'Nome usuário'}
              user={'@user123'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac semper quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
              }
              className={styles.subComment}
            />
            <Comment
              name={'Nome usuário'}
              user={'@user123'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac semper quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
              }
              className={styles.comment}
            />
            <Comment
              name={'Nome usuário'}
              user={'@user123'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac semper quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
              }
              className={styles.subComment}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </PageContainer>
  );
};
