import React, { Component } from 'react';
import './style.css'
class BecomeAgent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='become__agent'>
                    <h1>BECOME OUR AGENT FORM</h1>
                    <hr/>
                <section className='becomeAgentMain'>
                    <div className='agent__img'>
                        <img src={require('../../VR__Pic/affiliates.jpg')} alt='pic'/>
                    </div>
                    <div className='gentForm'>
                        <div className='contactDiv'>
                                <div className='formA'>
                                    <form className='myFormControl'>
                                        <div className='myForms'>
                                            <input type='text' name='name' placeholder='Full Name'/>
                                        </div>
                                        <div className='myForms'>
                                            <input type='email' name='name' placeholder='Email Address'/>
                                        </div>
                                        <div className='myForms'>
                                            <input type='text' name='name' placeholder='Phone Number'/>
                                        </div>
                                        <div className='myForms'>
                                            <input type='text' name='name' placeholder='Country'/>
                                        </div>
                                        <div className='myForms'>
                                            <input type='text' name='name' placeholder='Address - City'/>
                                        </div>
                                        <div className='myForms'>
                                            <input type='text' name='name' placeholder='Address - Street'/>
                                        </div>
                                        <div className='myForms'>
                                            <input type='text' name='name' placeholder='Address - Postal Code'/>
                                        </div>
                                        <a href='' className='btn btn-warning contactBtn'>BECOME AGENT</a>
                                    </form>
                             </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default BecomeAgent;