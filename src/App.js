import "./App.css";

function App() {
  return (
    <>
      <div className="web_dev">
        <h2 style={{ color: 'blue' }}> <u> Topic 1<sup>st</sup>:- HTML  </u> </h2>
        <div>
          <h2>1.)<u> Heading Tag</u></h2>
          <h1>h1 Heading Tag</h1>
          <h2>h2 Heading Tag</h2>
          <h3>h3 Heading Tag</h3>
          <h4>h4 Heading Tag</h4>
          <h5>h5 Heading Tag</h5>
          <h6>h6 Heading Tag</h6>
        </div>

        <div>
          <h2>2.)<u>Paragraph Tag</u></h2>
          <p>(div tag) automatically comes to next line without (br tag)</p>
          <p>This is a simple paragraph1.</p>
          <p>This is a paragraph with "lorem10" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deserunt?</p>
        </div>

        <div>
          <h2>3.)<u>Anchor Tag</u></h2>
          <p>Anchor tag is used to add links to the websites</p>
          <a href="https://www.google.co.in/">Google</a> <br />
          <a href="https://www.facebook.com/">Facebook</a> <br />
          <a href="https://www.instagram.com/?hl=en">Instagram</a> <br />

          <p>For a webpage to open in new tab we use (target attribute to open in new tab) eg... </p>
          <a href="https://www.google.co.in/" target="_main">Google</a> <br />
          <a href="https://www.facebook.com/" target="_main">Facebook</a> <br />

          <p>We can also use photo insted of text(google,facebook..). eg...</p>
          <a href="https://www.instagram.com/?hl=en" target="_main">
            <img style={{ width: 100 }} src=".\images\Buddha.jpg" alt="" /></a> <br />
        </div>

        <div>
          <h2>4.)<u>Image Tag</u></h2>
          <p>Use to add images</p>
          <img style={{ width: 100 }} src=".\images\Buddha (2).jpg" alt="" />
          <img style={{ width: 100 }} src=".\images\Buddha.jpg" alt="" />
          <img style={{ width: 100 }} src=".\images\cyborg.jpg" alt="" />
          <img style={{ width: 100 }} src=".\images\glass.jpg" alt="" />
          <img style={{ width: 100 }} src=".\images\ironman.jpg" alt="" />
          <img style={{ width: 100 }} src=".\images\nature.jpg" alt="" />
          <img style={{ width: 100 }} src=".\images\sarthi.jpeg" alt="" />
          <img style={{ width: 100 }} src=".\images\thumb-1920-980964.jpg" alt="" />
        </div>

        <div>
          <h2>5.)<u>Br Tag</u></h2>
          <p>use to break the line</p> <br />
          <p>Line 1...</p>
          <p>Line 2...</p>
          <p>Line 3...</p>
        </div>

        <div>
          <h2>6.)<u>Bold, Italic, & Underline Tags</u></h2>
          <p>use to highlights the text</p>
          <b>Bold</b> <br />
          <i>Italic</i> <br />
          <u>Underline</u>
        </div>

        <div>
          <h2>7.)<u>Big and Small Tags</u></h2>
          <p>use to display Big and Small text</p>
          <big>Big tag</big> <br />
          <small>Small Tag</small>
        </div>

        <div>
          <h2>8.)<u>Hr Tag</u></h2>
          <p>Used to display horizontal ruler, used to seprate content</p>
          <hr />
          <hr />
        </div>

        <div>
          <h2>9.)<u>Subscript and Superscript Tag</u></h2>
          <p>Used in showing formula's</p>
          <p>H<sub>2</sub>O</p>
          <p>ax<sup>2</sup>+bx+c</p>
        </div>

        <div>
          <h2>10.)<u>Pre Tag</u></h2>
          <p>Used to display text as it is(without ignoring spaces and next line)</p>
          <pre>
            this
            is a sample
            of pre tag.
          </pre>
        </div>

        <div>
          <h2>11.)<u>Page layout Techniques</u></h2>
          <p> <u>These Tags are useful in Search Engine Optimization(SEO).</u> </p>
          <header>header tag</header>
          <main>main tag</main>
          <footer>footer tag</footer>

          <p><b>Now, inside main tag</b></p>
          <main>
            <section>section tag, for a section on your page</section>
            <article>Article tag, for an article on your page</article>
            <aside>Aside tag, for content aside main content(ads)</aside>
          </main>
        </div>

        <div>
          <h2>12.)<u>Div Tag</u></h2>
          <p>Div container usde for other HTML elements</p>
          <div>it's a block element(which means it takes full width)</div>
        </div>





        <p>
          1.) &#60; p &#62; paragraph tag &#60;/ p &#62;
          <p> use to write paragraph or add any paragraph. </p>
        </p>

        <p>
          2.) &#60; a &#62; anchor tag &#60;/ a &#62; use to hyperlink any web
          pages. <br />
          <a href="https://www.facebook.com/">Link</a> <br />
          <a href="https://www.google.com">google</a> <br />
          <a href="https://www.instagram.com/">instagram</a>
        </p>

        <p>
          3.) &#60; img &#62; image tag &#60;/ img &#62; <br />
          <img style={{ width: 100 }} src=".\images\Buddha.jpg" alt="image" /> .
          <img
            style={{ width: 100 }}
            src=".\images\Buddha (2).jpg"
            alt="image"
          />
          <img style={{ width: 100 }} src=".\images\cyborg.jpg" alt="image" /> .
          <img style={{ width: 100 }} src=".\images\glass.jpg" alt="image" /> .
          <img
            style={{ width: 100 }}
            src=".\images\ironman.jpg"
            alt="image"
          />{" "}
          .
          <img style={{ width: 100 }} src=".\images\nature.jpg" alt="image" /> .
          <img
            style={{ width: 100 }}
            src=".\images\sarthi.jpeg"
            alt="image"
          />{" "}
          .
        </p>

        <p>
          4.) &#60; ul &#62; unordered list &#60;/ ul &#62;
          <ul>
            <li>line 1</li>
            <li>line 2</li>
            <li>line 3</li>
          </ul>
          this are lines in an unordered lists .
        </p>

        <p>
          5.) &#60; ol &#62; ordered list &#60;/ ol &#62;
          <ol>
            <li>first text</li>
            <li>second text</li>
            <li>third text</li>
          </ol>
          &#60; ol type="I,i,A,a" &#62; ordered list (number list(1,2,3,.....)
          is by default) &#60;/ ol &#62;
          <ol type="1">
            <li>first text</li>
            <li>second text</li>
            <li>number list is by default</li>
          </ol>
          <ol type="I">
            <li>first text</li>
            <li>second text</li>
            <li>type is capital Roman numbers</li>
          </ol>
          <ol type="i">
            <li>first text</li>
            <li>second text</li>
            <li>type is small Roman numbers</li>
          </ol>
          <ol type="A">
            <li>first text</li>
            <li>second text</li>
            <li>type is capital alphabetic</li>
          </ol>
          <ol type="a">
            <li>first text</li>
            <li>second text</li>
            <li>type is small alphabetic</li>
          </ol>
          these are lines in ordered list and their type can be changed as
          numeric(1,2,3,4,....or alphabetic:-a,b,c,d,e....or
          Roman:-i,ii,iii,iv,v....etc)
        </p>

        <p>
          6.) &#60; li &#62; list tag &#60;/ li &#62;
          <li>text in li tag</li>
          use to add list like this.
        </p>

        <p>
          7.) &#60; div &#62; div tag &#60;/ div &#62;
          <div>any thing here used as a box and can be used anywhere.</div>
        </p>
        <p>
          8.) &#60; span &#62; span tag &#60;/ span &#62;
          <span> </span> A generic inline container used to apply styles or
          scripting to a specific portion of text
        </p>
        <p>
          9.) &#60; table &#62; table tag &#60;/ table &#62;
          <br />
          <br />
          <table className="table1">
            <span>
              <strong style={{
                color: 'slateblue',
                marginTop: 20,
                marginLeft: 450,
                fontSize: 21,
                border: 'solid greenyellow 2px',
              }}>  Main Tags inside Table Tag.  </strong>   </span>  <br />

            &#60;table&#62; table &#60;/ table &#62; <br />
            &#60; caption&#62; caption &#60;/ caption &#62; caption tag for table , it actually appears above and outside the table. <br />
            &#60;thead&#62; table head &#60;/ thead &#62;thead tag it is the  head appears inside the table. <br />
            &#60;tr&#62; table row &#60;/ tr &#62; this is table row <br />
            &#60;td&#62; td &#60;/td  &#62;  is used to define the data cells in the table. <br />
            &#60;tfoot&#62; table foot &#60;/tfoot     &#62; <br />
            &#60;tbody&#62; tbody &#60;/tbody&#62; body of the table here,table head,body and footer is used for browser to understand, it is useful in SEO(Search Engine Optimisiation). <br />
            &#60;th&#62; table head &#60;/ th &#62;this is table head with colspan and rowspan attribute it takes the size of the number of
            columns or row as mentioned by you. <br />
          </table>
        </p>
        <div className="table2">
          <table>
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Items</th>
                <th>Rate</th>
              </tr>{" "}
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>mobile</td>
                <td>15,000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>laptop</td>
                <td>75,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>wifi</td>
                <td>5,000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>speaker</td>
                <td>5,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Grand Total</td>
                <td>1,Lakh</td>
              </tr>{" "}
            </tfoot>
          </table>
        </div>
        <p>
          10.) FORM.
          <table className="form">
            <span>
              <strong style={{
                color: 'slateblue',

                fontSize: 21,
                border: 'solid pink 2px',
              }}>  Main Tags inside Form Tag.  </strong>   </span>  <br />


            &#60; form &#62; form tag &#60;/ form &#62; <br />
            &#60; input &#62; input tag &#60;/ input &#62; <br />
            &#60; textarea &#62; textarea tag &#60;/ textarea &#62;<br />
            &#60; select &#62; select tag &#60;/ select &#62; <br />
            &#60; option&#62;option &#60;/option &#62;<br />

          </table>

          <form action="">
          </form>
        </p>
        <p>
          11.) &#60; button &#62; button tag &#60;/ button &#62; <br />
          <button>Button</button> <br />
          used as a button.
        </p>
        <p>
          12.) &#60; audio &#62; audio tag &#60;/ audio &#62; used to add audio
          files.
        </p>
        <p>
          13.) &#60; video &#62; video tag &#60;/ video &#62;
          <video src=".\images\Muay Thai.mp4"></video>
          used to add video files.
        </p>
        <p>13.) For comments in HTML :- Ctrl + /</p>
        <p>
          14.) &#60; H1 &#62; heading tag h1, h2, h3, h4, h5, h6 &#60;/ H1 &#62;
        </p>
        <p>
          15.) Bold,Italic,Underline <br />
          &#60; b &#62; <b>Bold tag</b> &#60;/ b &#62; <br />
          &#60; i &#62; <i>italic tag</i> &#60;/ i &#62; <br />
          &#60; u &#62; <u>underline tag</u> &#60;/ u &#62; <br />
          &#60; strong &#62; <strong>strong tag</strong> &#60;/ strong &#62;{" "}
          <br />
        </p>
        <p>
          16.) &#60; br /&#62; line break :-use to break line of better view.
        </p>
        <p>
          17.) &#60; big &#62; <big>big tag</big> &#60;/ big &#62; <br />
          &#60; small &#62; <small>small tag</small> &#60;/ small &#62; <br />
        </p>
        <p>
          18.) &#60; sub &#62; H<sub>2</sub>O &#60;/ sub &#62; this is
          subscript. <br />
          &#60; sup &#62; x<sup>2</sup> &#60;/ sup &#62; this is superscript.
          <br />
        </p>
        <p>
          19.) &#60; pre &#62; Pre tag &#60;/ pre &#62;
          <pre>e x ampl e </pre>
          pre tag render sentences as it is.
        </p>
        <p>
          20.)Semantic Elements :- main ,section , article , aside actually
          these tag is useful in SEO (Search Engine Optimisation) <br />
          &#60; main &#62; &#60;/ main &#62; <br />
          &#60; section &#62; &#60;/ section &#62; <br />
          &#60; article &#62; &#60;/ article &#62; <br />
          &#60; header &#62; &#60;/ header &#62;
          <br />
          &#60; nav &#62; &#60;/ nav &#62;
          <br />
          &#60; aside &#62; &#60;/ aside &#62;
          <br />
          &#60; footer &#62; &#60;/ footer &#62;
          <br /> <br />
          <main>main tag </main>
          <section>section tag</section>
          <article>article tag</article>
          <header>header tag</header>
          <nav>nav tag</nav>
          <aside>aside tag</aside>
          <footer>footer tag</footer>
        </p>
        <p>
          21.) &#60; hr /&#62; it is used for horizontal line.
          <hr />
        </p>
      </div>
      <h1>
        Topic 2<sup>nd</sup> :- CSS
      </h1>

      <div className="test1">
        className = <b> test.1 </b> (<u>This box is to test css properties</u>) <br />
        margin: auto :- it automatically brings the box to the center. <br />ipisicing el it. Error, reprehenderit. sit amet
        consectetur adipisicing elit. Possimus quis, natus dolor quisquam neque
        totam minus nostrumunt. obcaecati? iusto aut dolorum iure similique id
        provident soluta sed temporibus placeat modi in praesentium consectetur.
        Ad amet dignissimos harum in consequuntur quia! Cum perferendis ratione
        nam quis? Sint harum sed repudiandae sunt!
      </div>
      <br />
      <div className="box">
        <p>
          {" "}
          <b>Most important CSS Properties List :-</b>{" "}
        </p>
        <b>1.)Box model properties:</b> <br />
        margin,
        <br />
        padding,
        <br />
        border,
        <br />
        border-radius,
        <br />
        width,
        <br />
        height,
        <br />
        box-sizing:border-box;
        <br />
        border-spacing: 10px;
        <br />
        box-decoration-break:
        <br />
        <br />
        <b>2.)Positioning properties:</b> <br />
        position,
        <br />
        top,
        <br />
        left,
        <br />
        bottom,
        <br />
        right
        <br />
        <br />
        <b>3.)Typography properties </b> <br />
        user-select: Specifies whether text can be selected by the user.
        <br />
        box-shadow <br />
        text-shadow:
        <br />
        text-transform:
        <br />
        font-family,
        <br />
        font-size,
        <br />
        font-weight,
        <br />
        line-height:0,
        <br />
        ,text-align: left,
        <br />
        text-decoration,
        <br />
        color:
        <br />
        text-decoration: Controls text underlines, overlines, and
        strikethroughs.
        <br />
        <br />
        <b> 4.)Color properties:</b> <br />
        color,
        <br />
        background-color,
        <br />
        <br /> background-image: url("");
        <br />
        background-attachment: fixed; <br />
        background-position: center;
        <br />
        background-repeat: no-repeat; <br />
        background-size: cover,contain;
        <br />
        <b>
          <br />
          5.)Display properties:
        </b>{" "}
        <br />
        display: flex;,
        <br />
        justify-content: center;
        <br />
        grid,
        <br />
        display: Controls how an element is displayed (e.g., block, inline,
        flex).
        <br />
        cursor: Sets the mouse cursor style when hovering over an element.
        <br />
        filter: Applies visual effects like blur, grayscale, and brightness.
        outline: Adds an outline around an element.
        <br />
        <br />
        <b>6.) Layout properties: </b> <br />
        float,
        <br />
        clear,
        <br />
        overflow,
        <br />
        z-index: Determines the stacking order of elements.
        <br />
        <br />
        <b>7.) Animation properties: </b>
        <br />
        animation-name,
        <br />
        animation-duration, <br />
        animation-timing-function border: 3px solid black;
        <br />
        transform: Applies 2D and 3D <br />
        transformations to elements. <br /> <br />
      </div>
    </>
  );
}

export default App;
