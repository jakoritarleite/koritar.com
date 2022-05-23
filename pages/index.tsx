import { styled } from '../stitches.config';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import { Wrapper } from '../components/Wrapper';
import { Main, Container, Content } from '../components/Posts';
import { Spotify } from '../components/Icons/Spotify';

const Index: NextPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Home>
        <Content>
          <Container>
            <div>
              <Title>João Koritar</Title>
              <Job>
                Software engineer at WATT.io. <br />
                <span
                  style={{
                    color: 'rgba(255, 255, 255, .5)',
                    fontWeight: 'normal'
                  }}
                >
                  Building sofware that can change the world.
                </span>
              </Job>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Spotify />
                <span
                  style={{
                    marginLeft: '10px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  Not Playing
                </span>{' '}
                - <span style={{ color: '#959595' }}>Spotify</span>
              </div>
            </div>
          </Container>
        </Content>
      </Home>
    </Wrapper>
  );
};

export default Index;

const Home = styled(Main, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 }
});

const Title = styled('h1', {
  fontFamily: 'Inter',
  fontSize: '48px',
  fontWeight: 800,
  color: '$primary'
});

const Job = styled('p', {
  fontWeight: 'medium',
  color: 'white'
});
