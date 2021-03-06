import { styled } from '../../stitches.config';
import { Title } from './Title';
import { Subtitle } from './Subtitle';

export const Content = styled('div', {
  fontSize: '16px',
  lineHeight: '32px',
  color: '$secondary',
  background: '$background',
  position: 'relative',
  zIndex: 1,
  height: '100%',
  padding: '20px 0',
  '& .iframe-wrap': {
    height: '0',
    marginBottom: '20px',
    overflow: 'hidden',
    paddingBottom: '56.25%',
    paddingTop: '30px',
    position: 'relative'
  },
  '& .iframe-wrap iframe': {
    border: '0',
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%'
  },
  '& .post-image-caption': {
    color: '$secondary',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '14px'
  },
  '& .post-image-full': {
    margin: '20px 0 0',
    maxWidth: 'initial',
    width: '70vw',
    '@bp2': {
      marginLeft: 'calc(-1 * (70vw - 760px) / 2)'
    },
    '@bp4': {
      marginLeft: 0
    }
  }
});

export const ContentTitle = styled(Title, {
  color: '$primary',
  margin: '90px auto 0',
  maxWidth: 'none',
  fontSize: '45px',
  lineHeight: '60px',
  textAlign: 'center',
  '@bp2': {
    marginTop: 0
  }
});

export const ContentSubtitle = styled(Subtitle, {
  color: '$secondary',
  fontSize: '16px',
  margin: '0 0 60px'
});
