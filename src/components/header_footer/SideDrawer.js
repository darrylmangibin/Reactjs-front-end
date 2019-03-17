import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
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
            console.log('Featured')
          }}
        >
          Event Start In
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log('Venue INFO')
          }}
        >
          Venue INFO
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log('hightlight')
          }}
        >
          Highlights
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log('pricing')
          }}
        >
          Pricing
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log('location')
          }}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer;
