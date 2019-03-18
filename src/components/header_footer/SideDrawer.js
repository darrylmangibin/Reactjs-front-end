import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => {
        props.onClose(false)
      }}
    >
      <List components="nav">
        <ListItem
          button
          onClick={() => {
            scrollToElement('featured')
          }}
        >
          Event Start In
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement('Venue INFO')
          }}
        >
          Venue INFO
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement('highlights')
          }}
        >
          Highlights
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement('pricing')
          }}
        >
          Pricing
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement('location')
          }}
        >
          Location
        </ListItem>
        <a href="https://fierce-thicket-60455.herokuapp.com/" target="_blank">
          <ListItem
            button
          >
            React App Expensify
          </ListItem>
        </a>
        <a href="https://vivixx-dev.herokuapp.com/profile/darryl" target="_blank">
          <ListItem
            button
          >
            React Social Media for developers
          </ListItem>
        </a>
      </List>
    </Drawer>
  )
}

export default SideDrawer;
