import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsMain from './components/NewsMain';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

export class App extends Component {
  pageSize=6;
  apiKey = "c825930dbb5e461a94571612886bf0e6"
  render() {
    return (
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route exact path='/' element={<NewsMain apiKey={this.apiKey} key='general' pageSize={this.pageSize} category='general' />} />
        <Route exact path='/business' element={<NewsMain apiKey={this.apiKey} key='business' pageSize={this.pageSize} category='business' />} />
        <Route exact path='/entertainment' element={<NewsMain apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} category='entertainment' />} />
        <Route exact path='/health' element={<NewsMain apiKey={this.apiKey} key='health' pageSize={this.pageSize} category='health' />} />
        <Route exact path='/science' element={<NewsMain apiKey={this.apiKey} key='science' pageSize={this.pageSize} category='science' />} />
        <Route exact path='/technology' element={<NewsMain apiKey={this.apiKey} key='technology' pageSize={this.pageSize} category='technology' />} />
        <Route exact path='/sports' element={<NewsMain apiKey={this.apiKey} key='sports' pageSize={this.pageSize} category='sports' />} />
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App

