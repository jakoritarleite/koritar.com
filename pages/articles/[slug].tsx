import { Page } from 'next';
import ReactMarkdown from 'react-markdown';
import articleLayout, { BaseProps } from '../../components/layouts/article';
import { getArticles, getArticleBySlug } from '../../lib/articles';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticProps({
  params
}: {
  params: IParams;
}): Promise<{ props: BaseProps }> {
  const { frontmatter, markdownBody } = await getArticleBySlug(params.slug);

  return {
    props: {
      frontmatter,
      markdownBody
    }
  };
}

export async function getStaticPaths() {
  const articles = getArticles();

  return {
    paths: articles.map(article => ({ params: { slug: article.slug } })),
    fallback: false
  };
}

const Article: Page<BaseProps> = props => {
  const { frontmatter, markdownBody } = props;

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta content={frontmatter.title} property="og:title" />
        <meta content={frontmatter.description} name="description" />
        <meta content={frontmatter.description} property="og:description" />
      </Head>
      <ReactMarkdown>{markdownBody}</ReactMarkdown>
    </>
  );
};

Article.getLayout = articleLayout;
export default Article;
