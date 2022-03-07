import React from 'react'
import PropTypes from 'prop-types'
import kled from './../img/kled.webp';


const Header = (props) => {
  return (
    <header className="App-header">
        <img src={kled} className="App-logo" alt="logo"/>
        <h1>League of Legends Player Watcher</h1>
        <p2>Check if any of the summoners in your live-game is someone you have played with before!</p2>
        {/*<select name="region" id="region">
          <option value="euw">euw</option>
  </select>*/}
      </header>
  )
}

Header.defaultProps = {
    title: 'League of Legends player watcher'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header