/* eslint import/prefer-default-export: 0 */
import styled from 'styled-components'

export const P = styled.p`
  margin-bottom: 0.5em;
  font-size: 1.6rem;
  line-height: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`
export const Span = styled.span`
  font-size: 1.6rem;
  line-height: 1.5em;
`

export const H1 = styled.h1`
  margin: 0.67em 0;
  font-size: 3.2rem;
`

export const H2 = styled.h1`
  margin: 0.83em 0;
  font-size: 2.4rem;
`

export const H3 = styled.h3`
  margin: 1em 0;
  font-size: 1.8rem;
`

export const H4 = styled.h4`
  margin: 1.33em 0;
  font-size: 1.6rem;
`

export const H5 = styled.h5`
  margin: 1.67em 0;
  font-size: 1.4rem;
`

export const H6 = styled.h6`
  margin: 2.33em 0;
  font-size: 1rem;
`

export const A11yText = styled.span`
  position: absolute;
  overflow: hidden;
  width: 0.1rem;
  height: 0.1rem;
  margin: -0.1rem;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);
  white-space: nowrap;
`
