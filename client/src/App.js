import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import Selected from './Components/Selected/Selected';
import ContactMain from './Components/Contact-us/Contact-us';
import BecomeAgent from './Components/Agent/Agent';
import Footer from './Components/Footer/Footer';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            // animate__animated animate__zoomIn 
            <Router>
                <div className=' mainApp '>
                        <div className='wrapper'>
                            <Navbar/>
                            <div className='switch'> 
                             <Switch> 
                                <Route path='/' exact component={Selected}/> 
                                <Route path='/contact-us' exact component={ContactMain}/>
                                <Route path='/agent-form' exact component={BecomeAgent}/>
                            </Switch>
                            </div>
                            <Footer/>
                        </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;