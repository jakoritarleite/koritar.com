import { ReactNode } from 'react';
import Navbar from '../Navbar';
import { Wrapper } from '../Wrapper';
import {
  Main,
  Content,
  ContentTitle,
  ContentSubtitle,
  Container,
  Date
} from '../Posts';
import { FrontMatter } from '../../lib/articles';

export type BaseProps = {
  frontmatter: FrontMatter;
  markdownBody: string;
};

export default function articleLayout(page: ReactNode, pageProps: BaseProps) {
  const { title, publishedDate } = pageProps.frontmatter;

  return (
    <Wrapper>
      <Navbar />
      <Main>
        <Content>
          <Container>
            <div>
              <ContentTitle>{title}</ContentTitle>
              <ContentSubtitle>
                <Date dateString={publishedDate} />
              </ContentSubtitle>
            </div>

            {page}
          </Container>
        </Content>
      </Main>
    </Wrapper>
  );
}
