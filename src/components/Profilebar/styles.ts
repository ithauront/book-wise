import { styled } from '../../stitches.config'

export const ProfilebarContainer = styled('div', {
  width: '19rem',
  borderRadius: '$md',
  borderLeft: '1px solid $gray-700',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '$8',
})

export const UserHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  h3: {
    fontSize: '$xl',
  },
  p: {
    fontSize: '$sm',
    color: '$gray-400',
  },
})

export const Separator = styled('div', {
  width: '2rem',
  borderRadius: '$full',
  height: '0.25rem',
  background: '$gradient-horizontal',
  display: 'block',
  boxSizing: 'border-box',
})

export const ProfileInfo = styled('div', {
  width: '10.5rem',
  height: '2.75rem',

  display: 'flex',
  gap: '$5',
  justifyContent: 'flex-start',
  alignItems: 'center',

  div: {
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',

    p: {
      color: '$gray-300',
      fontSize: '$sm',
    },
  },

  svg: {
    color: '$green-100',
  },
})
