import React from 'react'
import styled from 'styled-components'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const Container = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

const Img = styled.img`
  margin-right: ${rhythm(1 / 2)};
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  margin-bottom: 0;
  border-radius: 100%;
`

function Bio() {
  return (
    <Container>
      <Img src={profilePic} alt={'Ryan Setiagi'} />
      <p>
        Written by <strong>Ryan Setiagi</strong>
        <br />
        You should look at me on
        {` `}
        <a href={'https://twitter.com/ryan_setiagi'}>Twitter</a>
        {` `}
        or
        {` `}
        <a href={'https://github.com/masbossun'}>Github</a>
      </p>
    </Container>
  )
}

export default Bio
