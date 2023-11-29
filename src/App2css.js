import React from 'react';
import "./App2css.css";


const App2css = () => {
  return (
    <>
      <div>
        <h2 style={{ color: 'blue' }}> <u> Topic 2<sup>nd</sup>:- CSS  </u> </h2>
      </div>

      <div>
        <h2><u>1.)Color Property</u></h2>
        <p className='color1'>color:red</p>
        <p className='color2' >color:pink</p>
        <p className='color3'>color:blue</p>
        <p className='color4' >color:green</p>
      </div>

      <div>
        <h2><u>2.)Background Color Property</u></h2>
        <p className='background-color1'>color:red</p>
        <p className='background-color2' >color:pink</p>
        <p className='background-color3'>color:blue</p>
        <p className='background-color4' >color:green</p>
      </div>

      <div>
        <h2><u>3.)Color System</u></h2>
        <p><b>RGB</b>  </p>
        <p className='rgb1' >color: rgb(251,0,0)</p>
        <p className='rgb2' >color: rgb(1,254,0)</p>
      </div>

      <div>
        <h2><u>4.)Color System</u></h2>
        <p><b>Hex(Hexadecimal)</b></p>
        <p className='hex1' >color: #ff0000 </p>
        <p className='hex2' >color: #00ff00</p>
      </div>

      <div>
        <h2><u>5.)Selectors</u></h2>
        <p>Universal Selectors - *{ }</p>
        <p>Class Selectors - .myClass{ }</p>
        <p>Id Selectors - #myId{ }</p>
        <p>Element Selectors - h1{ }, p{ }, div{ }, etc...</p>
      </div>

      <div>
        <h2><u>6.)Text Properties</u></h2>
        <p><b>1.)text-align</b></p>
        <p id='text1'>text-align:left</p>
        <p id='text2'>text-align:right</p>
        <p id='text3'>text-align:center</p>

        <p><b>2.)text-decoration</b></p>
        <p id='text-decoration1'>text-decoration:underline</p>
        <p id='text-decoration2'>text-decoration:overline</p>
        <p id='text-decoration3'>text-decoration:line-through</p>

        <p><b>3.)font-weight</b></p>
        <p id='font-weight1'> font-weight: normal </p>
        <p id='font-weight2'> font-weight: bold </p>
        <p id='font-weight3'>font-weight: bolder </p>
        <p id='font-weight4'>font-weight: lighter </p>
        <p id='font-weight5'>font-weight: 100 </p>
        <p id='font-weight6'> font-weight:  200</p>
        <p id='font-weight7'> font-weight: 300</p>
        <p id='font-weight8'> font-weight:400</p>
        <p id='font-weight9'> font-weight:500</p>
        <p id='font-weight10'>font-weight:600 </p>
        <p id='font-weight11'> font-weight:700</p>
        <p id='font-weight12'> font-weight:800</p>
        <p id='font-weight13'> font-weight:900</p>


        <p><b>4.)font-family</b></p>
        <p id='font-family1'> font-family:Arial </p>
        <p id='font-family2'> font-family:roboto </p>
        <p id='font-family3'>font-family: Garamond </p>
        <p id='font-family4'>font-family: Tahoma </p>
        <p id='font-family5'>font-weight: serif </p>
        <p id='font-family6'>font-family: Palatino </p>
        <p id='font-family7'>font-family: Georgia </p>
        <p id='font-family8'>font-family:Helvetica  </p>
        <p id='font-family9'>font-family: Verdana </p>
        <p id='font-family10'>font-family: Trebuchet </p>

        <p><b>5.)Units in CSS</b></p>
        <p>Absolute</p>
        <p>pixels(px)
          96 px = 1inch
          font-sixe:2px
        </p>


        <p><b>7.)line-height</b></p>
        <p id='line-height1' >line-height:2px </p>
        <p id='line-height2' >line-height:3 </p>
        <p id='line-height3' >line-height:normal </p>

        <p><b>8.)text-transform  </b></p>
        <p id='text-transform1' >text-transform:uppercase </p>
        <p id='text-transform2' >text-transform: lowercase</p>
        <p id='text-transform3' >text-transform:capitalize </p>
        <p id='text-transform3' >text-transform:none </p>

      </div>

      <div>
        <h2><u>7.)Box Model in CSS</u></h2>
        <p>
          <ol>
            <li>Height</li>
            <li>Width</li>
            <li>Border</li>
            <li>Padding</li>
            <li>Margin</li>
          </ol>
        </p>
        <div id="height">height:50px</div>
        <div id="width">width:50px</div>

        <p><b>1.)Border</b></p>
        <p>used to set an element's border</p>

        <div id="border-width">border-width:2px</div> <br />

        <div id="border-style1">border-style: solid </div> <br />
        <div id="border-style2">border-style: dotted </div> <br />
        <div id="border-style3">border-style: dashed </div> <br />

        <div id="border-color">border-color:green</div> <br />

        <p><b>2.)Border shorthand</b></p>
        <div id="shorthand">border:2px solid blue;</div>

        <p><b>3.)Border</b></p>
        <p>used to round the corner of an element's outer border edge</p>
        <div id="border-radius1">border-radius:10px</div> <br />
        <div id="border-radius2">border-radius:50% </div>
      </div>

      <div>
        <h2><u>8.)Padding in CSS</u></h2>
        <ol>
          <li>padding-left</li>
          <li>padding-right</li>
          <li>padding-top</li>
          <li>padding-bottom</li>
        </ol>

        <p><b>Padding shorthand</b></p>
        <div id="padding1">paddinng:50px</div> <br />
        <div id="padding1">padding:1px 2px 3px 4px  (top|right|bottom|left - clockwise)</div>
      </div>

      <div>
        <h2><u>9.)Margin in CSS</u></h2>
        <ol>
          <li>Margin-left</li>
          <li>Margin-right</li>
          <li>Margin-top</li>
          <li>Margin-bottom</li>
        </ol>

        <p><b>Margin shorthand</b></p>
        <div id="Margin1">margin:50px</div> <br />
        <div id="Margin2">margin:1px 2px 3px 4px  (top|right|bottom|left - clockwise)</div>
      </div>

      <div>
        <h2><u>10.)Display Property in CSS</u></h2>
        <ol>
          <li> display: inline </li>
          <li> display: block</li>
          <li> display: inline-block</li>
          <li> display: none </li>
        </ol>

        <div id="display1">display:inline  - takes only the space required by the element.(no margin/padding)</div> <br />  <br />

        <div id="display2">display:block - takes full space available in width.  </div>  <br />

        <div id="display3">display:inline-block - Similar to inline but we can set margin and padding.</div> <br />

        <div id="display4">display:none - to remove element from document flow.   </div>  <br />
      </div>

      <div>
        <h2><u>11.)Visibility</u></h2>


        <div id="visibility1"> visibility:hidden;
          note:- when visibility is set to none, space for the element is reserved. But for display set to none, no space is reserved or blocked for the element.
        </div>   <br />

      </div>

      <div>
        <h2><u>12.)Alpha Channel </u></h2>
        <p>opacity (0 to 1)</p>
        <h3>RGBA</h3>
        <div id="color1">color:rgba(253,0,0,0.5); </div>
        <div id="color2">color:rgba(253,0,0,1); </div>
      </div>

      <div>
        <h2><u>13.)Units in CSS </u></h2>
        <p> <b>Relative</b></p>
        <ol>
          <li>%</li>
          <li>em</li>
          <li>rem</li>
        </ol>

        <b>1.)Percentage</b>
        <div id="Percentage1">width:35%  </div>
        <div id="Percentage2">margin-left:50%  </div>

        <b>2.)Em</b>
        <table>
          <th>
            <td>unit</td>
          </th>
          <th>
            <td>Relative to</td>
          </th>
          <tr>
            <td>em</td>
            <td>Font size of the parent, in case of typographical properties like font-size, and font size of the element itself, in the case of other properties like width.</td>
          </tr>
        </table>

        <b>3.)Em</b>
        <table>
          <th>
            <td>unit</td>
          </th>
          <th>
            <td>Relative to</td>
          </th>
          <tr>
            <td>rem</td>
            <td>Font size of the root element.</td>
          </tr>
        </table>
        <div>
          <p><b>Others</b></p>
          <ul>
            <li>vh:relative to 1% viewport height</li>
            <li>vw:relative to 1% viewport widthh</li>
          </ul>
        </div>
      </div>

      <div>
        <h2><u>14.)Position in CSS </u></h2>
        <p>The position CSS property sets how an element is positioned in a document.</p>

        <div id="position1">position:static - default position (The top, right, bottom, left, and z-index properties have no effect)
        </div> <br />

        <div id="position2">position:relative - element is relative to itself. (The top, right, bottom, left, and z-index will work)  </div> <br />

        <div id="position3">position:absolute - positioned relative to its closest positioned ancestor. (removed from the flow) </div> <br />

        <div id="position4">position:fixed - positioned relative to browser. (removed from flow)
        </div> <br />

        <div id="position5">position:sticky - positioned based on user's scroll position
        </div> <br />

      </div>

      <div>
        <h2><u>15.)Z-index in CSS </u></h2>
        <p>it decides the stack level of elements overlapping elements with a larger z-index cover those with a smaller one.</p>

        <div id="z-index1">z-index:auto(0)</div>
        <div id="z-index2">z-index:1/2</div>
        <div id="z-index3">z-index:-1/-2</div>
      </div>

      <div>
        <h2><u>16.)Background Image in CSS </u></h2>
        <p><b>NOTE:- image path is copied in background URL(full path is copied and the path should immediately start after " no space should be there otherwise it won't work.), but in [img tag - dot . is added before the source path].  </b>   <img style={{ width: 60 }} src=".\images\Buddha (2).jpg" alt="" /></p>

        <p>Used to set an image as background</p>

        <div id="background-image1">background-image1:url("")</div> <br />

        <div id="background-image2">background-image2:url("")</div> <br />

        <div id="background-image3">background-image3:url("")
        </div> <br />
      </div>


      <div>
        <p> <h2><u><b>17.)Background Size</b></u></h2>  </p>
        <div id="background-image4">background-size:cover;
        </div> <br />
        <div id="background-image5">background-size:contain;
        </div> <br />
        <div id="background-image6">background-size:auto;
        </div> <br />
        <div id="background-image7">background-size:none;
        </div> <br />
      </div>

      <div>
        <p> <h2><u><b>18.)Flexbox</b></u></h2>  </p>
        <p>Flexible Box Layout. It is one-dimensional layout method for arranging items in rows or columns.</p>

        <p><b>Flexbox Direction</b>It sets how flex items are placed in the flex container, along which axis and direction.</p>

        <div className="flex-direction1">flex-direction: row;(default)  </div>
        <div className="flex-direction2">flex-direction: row-reverse;</div>
        <div className="flex-direction3">flex-direction: column;</div>
        <div className="flex-direction4">flex-direction: column-reverse;</div>
      </div>

      <div>
        <p> <h2><u><b>19.)Flex Properties for Flex Container</b></u></h2> </p>

        <ol>
          <li>
            <p><b>justify-content:alignment along the main axis.</b></p>
            <div className="justify-content1">justify-content: flex-start;</div>
            <div className="justify-content2">justify-content: flex-end;</div>
            <div className="justify-content3"> justify-content: center;</div>
            <div className="justify-content4">  justify-content: space-evenly;</div>
          </li>
          <li><p> flex-wrap: </p>
            <div className="flex-wrap1"> flex-wrap:nowwrap </div>
            <div className="flex-wrap2"> flex-wrap:wrap </div>
            <div className="flex-wrap3"> flex-wrap:wrap-reverse</div>
          </li>

          <li>align-items - alignment along the cross axis.
            <div className="align-items1 "> align-items: baseline; </div>
            <div className="align-items2 "> align-items: center; </div>
            <div className="align-items3 "> align-items: end; </div>
          </li>
          <li>
            align-content:alignment of space between and around the content along cross-axis.
            <div className="align-content1 "> align-items: end; </div>
            <div className="align-content2"> align-items: end; </div>
            <div className="align-content3 "> align-items: end; </div>
          </li>
        </ol>
      </div>

      <div>
        <p><h2><u><b>20.)Flex Properties for Flex item</b></u></h2></p>
        <ol>
          <li><div className="align-self"> align-self: alignment of individual along the across axis. </div>
          </li>

          <li><div className="flex-grow"> flex-grow:how much a flex item will grow relative to the rest of the flex items if space is available. </div></li>

          <li><div className="flex-shrink">flex-shrink: how much a flex item will shrink relative to the rest of the flex items if space is available. </div></li>
        </ol>
      </div>

      <div>
        <h1><u><b>21.)Media Queries</b></u></h1>
      </div>

      <div>
        <h1><u><b>22.)Transitions </b></u></h1>
        <p>Transitions enable you to define the transition between two states of an element.</p>

        <div id="transition1">transition-property: property you want to transition(font-size,width etc..)</div>
        <div id="transition2">transition-duration:2s/4ms...</div>
        <div id="transition3"></div>
        <div id="transition4"></div>
        <div id="transition5"></div>
        <div id="transition6"></div>
        <div id="transition1"></div>
        <div id="transition1"></div>
        <div id="transition1"></div>
      </div>



















    </>)
};

export default App2css;