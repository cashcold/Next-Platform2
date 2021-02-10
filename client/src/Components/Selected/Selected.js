import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
class Selected extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        currency: ''
        }
    }

   componentDidMount(){
   
      
     
     
   }
   

    render() { 
        
        return ( 
            <div className='SelectedMain'>
                <div className='cerrency__now'></div>
                <section className='chanceMain'>
                        <div className='subHead'>
                            <h1>STAND A CHANCE TO WIN FREE PES PRODUCT EVERY WEEK!!!!</h1>
                        </div>
                    <div className='chance__now'>
                        <h2>Answere Our Random Qustion and Win Free PES</h2>
                        <a href='' className='btn btn-success
                        '>GET START</a>
                        <img src={require('../../VR__Pic/Playstation-VR-Wallpapers.jpg')} alt='pic'/>
                        
                    </div>
                </section>
                <section className='pes__soccer__main'>
                    <div className='pesSoccer'>
                        <img src={require('../../VR__Pic/wp6963865.jpg')} alt='pic'/>
                    </div>
                </section>
                <section className='game__ads'>
                     <div className='game__A'>
                        <div className='game__text'>
                            <h1>PlayStation.VR</h1>
                            <h2>Immerse yourself in incredible virtual reality games and experiences</h2>
                            <p>Slip on your VR headset. Grab your PlayStation controller. And immerse yourself in the thrill of live sporting action as you’ve never experienced it before. Sport comes alive with silk-smooth visuals, social connectivity and sports data insight. It’s like being right there at the match, only more so.</p>
                            <a href='' className='btn btn-warning'>FREE TRAILS</a>
                        </div>
                        <div className='game__img_main'>
                            <img src={require('../../VR__Pic/Playstation-VR-Desktop.jpg')} alt='pic'/>
                        </div>
                    </div>
                    <section className='about__game'>
                        <div className='about_game_text'>
                            <h1>All In One Boost</h1>
                            <h2>Play incredible games like Astro Bot Rescue Mission,Spider-Man,God of War, Blood and Truth and Dreams VR. etc</h2>
                        </div>
                        <div className='game__ads_start'>
                            <img src={require('../../VR__Pic/46f24237e05ea9d2fb80f4064225732a.jpg')} alt='pic'/>
                        </div>
                    </section>
                </section>
                <section className='pes5__family-main'>
                   <div className='famil__family'>
                        <div className='famil__family__text'>
                            <h1>Family Game boost</h1>
                            <h2>Enjoy faster and smoother frame rates in select PS4 and PS VR games.</h2>
                            <a href='' className='btn btn-warning'>Find More<i class="fas fa-arrow-circle-right"></i></a>
                        </div>
                        <div className='famil__family__img'>
                            <img src={require('../../VR__Pic/ps5-family-image-block-01-en-16sep20.png')} alt='pic'/>
                        </div>
                   </div>
                   <div className='family_info_img_other'>
                       <div className='other__img__text'>
                           <h2>Thrilling PS VR games and experiences</h2>
                       </div>
                        <img src={require('../../VR__Pic/psvr-overview-experiences-image-block-01-ps4-en-20oct20.png')} alt='pic'/>
                   </div>
                </section>
                <section className='game__controller'>
                    <div className='controller__1'>
                        <div className='controller__img'>
                            <img src={require('../../VR__Pic/81JIRkv7mxL._SL1500_.jpg')} alt='pic'/>
                            <p>Rating</p>
                            <div className='icon'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <a href='' className='btn btn-warning'> free trial</a>
                        </div>
                        <div className='controller__img'>
                            <img src={require('../../VR__Pic/psvr-accessories-aim-controller-two-column-02-ps4-en-01jul19.png')} alt='pic'/>
                            <p>Rating</p>
                            <div className='icon'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <a href='' className='btn btn-warning'> free trial</a>
                        </div>
                        <div className='controller__img'>
                            <img src={require('../../VR__Pic/61yV1psEMRL._SL1001_.jpg')} alt='pic'/>
                            <p>Rating</p>
                            <div className='icon'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <a href='' className='btn btn-warning'> free trial</a>
                        </div>
                        <div className='controller__img'>
                            <img src={require('../../VR__Pic/71r3bTcTzJL._AC_SL1500_.jpg')} alt='pic'/>
                            <p>Rating</p>
                            <div className='icon'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <a href='' className='btn btn-warning'> free trial</a>
                        </div>
                        <div className='controller__img'>
                            <img src={require('../../VR__Pic/norbert-levajsics-dUx0gwLbhzs-unsplash.jpg')} alt='pic'/>
                            <p>Rating</p>
                            <div className='icon'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <a href='' className='btn btn-warning'> free trial</a>
                        </div>
                        <div className='controller__img'>
                            <img src={require('../../VR__Pic/psvr-accessories-move-controllers-two-column-02-ps4-en-01jul19.png')} alt='pic'/>
                            <p>Rating</p>
                            <div className='icon'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <a href='' className='btn btn-warning'> free trial</a>
                        </div>
                        <div className='controller__img'>
                            <img src={require('../../VR__Pic/61BufB-e62L._AC_SL1000_.jpg')} alt='pic'/>
                            <p>Rating</p>
                            <div className='icon'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <a href='' className='btn btn-warning'> free trial</a>
                        </div>
                        <div className='controller__img'>
                            <img src={require('../../VR__Pic/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.png')} alt='pic'/>
                            <p>Rating</p>
                            <div className='icon'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <a href='' className='btn btn-warning'> free trial</a>
                        </div>
                    </div>
                </section>
                <section className='other__brand'>
                    <h1>ACTION</h1>
                    <div className='brand__info'>
                        <div className='brand_info_img brand_img__radius'>
                            <img src={require('../../VR__Pic/young-woman-using-vr-glasses-with-neon-lights.jpg')} alt='pic'/>
                        </div>
                        <div className='brand_info_img brand_img__radius'>
                            <img src={require('../../VR__Pic/young-woman-wearing-vr-glasses.jpg')} alt='pic'/>
                        </div>
                        <div className='brand_info_img'>
                            <img src={require('../../VR__Pic/portrait-young-woman-playing-with-vr-headset-glasses-virtual-reality-isolated-studio-vr-headset-glasses-device-technology-concept.jpg')} alt='pic'/>
                        </div>
                        <div className='brand_info_img brand_img__radius'>
                            <img src={require('../../VR__Pic/young-man-s-pointing-using-vr-glasses-neon-light-gradient.jpg')} alt='pic'/>
                        </div>
                    </div>
                </section>
                <section className='img__adv__me'>
                    <h1>Immerse yourself in incredible virtual reality games and experiences</h1>
                   <div className='both__adv_tag'>
                        <div className='img__me__tag_img img__me__tag_img__height'>
                            <img src={require('../../VR__Pic/wp7938849.jpg')} alt='pic'/>
                        </div>
                        <div className='img__me__tag_img img__me__tag_img '>
                            <img src={require('../../VR__Pic/Playstation-VR-4K (1).jpg')} alt='pic'/>
                        </div>
                   </div>
                </section>
                 <section className='free__shippment'>
                    <div className='freeShippment'>
                        <h1>FREE SHIPPMENT </h1>
                        <img src={require('../../VR__Pic/denise-jans-HoqYAnwR-1g-unsplash.jpg')} alt='pic'/>
                        <h2>$80.00</h2>
                        <a href='' className='btn btn-success'>BUY NOW</a>
                    </div>
                    <div className='freeShippment'>
                        <h1>FREE SHIPPMENT </h1>
                        <img src={require('../../VR__Pic/Playstation-VR-Computer-Wallpaper.jpg')} alt='pic'/>
                        <h2>$280.00</h2>
                        <a href='' className='btn btn-success'>BUY NOW</a>
                    </div>
                </section>
                <section className='free__shippment'>
                    <div className='freeShippment'>
                        <h1>FREE SHIPPMENT </h1>
                        <img src={require('../../VR__Pic/norbert-levajsics-dUx0gwLbhzs-unsplash.jpg')} alt='pic'/>
                        <h2>$100.00</h2>
                        <a href='' className='btn btn-success'>BUY NOW</a>
                    </div>
                    <div className='freeShippment'>
                        <h1>FREE SHIPPMENT </h1>
                        <img src={require('../../VR__Pic/Playstation-VR-Pictures.jpg')} alt='pic'/>
                        <h2>$300.00</h2>
                        <a href='' className='btn btn-success'>BUY NOW</a>
                    </div>
                </section>
                <section className='bitcoin__main'>
                    <div className='bitcoinTrade'>
                        <h3>THE BEST PLACE TO</h3>
                        <h1>Buy, Sell and Pay with Crypto</h1>
                        <div className='bitImg'>
                            <img src={require('../../VR__Pic/google-play-and-apple-app-store.jpg')} alt='pic'/>
                        </div>
                    </div>
                </section>
                <section className='exchangeRate'>
                    <div className='exchangeNow'>
                        <div className='excahnge__text'>
                            <h1>Exchange</h1>
                            <h2>Powered by CRO, with Deep Liquidity, Low Fees and Best Execution Prices</h2>
                            <a href='' className='btn btn-warning'>SIGN-UP</a>
                        </div>
                        <div className='excahnge__img'>
                            <img src={require('../../VR__Pic/exchange-630a5df1.webp')} alt='pic'/>
                        </div>
                    </div>
                </section>
                <section className='exchangeRate_info'>
                    <div className='exchangeNow exchangeNow__mobile'>
                        <div className='excahnge__img excahnge__img__mobile'>
                            <img src={require('../../VR__Pic/index_wallet_iphonex-52a60db3.webp')} alt='pic'/>
                        </div>
                        <div className='excahnge__text excahnge__text__mobile'>
                            <h1>App</h1>
                            <h2>Buy 90+ Coins at True Cost No fees, No markups</h2>
                            <a href='' className='btn btn-warning'>Learn More</a>
                        </div>
                    </div>
                </section>
                <section className='bitCard'>
                    <div className='card__bit__text'>
                        <h1>Cards</h1>
                        <h2>Metal Visa Card with up to 8% back on spending</h2>
                        <p>Now availabe in South Africa, Ghana, Nigeria</p>
                        <a href='' class='btn btn-warning'>Learn More</a>
                    </div>
                    <div className='card__bit__img'>
                         <img src={require('../../VR__Pic/91cbedf77655c5c540e52b604972062c.jpg')} alt='pic'/>
                    </div>
                </section>
                <section className='section__section'>
                    <section className='Earn__main '>
                        <div className='earn__now__img'>
                            <img src={require('../../VR__Pic/index_earn_iphonex-311bdf2e.webp')} alt='pic'/>
                        </div>
                        <div className='earn__now__text'>
                            <h1>Earn</h1>
                            <h2>Deposit crypto, earn interest paid weekly in crypto</h2>
                            <a href='' className='btn btn-warning'>Learn More</a>
                        </div>
                    </section>
                    <section className='Earn__main'>
                        <div className='earn__now__text'>
                            <h1>Credit</h1>
                            <h2>Deposit crypto, get an instant loan</h2>
                            <a href='' className='btn btn-warning'>Learn More</a>
                        </div>
                        <div className='earn__now__img'>
                            <img src={require('../../VR__Pic/index_credit_iphonex-6b80aab8.webp')} alt='pic'/>
                        </div>
                    </section>
                </section>
                <section className='section__section__pepsi'>
                    <section className='pepsi__main'>
                        <div className='pepsiMain'>
                            <div className='pepsi__text'>
                                <h1>ALL YOUR <br/>FAVORITE FLAVORS. <br/>ALL RIGHT HERE.</h1>
                                <p>Pepsi. Diet Pepsi. Pepsi Zero Sugar. The gang’s all here. Compare flavors, get nutritional facts and check out ingredients for all our Pepsi products.</p>
                                <a href='' className='btn btn-primary'>BECOME OUR AGENT</a>
                            </div>
                            <div className='pepsi_img'>
                             <img src={require('../../VR__Pic/promotion1-hero_v3.png')} alt='pic'/>
                            </div>
                        </div>
                    </section>
                    <section className='cocoa__main'>
                        <div className='cocoa__img'>
                            <img src={require('../../VR__Pic/cocoa-cola-social.jpg')} alt='pic'/>
                        </div>
                    </section>
                   <section className='pepsi__origin'>
                       <div className='pepsiOrigin'>
                            <img src={require('../../VR__Pic/22160504-7785859-Two_to_taste_It_will_come_in_both_Original_and_Vanilla_varieties-a-4_1576171477322.jpg')} alt='pic'/>
                       </div>
                       <div className='pepsiOrigin'>
                            <img src={require('../../VR__Pic/100.jpg')} alt='pic'/>
                       </div>
                   </section>
                </section>
            </div>
         );
    }
}
 
export default Selected;