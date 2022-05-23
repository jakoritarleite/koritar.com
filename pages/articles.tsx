import Head from 'next/head';
import type { Page } from 'next';
import Link from 'next/link';
import { getArticles, Article } from '../lib/articles';
import baseLayout, { BaseProps } from '../components/layouts/base';
import { Section } from '../components/Section';
import { Paragraph } from '../components/Paragraph';
import { Container } from '../components/Container';

type ArticlesProps = BaseProps & {
  description: string;
  articles: Array<Article>;
};

export async function getStaticProps(): Promise<{ props: ArticlesProps }> {
  return {
    props: {
      title: 'Articles | Koritar',
      description: 'Articles page',
      tagline: 'Learn. Help. Improve.',
      articles: getArticles(),
      color: { primary: '#FBD07C', secondary: '#F7F779' }
    }
  };
}

const Articles: Page<ArticlesProps> = props => {
  const { title, description, articles } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://koritar.com/about" property="og:url" />
      </Head>
      <Container>
        <Section>
          <Paragraph>
            I&apos;m <strong>not</strong> that good on writing and expressing my
            thoughts and feelings as most people, but I&apos;m working hard to
            improve it. And here you can find some of the articles I write.
          </Paragraph>
        </Section>
      </Container>
      <h2>Articles</h2>
      {articles.map(article => {
        return (
          <div
            style={{
              opacity: '.8',
              marginTop: '20px',
              marginBottom: '25px',
              fontSize: '18px'
            }}
            key={article.slug}
          >
            <Link style={{}} href={`/articles/${article.slug}`}>
              {article.frontmatter.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

Articles.getLayout = baseLayout;
export default Articles;
