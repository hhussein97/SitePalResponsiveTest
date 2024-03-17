import {
    Link
} from "react-router-dom";
import  {SitePal} from 'sitepal-react-v2';  
import { useState } from 'react';


function Char2D () {
   
    const [sayAudio, setSayAudio] = useState(null)
    const [sayText, setSayText] = useState(null)

    return (
        <div>
            <header className="main_header">
                <div className="left_div">
                    <div className="logo logo_heading">
                        <a href="/"><img src="/api/examples/images/logo.png" alt="SitePal" /></a>
                    </div>
                </div>
            </header>
            <table id="tblContainer" cellSpacing="0" align="center" border="0" width="50%" style={{ minHeight: '73vh' }}>
                <tbody>
                    <tr>
                        <td id="tdContent">
                            <p className="feature_entire_heading text-center f-bold h2" align="center"><b>Embed Your SitePal Scene in React</b></p>
                            {/* <p className="feature_entire_heading text-center" align="center">and Source Code</p> */}
                            <table align="center" width="90%">
                                <tbody>
                                    <tr>
                                        <td align="left">
                                            <table cellPadding='0' cellSpacing='0' border='0' width="90%">
                                                <tbody className="black10">

                                                    <tr>

                                                        <td className="btn_parent">
                                                        <Link to="/api/examples/react/char2D"><button className="btn btn_child shadow btn1" type="button" id="btn1"
                                                                value="2D ILLUSTRATED" >2D ILLUSTRATED</button></Link>
                                                            <Link to="/api/examples/react/char3D"><button className="btn btn_child shadow" type="button" id="btn2"
                                                                value="3D PHOTOFACE" >3D PHOTOFACE</button></Link>
                                                            <Link to="/api/examples/react/charFB"><button className="btn btn_child shadow" type="button" id="btn3"
                                                                value="FULL BODY" >FULL BODY</button></Link>
                                                            <Link to="/api/examples/react/empty"> <button className="btn btn_child shadow " type="button" id="btn4"
                                                                value="EMPTY" >EMPTY</button></Link>
                                                            <button className="btn btn_child shadow" type="button" id="btn1"
                                                                    value="SOURCE CODE" ><a className="download" href="/api/examples/react/sitepal-react.zip" download>DOWNLOAD SOURCE CODE</a></button>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td align="center">

                                            <table cellPadding='10' cellSpacing='0' border='0' width="350">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="2" align="center"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2" align="center">
                                                        <p>Test</p>

                                                            <div style={{ marginTop: 'auto', padding:"2px", height:"50px !imporatant", display: 'flex', justifyContent: 'left', height: '100%'}}>
                                                                <SitePal embed='3432155,200,200,"",1,1,2722664,0,1,1,"WSGmJ3ScqO8d4Zop1cuILz7q4In5k6q2",0,1' sayAudio={sayAudio}    sayText={sayText} />

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                    </tr>
                                                    <tr id="btn_disable_character" style={{opacity:"0.5",pointerEvents:"none"}}>
                                                      <td align="right">
                                                        <button onClick={() => {

                                                                setSayAudio(['sayAudioExample'])
                                                                 }
                                                        } className="btn btn_child shadow" type="button" id="btn1" value="SAYAUDIO">sayAudio()</button>
                                                      </td>
                                                      <td align="left">
                                                        <button onClick={() => {

                                                                setSayText(['Welcome to our text to speech A P I example',3,1,3])
                                                            }
                                                        }
                                                         className="btn btn_child shadow" type="button" id="btn1" value="SAYTEXT">sayText()</button>
                                                      </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td align="right">
                                            <form action="#" name="messageForm">
                                              <textarea cols="45" rows="16" name="message" className="feature_entire_heading" readOnly></textarea>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <footer>
                <div className="footer-menu oddcast text-center">
                    <ul className="w-50 m-auto ">
                        <li className="w-100 f-bold ">Please feel free to use the source code of this page as an example.</li>
                        <li>To view the source code of this page, <a href="/api/examples/react/sitepal-react.zip" download>download</a> souce code
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

    );
}
export default Char2D;