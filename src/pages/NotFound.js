import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Container, Box } from '@mui/material';

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

function NotFound() {
    return (
        <>
            <Helmet>
                <title>Oops!</title>
            </Helmet>

            <Container>
                <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Box
                        component="img"
                        src="/assets/illustrations/404.svg"
                        sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                    />

                    <Button to="/" size="large" variant="contained" color="warning" component={RouterLink}>
                        go back
                    </Button>

                </StyledContent>
            </Container>

        </>
    );
}

export default NotFound;