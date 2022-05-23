import { ReactNode } from 'react';
import Navbar from '../Navbar';
import { Wrapper } from '../Wrapper';
import { Main, Content, Container } from '../Posts';
import { styled } from '../../stitches.config';

export type BaseProps = {
  title: string;
  tagline: string;
  color: {
    primary: string;
    secondary: string;
  };
};

export default function baseLayout<T = BaseProps>(
  page: ReactNode,
  pageProps: BaseProps
) {
  const { title, tagline, color } = pageProps;

  return (
    <Wrapper>
      <Navbar />
      <Main
        css={{
          '&::selection': {
            background: `$${color.primary}`
            // color: '#000',
            // WebkitTextFillColor: '#000'
          }
        }}
      >
        <Content>
          <Container>
            <GradientTitle
              css={{
                backgroundImage: `linear-gradient(269.78deg, ${color.secondary} 0.1%, ${color.primary} 99.93%);`
              }}
            >
              {tagline}
            </GradientTitle>
            {page}
          </Container>
        </Content>
      </Main>
    </Wrapper>
  );
}

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone'
});
