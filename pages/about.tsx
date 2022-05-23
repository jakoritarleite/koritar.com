import Head from 'next/head';
import type { Page } from 'next';
import baseLayout, { BaseProps } from '../components/layouts/base';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Paragraph } from '../components/Paragraph';

type AboutProps = BaseProps & {
  description: string;
};

type Job = {
  title: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  location: string;
};

export async function getStaticProps(): Promise<{ props: AboutProps }> {
  return {
    props: {
      title: 'About | Koritar',
      description: 'Koritar gostoso',
      tagline: 'Think. Code. Inovate. Publish.',
      color: { primary: '#595CFF', secondary: '#F8ACFF' }
    }
  };
}

const About: Page<AboutProps> = props => {
  const { title, description } = props;
  const jobs: Array<Job> = [
    {
      title: 'Sofware engineer',
      company: 'WATT.io',
      companyUrl: 'https://www.wattio.com.br',
      startDate: 'June 2021',
      endDate: 'Present',
      location: 'Minas Gerais, Brazil'
    },
    {
      title: 'Backend analyst',
      company: 'DataReal',
      companyUrl: '',
      startDate: 'March 2020',
      endDate: 'May 2021',
      location: 'Santa Catarina, Brazil'
    }
  ];

  function createJobElement(job: Job, index: number): JSX.Element {
    return (
      <div style={{ marginBottom: '40px' }} key={index}>
        <h3>{job.title}</h3>
        <span>
          <a style={{ color: 'white' }} href={job.companyUrl}>
            {job.company}
          </a>{' '}
          • {job.location}
        </span>
        <br />
        <span>
          {job.startDate} -- {job.endDate}
        </span>
      </div>
    );
  }

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
            <strong>Hey, I&apos;m João Koritar</strong>, I&apos;ve started in
            this world when I was 11yo by hacking some Android ROMs and apps
            because I wanted to install Android KitKat on my old tablet. After
            that I became interested by everything in this field, from game
            development, to deeply understanding how microcontrollers works.
          </Paragraph>
          <Paragraph
            css={{
              marginTop: '25px'
            }}
          >
            I&apos;m currently working as a <strong>Sofware Engineer</strong> at
            WATT.io. Before that, I worked as a backend analyst at DataReal. I
            currently live in <strong>Minas Gerais, Brazil.</strong>
          </Paragraph>
          <Paragraph
            css={{
              marginTop: '25px'
            }}
          >
            My passions are <strong>decentralized technologies</strong>, open
            source, side projects, and everything that is related to
            technologies. On my free time I like to ride bike, go out with my
            friends, and of course play some games with my homies.
          </Paragraph>
        </Section>
      </Container>
      <h2>Career</h2>
      {jobs.map((job, index) => createJobElement(job, index))}
    </>
  );
};

About.getLayout = baseLayout;
export default About;
