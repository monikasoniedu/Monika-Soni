import { Tabs, Tab, TabList, TabPanel } from "react-tabs"


const ProductDetail = () => {
  return (
    <>
      <h1>Product Detail Page</h1>
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

      <div className="wallpaper">
        <img src="/../assets/breakfast.jpg" width="70%" alt="" />
      </div>
      <div >
        <h1>The Big Chill Cakery</h1>
      </div>
      <div className="prod-info">
        <div>
          <Tabs>
            <TabList className="information">
              <Tab className="over">
                overview
              </Tab>
              <Tab className="over">
                contact
              </Tab>
            </TabList>
            <TabPanel>
              <div className="infor-ma">
                <h3>About this Place</h3>
                <h5>cuisine</h5>
                <p2>bakery,Fast-Food</p2><br />
                <h5>Average Cost</h5>
                <p2>rs700 for two people</p2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="infor-ma">
                <h3>About this Place</h3>
                <h5>cuisine</h5>

              </div>
            </TabPanel>
          </Tabs>



        </div>

        <button className="place">
          place online order
        </button>
      </div>
    </>

  )
}

export default ProductDetail;