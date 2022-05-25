import { styled } from '../stitches.config';
import Head from 'next/head';
import type { Page } from 'next';
import baseLayout, { BaseProps } from '../components/layouts/base';
import { Section } from '../components/Section';
import { Paragraph } from '../components/Paragraph';
import { Container } from '../components/Container';

type ProjectsProps = BaseProps & {
  description: string;
};

type Project = {
  name: string;
  description: string;
  repo_link: string;
};

export async function getStaticProps(): Promise<{ props: ProjectsProps }> {
  return {
    props: {
      title: 'Projects | Koritar',
      description: 'Projects page',
      tagline: 'Work. Study. Open Source.',
      color: { primary: '#EF709B', secondary: '#FA9372' }
    }
  };
}

const Projects: Page<ProjectsProps> = props => {
  const { title, description } = props;
  const projects: Array<Project> = [
    {
      name: 'blockchain',
      description: 'Basic P2P blockchain implementation in Rust lang.',
      repo_link: 'https://github.com/jakoritarleite/blockchain'
    },
    {
      name: 'weird-pixels',
      description: 'ERC-721 Contract of the Weird Pixel NFT collection.',
      repo_link: 'https://github.com/jakoritarleite/weird-pixels'
    },
    {
      name: 'marcys',
      description:
        'Monitor your VPN machine resources with this full stack project.',
      repo_link: 'https://github.com/aprade/marcys'
    },
    {
      name: 'svcontent-interface',
      description:
        'Web3 project where people can share visual visual stimulation content through the Solana Blockchain.',
      repo_link: 'https://github.com/jakoritarleite/svcontent-interface'
    },
    {
      name: 'nftiguess',
      description: 'Web3 app to mint your own NFT collection.',
      repo_link: 'https://github.com/jakoritarleite/nftiguess'
    },
    {
      name: 'minigrep',
      description: 'Mini clone of the grep(1) command in Rust.',
      repo_link: 'https://github.com/jakoritarleite/minigrep'
    }
  ];

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
            <strong>I love</strong> building and thinking about new projects on
            my free time, all of them are open source, but I don&apos;t have
            much time to maintain or finish most of them.
          </Paragraph>
        </Section>
      </Container>
      <h2>Projects</h2>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <h3>
              <a style={{ textDecoration: 'none' }} href={project.repo_link}>
                {project.name}
              </a>
              &nbsp;↗
            </h3>
            <span>{project.description}</span>
          </div>
        );
      })}
    </>
  );
};

Projects.getLayout = baseLayout;
export default Projects;
