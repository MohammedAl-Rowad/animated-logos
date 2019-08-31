import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Aspire from './components/Aspire/Aspire';
import Dbseer from './components/Dbseer/Dbseer';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState();

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Router>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        aria-controls="logos-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BlurOnIcon />
      </IconButton>
      <Menu
        id="logos-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Aspire</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/dbseer">Dbseer</Link>
        </MenuItem>
      </Menu>
      <Route path="/animated-logos/" exact component={Aspire} />
      <Route path="/animated-logos/dbseer" exact component={Dbseer} />
    </Router>
  );
}
