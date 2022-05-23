import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export type FrontMatter = {
  title: string;
  description: string;
  publishedDate: string;
  tags: string[];
};

export type Article = {
  slug: string;
  frontmatter: FrontMatter;
};

export const getArticles = (): Article[] => {
  const files = fs.readdirSync(path.join(root, 'articles'));

  return files.map((file): Article => {
    const fileContent = fs.readFileSync(
      path.join(root, `articles/${file}`),
      'utf-8'
    );
    const { data } = matter(fileContent);

    return {
      slug: file.replace('.md', ''),
      frontmatter: data as FrontMatter
    };
  });
};

export const getArticleBySlug = async (slug: string) => {
  const fileContent = fs.readFileSync(
    path.join(root, `articles/${slug}.md`),
    'utf-8'
  );
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as FrontMatter,
    markdownBody: content
  };
};
