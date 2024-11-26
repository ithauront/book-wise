import { Binoculars } from 'phosphor-react'
import { styled } from '../../stitches.config'

export const ExploreContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 6rem 0 0',
  '@media(max-width: 768px)': {
    flexDirection: 'column',

    '>:first-child': {
      marginLeft: '1rem',
      height: '20rem',
      width: '100vw',
    },
  },
})

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '4.5rem 6rem',
  gap: '$10',
})

export const SearchTopicsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '$3',
  maxWidth: '62.25rem',
  flexWrap: 'wrap',

  '@media(max-width: 768px)': {
    width: '100vw',
    height: '13rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
    gap: '$2',
    justifyContent: 'center',
    marginLeft: '-4rem',
  },
})

export const TitleContainer = styled('div', {
  display: 'flex',
  marginRight: '1.5rem',

  alignItems: 'center',
  justifyContent: 'space-between',

  '> p': {
    display: 'flex',
    gap: '$3',
    color: '$gray-100',
    fontWeight: '$bold',
    fontSize: '$2xl',
  },
  '> :last-child': {
    width: '27rem',
  },
  '@media(max-width: 768px)': {
    flexDirection: 'column',
    marginLeft: '8rem',
    '> :last-child': {
      width: '15rem',
    },
  },
})

export const ExploreContent = styled('main', {
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '73rem',
  gap: '$5',
  '@media(max-width: 768px)': {
    width: '100vw',
    height: '13rem',
    gap: '$2',
    justifyContent: 'center',
    marginLeft: '-5rem',
  },
})

export const StyledBinocular = styled(Binoculars, {
  color: '$green-100',
})
