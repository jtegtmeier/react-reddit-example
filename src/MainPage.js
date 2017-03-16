import React from 'react'
import DisplaySubs from './DisplaySubs'
import DisplaySubLinks from './DisplaySubLinks'

const MainPage = () =>
  <div>
    <div>Welcome to my React Reddit-like Example Project</div>
    <div>
      The main page contains the top Sub Pages and Links on the entire site.
      Select a Sub to see the like there.
    </div>
    <DisplaySubs />
    <DisplaySubLinks />
  </div>

export default MainPage
