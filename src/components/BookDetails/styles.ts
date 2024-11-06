import { styled } from '../../stitches.config'

export const BookDetailsContainer = styled('div', {
  height: '100vh',
  width: '41.25rem',

  display: 'flex',
  flexDirection: 'column',

  padding: '4rem 3rem',
  background: '$gray-800',

  marginLeft: 'auto',
})

export const BookInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '$4',
  borderRadius: '$md',

  width: '35.25rem',
  height: '26rem',
  padding: '$6 $8 $4 $8',
  gap: '$10',

  background: '$gray-700',
})

export const BookInfoMain = styled('div', {
  display: 'flex',
  gap: '$8',
  width: '31.25rem',

  div: {
    height: '13rem',
    justifyContent: 'space-between',
  },
})

export const BookInfoFooter = styled('div', {
  height: '5.75rem',
  width: '31.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '3.5rem',

  borderTop: '1px solid $gray-600',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    svg: {
      color: '$green-100',

      span: {
        display: 'flex',
        flexDirection: 'column',

        '> p': {
          color: '$gray-300',
        },
        '> strong': {
          color: '$gray-200',
        },
      },
    },
  },
})

export const CommentsHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '35.25rem',
  marginTop: '$10',

  p: {
    color: '$gray-200',
  },

  button: {
    all: ' unset',
    color: '$purple-100',

    '&:hover': {
      color: '$green-100',
      cursor: 'pointer',
    },
  },
})

export const CommentBoxesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$4',
  gap: '$4',
})

export const CommentBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  width: '35.25rem',
  height: '13rem',
  padding: '$6',
  background: '$gray-700',
  borderRadius: '$md',
})
