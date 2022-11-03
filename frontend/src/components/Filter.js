


const FilterPage = () => {

  // places && console.log('places in Hero Section', places)

  return (
    <>
      <nav className="navigation">
        <div className="header">
          <div className='header-logo'>
            <p className="logo-filter">e! </p>
            <div className="login">
              <span>
                <button className="btn2">login</button>
                <button className="btn2">sign up</button>
              </span>
            </div>
          </div>

        </div>


      </nav>
      <div className="main">
        <h1>Breakfast Places in Mumbai</h1>
      </div>


      <div className="container-filter">
        <aside>
          <div className="filter">
            <h2>filter</h2>
            <p>select location</p>

          </div>
          <select className="cuisine">
            <option value="select cuisine">select cuisine</option>
          </select><br />
          <label><h5>cuisine</h5></label><br />
          <div className="check">
            <label> <input type="checkbox" value="southindian" id="" /> southindian</label><br />
            <label> <input type="checkbox" value="northindian" id="" /> northindian</label><br />
            <label> <input type="checkbox" value="chinese" id="" /> chinese</label><br />
            <label><input type="checkbox" value="italian" id="" />italian  </label><br />
            <label><input type="checkbox" value="fastfood" id="" />fastfood  </label><br />
          </div>

          <label><h5>cost for two</h5></label>
          <br />
          <label><input type="radio" value="less than 500" id="" />less than 500</label><br />
          <label><input type="radio" value="500-1000" id="" />500-1000</label><br />
          <label><input type="radio" value="1000-1500" id="" />1000-1500</label><br />
          <label><input type="radio" value="1500-2000" id="" />1500-2000</label><br />
          <label><input type="radio" value="more than 2000" id="" />more than 2000</label><br />
          <br />

          <label><h5>sort</h5></label><br />
          <label><input type="radio" value="price low to high" id="" />price low to high</label><br />
          <label><input type="radio" value="price high to low" id="" />price high to low</label><br />



        </aside>

        <div className="  card-section">
          <div className=" card">
            <div className="left" width="50%">
              <img src="/../assets/break.png" alt="" style={{ width: "200px" }} />
              <p>cusins: baker<br />cost for two:  ₹ 700 </p>
            </div>
            <div className="right" width="50%">
              <h2>The Bakery Shop </h2>
              <p>fort<br />shop no1,plotD,Samruddhi complex,chinchali.</p>
              
            </div>
          </div>


          <div className=" card">
            <div className="left" width="50%">
              <img src="/../assets/break.png" alt="" style={{ width: "200px" }} />
              <p>cusins: baker<br />cost for two: ₹700 </p>
            </div>
            <div className="right" width="50%">
              <h2>The Bakery Shop </h2>
              <p>fort<br />shop no1,plotD,Samruddhi complex,chinchali.</p>
              
            </div>
          </div>
        </div>

      </div>


    </>



  )
}
export default FilterPage;