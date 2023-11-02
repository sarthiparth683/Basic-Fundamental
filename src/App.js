import "./App.css";

function App() {
  return (
    <>
      <div className="web_dev">
        <h1>Web Development</h1>
        <h2>
          Topic 1<sup>st</sup>:- HTML
        </h2>


        <p>
          1.) &#60; p &#62; paragraph tag &#60;/ p &#62; use to write paragraph
          or add any paragraph.
        </p>


        <p>
          2.) &#60; a &#62; anchor tag &#60;/ a &#62; use to hyperlink any web
          pages. <br />
          <a href="https://www.facebook.com/">Link</a> <br />
          <a href="https://www.google.com">google</a> <br />
          <a href="https://www.instagram.com/">instagram</a>
        </p>

        <p>
          3.) &#60; img &#62; image tag &#60;/ img &#62;
          <img style={{ width: 100 }} src=".\images\Buddha.jpg" alt="image" /> .
          <img
            style={{ width: 100 }}
            src=".\images\Buddha (2).jpg"
            alt="image"
          />{" "}
          .
          <img style={{ width: 100 }} src=".\images\cyborg.jpg" alt="image" /> .
          <img style={{ width: 100 }} src=".\images\glass.jpg" alt="image" /> .
          <img style={{ width: 100 }} src=".\images\ironman.jpg" alt="image" /> .
          <img style={{ width: 100 }} src=".\images\nature.jpg" alt="image" /> .
          <img style={{ width: 100 }} src=".\images\sarthi.jpeg" alt="image" /> .
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
          &#60; ol type="I,i,A,a" &#62; ordered list (decimal type is by default)
          &#60;/ ol &#62;

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


          these are lines in ordered list and their type can be changed as numeric(1,2,3,4,....or
          alphabetic:-a,b,c,d,e....or Roman:-i,ii,iii,iv,v....etc)
        </p>

        <p>
          6.) &#60; li &#62; list tag &#60;/ li &#62;
          <li>text in li tag</li>
          use to add list like this.
        </p>



        <p>
          7.) &#60; div &#62; div tag &#60;/ div &#62;
          <div>any thing here  used as a box and can be used anywhere.</div>

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
          <table className="table">
            &#60; thead &#62; table head &#60;/ thead &#62;
            <br />
            &#60; tbody &#62; table body &#60;/ tbody &#62;
            <br />
            &#60; tfoot &#62; table foot &#60;/ tfoot &#62;
            <br />
            here,table head,body and footer is used for browser to understand,it
            is useful in SEO(Search Engine Optimisiation)
            <caption style={{ fontSize: 20 }}>
              caption tag for table table , it actually appears above the table{" "}
            </caption>
            <thead>
              <b>thead tag</b> it is head indide the table
            </thead>
            <th colspan="4" rowSpan={2}>
              this is table head with colspan and rowspan attribute it takes the
              size of the number of columns or row as mentioned
            </th>
            <tr>this is table row</tr>
            <tr>this is table row</tr>
            <tr>this is table row</tr>
            <tbody>tbody</tbody>
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
              {" "}
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
          10.) &#60; form &#62; form tag &#60;/ form &#62;
          <form action="">

            &#60; input &#62; input tag &#60;/ input &#62;

            <input type="text" />  <br />
            <input type="button" value="button" /><br />
            <input type="checkbox" name="" id="" /><br />
            <input type="color" name="" id="" /><br />
            <input type="datetime" name="" id="" /><br />
            <input type="text" /> <br /><br />

            &#60; textarea &#62; textarea tag &#60;/ textarea &#62;

            <textarea name="" id="" cols="8" rows="3"></textarea> <br />


            &#60; select &#62; select tag &#60;/ select &#62; <br />

            <select name="" id="">
              <option value="">option1</option>
              <option value="">option2</option>
              <option value="">option3</option>
            </select> <br />

            <select name="anyname" id="id">
              <option value="">1st value</option>
              <option value="">2nd value</option>
              <option value="">3rd value</option>
              <option value="">4th value</option>
            </select>

          </form>
        </p>
        <p>
          11.) &#60; button &#62; button tag &#60;/ button &#62; <br />
          <button>Button</button>  <br />
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
        <p>16.) &#60; br /&#62; line break :-use to break line of better view.</p>
        <p>
          17.) &#60; big &#62; <big>big tag</big> &#60;/ big &#62; <br />
          &#60; small &#62; <small>small tag</small> &#60;/ small &#62; <br />
        </p>
        <p>
          18.) &#60; sub &#62; H<sub>2</sub>O &#60;/ sub &#62; this is subscript.{" "}
          <br />
          &#60; sup &#62; x<sup>2</sup> &#60;/ sup &#62; this is superscript.
          <br />
        </p>
        <p>
          19.) &#60; pre &#62; Pre tag &#60;/ pre &#62;
          <pre>e x ampl e </pre>
          pre tag render sentences as it is.
        </p>
        <p>
          20.)Semantic Elements :- main ,section , article , aside actually these
          tag is useful in SEO (Search Engine Optimisation) <br />
          &#60; main &#62; &#60;/ main &#62; <br />
          &#60; section &#62; &#60;/ section &#62; <br />
          &#60; article &#62; &#60;/ article &#62; <br />
          &#60; header &#62; &#60;/ header &#62;<br />
          &#60; nav &#62; &#60;/ nav &#62;<br />
          &#60; aside &#62; &#60;/ aside &#62;<br />
          &#60; footer &#62; &#60;/ footer &#62;<br /> <br />

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
        <b> test.1 </b> <u>This box is to test css</u> <br /> Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Error, reprehenderit. sit amet
        consectetur adipisicing elit. Possimus quis, natus dolor quisquam neque
        totam minus nostrum expedita iusto aut dolorum iure similique id
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