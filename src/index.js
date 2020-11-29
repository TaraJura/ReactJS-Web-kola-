import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Logo from './logo.png';
import Menu from './menu.png';
import Search from './search.png';
import Silueta from './silueta1.svg';
import Ikona1 from './ikona1.svg';
import Ikona2 from './ikona2.svg';
import Ikona3 from './ikona3.svg';
import Ikona4 from './ikona4.svg';
import EU from './EU.png';
import FBIG from './FBIG.png';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Lista extends React.Component {
    render() {
        return (
            <div id='lista'>
                <ul id='menu'>
                <li>
                 <img src={Logo} alt='logo' id='logo' />
                </li>
                <li>
                 <img src={Menu} alt='menu' />
                </li>
                <li>
                 <img src={Search} alt='serach' />
                </li>
                </ul>
            </div>
        );
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Top extends React.Component {

    render() {
        return (
            <div id='Spot_1'>
                <Lista />
                <h1>Vítejte na stránkách Gymnázia Nad Štolou</h1>
                <h1>"Studium před zlatem"</h1>
                <img src={Silueta} alt='silueta' />
        <h3> EŽK | Jídelníček | Rozvrhy | Suplování </h3>
            </div>
        );
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Top2 extends React.Component {
    render() {
        return (
            <div id='Spot_2'>
                <br />
                <h1> Čtyři důvody, proč studovat na naší škole </h1>
                <div id='Spot_2_box'>
                    <ul class='nav'>
                        <li>
                            <div id="1">
                                <br />
                                <div id='cislo'><h5>1</h5></div>
                                <br />
                                <p>Lorem ipsum</p>  
                                <br />
                                <h6>Lorem ipsum,</h6>
                                <h6>Lorem ipsum dolor</h6>
                                <br />
                                <img src={Ikona1} alt='serach' />
                                <br />
                                <br />
                            </div>
                        </li>
                        <li>
                                <div id="2">
                                <br />
                                <div id='cislo'><h5>2</h5></div>
                                <br />
                                <p>Lorem ipsum</p>
                                <br />
                                <h6>Lorem ipsum,</h6>
                                <h6>Lorem ipsum dolor</h6>
                                <br />
                                <img src={Ikona2} alt='serach' />
                                <br />
                                <br />
                            </div>
                        </li>
                        <li>
                                <div id="3">
                                <br />
                                <div id='cislo'><h5>3</h5></div>
                                <br />
                                <p>Lorem ipsum</p>
                                <br />
                                <h6>Lorem ipsum,</h6>
                                <h6>Lorem ipsum dolor</h6>
                                <br />
                                <img src={Ikona3} alt='serach' />
                                <br />
                                <br />
                            </div>
                        </li>
                        <li>
                                <div id="4">
                                <br />
                                <div id='cislo'><h5>4</h5></div>
                                <br />
                                <p>Lorem ipsum</p>
                                <br />
                                <h6>Lorem ipsum,</h6>
                                <h6>Lorem ipsum dolor</h6>
                                <br />
                                <img src={Ikona4} alt='serach' />
                                <br />
                                <br />
                            </div>
                        </li>
                    </ul>
                    <button id='but1' >Jak se stát studentem?</button>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Top3 extends React.Component {
    render() {
        return (
            <div id='Spot_3'>
                <h1 style={{color: "white"}}>Aktuality</h1>
                <hr class='hrcolor' />
                <ul class='nav2'>
                    <li>
                        <div>
                            <h4>Lorem ipsum</h4>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consecterur adipiscing elit.
                             Nullam iaculis sit amet turpis ac bibendum.
                             Vestibullum aliquet imperdiet metus sed ullamcerper. Morbi condimentum luctus conque.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Lorem ipsum</h4>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consecterur adipiscing elit.
                             Nullam iaculis sit amet turpis ac bibendum.
                             Vestibullum aliquet imperdiet metus sed ullamcerper. Morbi condimentum luctus conque.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Lorem ipsum</h4>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consecterur adipiscing elit.
                             Nullam iaculis sit amet turpis ac bibendum.
                             Vestibullum aliquet imperdiet metus sed ullamcerper. Morbi condimentum luctus conque.
                            </p>
                        </div>
                    </li>
                </ul>
                <button id='but2'>Více aktualit</button>
                <div id='pozice'>

                    <h1>Nadcházející akce</h1>
                </div>
                <hr class='hrcolor' />
                <ul class='nav3'>
                    <li>
                        <div>
                            <h4>Lorem ipsum</h4>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consecterur adipiscing elit.
                             Nullam iaculis sit amet turpis ac bibendum.
                             Vestibullum aliquet imperdiet metus sed ullamcerper. Morbi condimentum luctus conque.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Lorem ipsum</h4>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consecterur adipiscing elit.
                             Nullam iaculis sit amet turpis ac bibendum.
                             Vestibullum aliquet imperdiet metus sed ullamcerper. Morbi condimentum luctus conque.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Lorem ipsum</h4>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consecterur adipiscing elit.
                             Nullam iaculis sit amet turpis ac bibendum.
                             Vestibullum aliquet imperdiet metus sed ullamcerper. Morbi condimentum luctus conque.
                            </p>
                        </div>
                    </li>
                </ul>
                <button id='but2'>Více akcí</button>
            </div>
        );
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Top4 extends React.Component {
    render() {
        return (
            <div id='Spot_4'>
                <h1>Sponzoři</h1>
                <hr id='hr2'/>
                <img src={EU} alt='EU' />
            </div>
        );
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Top5 extends React.Component {
    render() {
        return (
            <div id='Spot_5'>
                <div id='pozice'>
                <h1>Kontakty</h1>
                </div>
                <hr id='hr2'/>
                <div id='kontakt'>
                    <br />
                    <br />
                    <h3>Gymnázium Nad Štolou</h3>
                    <br />
                    <p>Telefon</p>
                    <p>+420 603 478 983</p>
                    <hr id='hr2' />
                    <p>E- mail</p>
                    <p>info@casurgis.cz</p>
                    <hr id='hr2' />
                    <p>Adresa</p>
                    <p>Nad Štolou 1, Praha 7</p>
                    <hr id='hr2'/>
                    <img src={FBIG} alt='Facebook a Instagram' />
                </div>
            </div>
        );
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
function App() {
    return (
        <div>
            <Top />
            <Top2 />
            <Top3 />
            <Top4 />
            <Top5 />
        </div>
    );
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );