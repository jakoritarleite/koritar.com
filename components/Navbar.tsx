import { styled } from '../stitches.config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutGroup, motion } from 'framer-motion';

enum ItemBehaviour {
  ExternalLink,
  InternalPage
}

type Item = {
  name: string;
  path: string;
  behaviour: ItemBehaviour;
};

export default function Navbar() {
  const router = useRouter();
  const navItems: Array<Item> = [
    {
      name: 'Home',
      path: '/',
      behaviour: ItemBehaviour.InternalPage
    },
    {
      name: 'About',
      path: '/about',
      behaviour: ItemBehaviour.InternalPage
    },
    {
      name: 'Projects',
      path: '/projects',
      behaviour: ItemBehaviour.InternalPage
    },
    {
      name: 'Articles',
      path: '/articles',
      behaviour: ItemBehaviour.InternalPage
    },
    {
      name: 'GitHub',
      path: 'https://github.com/jakoritarleite',
      behaviour: ItemBehaviour.ExternalLink
    },
    {
      name: 'Twitter',
      path: 'https://twitter.com/koritarsa',
      behaviour: ItemBehaviour.ExternalLink
    },
    {
      name: 'Opensea',
      path: 'https://opensea.io/koritarsa',
      behaviour: ItemBehaviour.ExternalLink
    }
  ];

  function createInternalPage(page: Item): JSX.Element {
    return (
      <li key={page.name}>
        <Link href={page.path} passHref>
          <NavItem css={router.pathname == page.path ? { color: 'white' } : {}}>
            {page.name}
          </NavItem>
        </Link>
      </li>
    );
  }

  function createExternalLink(item: Item): JSX.Element {
    return (
      <li key={item.name}>
        <ExternalLink href={item.path} target="_blank" rel="noreferrer">
          <NavItem>{item.name} ↗</NavItem>
        </ExternalLink>
      </li>
    );
  }

  return (
    <LayoutGroup>
      <Header>
        <Link href="/" passHref>
          <Logo>Koritar</Logo>
        </Link>

        <Nav>
          <List>
            {navItems.map(item => {
              switch (item.behaviour) {
                case ItemBehaviour.InternalPage:
                  return createInternalPage(item);
                case ItemBehaviour.ExternalLink:
                  return createExternalLink(item);
              }
            })}
          </List>
        </Nav>

        <AsideButton>
          <ExternalLink
            href="/static/files/resume.pdf"
            target="_blank"
            rel="noreferrer"
            css={{ color: 'white' }}
          >
            Resume ↓
          </ExternalLink>
        </AsideButton>
      </Header>
    </LayoutGroup>
  );
}

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  minHeight: '72px',
  width: '100%',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '0',
  zIndex: '3',
  '@bp3': { paddingTop: '15px' }
});

const Logo = styled('div', {
  color: 'white',
  cursor: 'pointer',
  fontFamily: '$logo',
  fontWeight: 'bold',
  fontSize: '25px',
  marginLeft: '20px',
  textTransform: 'uppercase'
});

const AsideButton = styled('div', {
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'Inter',
  fontWeight: 'bold',
  fontSize: '17px',
  marginLeft: 'auto',
  marginRight: '20px'
});

const Nav = styled('nav', {
  textAlign: 'center',
  flex: 1,
  order: 2,
  flexBasis: '100%',
  '@bp2': { order: 0, flexBasis: 'initial' },
  '@bp3': { overflowX: 'scroll', overflowY: 'hidden' }
});

const List = styled('ul', {
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'inline-flex',
  position: 'relative',
  width: '800px',
  '@bp1': { justifyContent: 'space-around' }
});

const ExternalLink = styled('a', {
  textDecoration: 'none',
  textDecorationLine: 'none',
  border: 'none',
  color: 'rgba(255, 255, 255, .75)',
  transition: 'opacity $duration ease-in-out',
  '&:hover, &:focus': {
    opacity: '1'
  }
});

const NavItem = styled(motion.span, {
  color: 'rgba(255, 255, 255, .75)',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '17px',
  fontWeight: 'bold',
  padding: '20px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'color $duration ease-in-out',
  '&:hover': {
    color: 'white'
  }
});
