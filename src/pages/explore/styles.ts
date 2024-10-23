import { Binoculars } from 'phosphor-react'
import { styled } from '../../stitches.config'

export const ExploreContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 6rem 0 0',
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
})

export const TitleContainer = styled('div', {
  display: 'flex',
  gap: '31rem',
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
})

export const ExploreContent = styled('main', {
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '73rem',
  gap: '$5',
})

export const StyledBinocular = styled(Binoculars, {
  color: '$green-100',
})
