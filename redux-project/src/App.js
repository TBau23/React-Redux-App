import React, { useEffect } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import { connect } from 'react-redux'
import { fetchChars } from './store/actions/characterActions'

function App({fetchChars, loadingChars}) {

  useEffect(() => {
    fetchChars();
  }, [fetchChars])
  // build out a useEffect to trigger action on page load
  // build a case for loading state
  // show loader when fetching props
  // show success when on screen

  return (
    <div className="App">
      <h1>RICK & MORTY REDUX APP </h1>
      { !loadingChars ? <CharacterList /> : <div> Loading Characters ...</div>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingChars: state.loadingChars
  }
}

export default connect(
  () => {return {}}, {fetchChars}
  )(App);
