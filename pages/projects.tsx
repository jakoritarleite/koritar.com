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
  used_techs: Array<string>;
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
      description: 'Basic P2P blockchain implementation',
      used_techs: ['Rust'],
      repo_link: 'https://github.com/jakoritarleite/blockchain'
    },
    {
      name: 'weird-pixels',
      description: 'ERC-721 Contract of the Weird Pixel NFT collection',
      used_techs: ['Solidity', 'Typescript'],
      repo_link: 'https://github.com/jakoritarleite/weird-pixels'
    },
    {
      name: 'marcys',
      description:
        'Monitor your VPN machine resources with this full stack project.',
      used_techs: ['Rust'],
      repo_link: 'https://github.com/aprade/marcys'
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
      {/* TODO: CHANGE THE DESIGN OF THE PROJECT BLOCKS */}
      {projects.map((project, index) => {
        return (
          <ProjectContainer key={index}>
            <ProjectTitle>
              <ProjectRepoLink href={project.repo_link}>
                {project.name}
              </ProjectRepoLink>
            </ProjectTitle>
            <span>{project.description}</span>
            <ProjectTechs>
              {project.used_techs.map((tech, index) => {
                return <ProjectTech key={index}>{tech}</ProjectTech>;
              })}
            </ProjectTechs>
          </ProjectContainer>
        );
      })}
    </>
  );
};

const ProjectContainer = styled('div', {
  background: 'rgba(255, 255, 255, .07)',
  width: '100%',
  marginBottom: '40px',
  paddingInline: '25px',
  borderRadius: '10px'
});

const ProjectTitle = styled('h3', {
  paddingTop: '25px'
});

const ProjectRepoLink = styled('a', {
  textDecoration: 'none',
  border: 'none'
});

const ProjectTechs = styled('div', {
  display: 'flex',
  paddingTop: '20px',
  paddingBottom: '25px'
});

const ProjectTech = styled('div', {
  backgroundColor: '#383636',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingInline: '10px',
  borderRadius: '10px',
  marginRight: '18px'
});

Projects.getLayout = baseLayout;
export default Projects;
