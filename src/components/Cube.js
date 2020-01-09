import React from 'react';
import Login from './Login';
import NewUserForm from './NewUserForm';

class LoginRegistration extends React.Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: -45,
      z: 0,
      zoom: -800,
      opacity: 100,
      perspective: 700,
      zoomRange: [-1500, 0],
      displayPanel: false,
      isTuckedAway: true,
      isLoggedIn: false
    }
  }

  componentDidMount() {
    //   document.addEventListener('mousemove', this.onMouseMove)
  }

  updateX(e) { this.setState({ x: e.target.value }) }
  updateY(e) { this.setState({ y: e.target.value }) }
  updateZ(e) { this.setState({ z: e.target.value }) }
  updateZoom(e) { this.setState({ zoom: e.target.value }) }
  updateOpacity(e) { this.setState({ opacity: e.target.value }) }
  updatePerspective(e) { this.setState({ perspective: e.target.value }) }
  togglePanel() { this.setState({ displayPanel: !this.state.displayPanel }) }
  randomize() {
    this.setState({
      x: ranNum(-90, 90), y: ranNum(-90, 90), z: ranNum(-90, 90),
      zoom: ranNum(this.state.zoomRange[0], this.state.zoomRange[1])
    })
  }
  initialPosition() {
    this.setState({
      x: 0, y: -45, z: 0,
      zoom: -800, isTuckedAway: true,
      isLoggedIn: this.props.isLoggedIn
    });
    console.log('tucking away', this.state.isTuckedAway);
  }
  LoggedInPosition() {
    this.setState({
      x: 0, y: 90, z: 0,
      zoom: -800, isTuckedAway: true,
      isLoggedIn: this.props.isLoggedIn
    })
  }
  RegisteringPosition() {
    this.setState({
      x: -90, y: 0, z: 0,
      zoom: -0, isTuckedAway: false,
      isLoggedIn: this.props.isLoggedIn
    })
  }
  LoggingInPosition() {
    this.setState({
      x: 90, y: 0, z: 0,
      zoom: -0, isTuckedAway: false,
      isLoggedIn: this.props.isLoggedIn
    })
  }
  processLogin() {
    this.LoggedInPosition().bind(this);
  }

  render() {
    var { x, y, z, zoom, zoomRange, opacity, perspective, displayPanel, isTuckedAway } = this.state,
      cubeStyle = { transform: `translateZ(${zoom}px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)` },
      containerStyle = { perspective: `${perspective}px` },
      surfaceStyle = { opacity: opacity / 100 }

      // if (this.props.isLoggedIn !== this.state.isLoggedIn){
      //   if (this.props.isLoggedIn) {
      //     this.LoggedInPosition();
      //   }
      //   this.setState(prevState => ({
      //     isLoggedIn: {

      //     }
      //   }), 'isLoggedIn': this.props.isLoggedIn)
      // }

    return (
      <div className={`wrapper loginRegistration ${isTuckedAway ? 'tuckedAway' : 'notTuckedAway'}`}>
      <div className="backDrop" onClick={this.initialPosition.bind(this)}></div>
        <div className="container" style={containerStyle}>
          <div className={displayPanel ? 'cube' : 'cube animated'} style={cubeStyle}>
            <figure className={'loginContainer'} style={surfaceStyle} onClick={this.LoggingInPosition.bind(this)}><div>Login</div>
            </figure>
            <figure style={surfaceStyle}></figure>
            <figure className={'logoutContainer'} style={surfaceStyle} onClick={this.initialPosition.bind(this)}><div>Logout</div></figure>
            <figure className={'registerContainer'} style={surfaceStyle} onClick={this.RegisteringPosition.bind(this)}><div>Register</div></figure>
            <figure className={'registrationFormPanel'} style={surfaceStyle}>
              <div className='cancelButtonContainer'><button className={'cancel cube-button'} onClick={this.initialPosition.bind(this)}>X</button></div>
              <NewUserForm />
            </figure>
            <figure className={'loginFormPanel'} style={surfaceStyle}>
              <button className={'submit cube-button'} onClick={this.LoggedInPosition.bind(this)}>Submit</button>
              <div className='cancelButtonContainer'><button className={'cancel cube-button'} onClick={this.initialPosition.bind(this)}>X</button></div>
              <Login />
            </figure>
            {/* {Array(6).fill().map(() => <figure style={surfaceStyle} />)} */}
          </div>
        </div>
        <div className="panel">
          <div className="toggle"><button onClick={this.togglePanel.bind(this)}>toggle control panel</button></div>
          <div className={displayPanel ? 'inputs' : 'inputs hide'}>
            <Slider axis={true} val={x} f={this.updateX.bind(this)} copy={'rotateX'} />
            <Slider axis={true} val={y} f={this.updateY.bind(this)} copy={'rotateY'} />
            <Slider axis={true} val={z} f={this.updateZ.bind(this)} copy={'rotateZ'} />
            <Slider min={zoomRange[0]} max={zoomRange[1]} val={zoom} f={this.updateZoom.bind(this)} copy={'zoom'} sc={true} scVal={'x' + Math.round(1000 + zoom / (zoomRange[1] - zoomRange[0]) * 900) / 100} />
            <Slider min={20} max={100} val={opacity} f={this.updateOpacity.bind(this)} copy={'opacity'} unit={'%'} />
            <Slider min={400} max={1000} val={perspective} f={this.updatePerspective.bind(this)} copy={'perspective'} unit={'px'} />
            <div><button onClick={this.initialPosition.bind(this)}>initial Position</button></div>
            <div><button onClick={this.RegisteringPosition.bind(this)}>Registering</button></div>
            <div><button onClick={this.LoggedInPosition.bind(this)}>Logged In</button></div>
            <div><button onClick={this.LoggingInPosition.bind(this)}>Logging In</button></div>
          </div>
        </div>
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    var min = this.props.axis ? -90 : this.props.min,
      max = this.props.axis ? 90 : this.props.max,
      unit = this.props.axis ? 'deg' : this.props.unit
    return (
      <div>
        <input type="range" min={min} max={max} step="1" value={this.props.val} onChange={this.props.f} />
        <p>{this.props.copy}: {(this.props.sc ? this.props.scVal : Math.round(this.props.val))}{unit}</p>
      </div>
    )
  }
}

var ranNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min) // inclusive by +1

export default LoginRegistration;