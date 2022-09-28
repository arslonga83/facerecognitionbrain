import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import ParticlesBg from 'particles-bg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
      {/*<FaceRecognition /> */}
    </div>
  );
}
}

export default App;
