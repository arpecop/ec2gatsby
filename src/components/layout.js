import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "typeface-lato"
import "typeface-playfair-display"
import "../scss/main.scss"

export default ({ children }) => (
  <>
    <Header />
    <main className="main-body">
      <div style={{ textAlign: "center" }}>
        <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=topgiftideas&banner=0CZRSHB5W9YA6H9M3502&f=ifr&linkID=c4fb05fd766ff70e88983b7b68683fbc&t=arpecop0c-20&tracking_id=arpecop0c-20"
          width="300"
          height="250"
          scrolling="no"
          border="0"
          marginwidth="0"
          frameborder="0"
          style={{ border: "none" }}
        ></iframe>
      </div>
      <h1>Shop from Amazon Deals</h1>
      <ul>
        <li>
          <a href="https://amzn.to/3mPKTYr" rel="nofollow">
            Home & Kitchen
          </a>
        </li>
        <li>
          <a href="https://amzn.to/34LANS3" rel="nofollow">
            Electronics
          </a>
        </li>
        <li>
          <a href="https://amzn.to/2M0qcfw" rel="nofollow">
            Toys & Games
          </a>
        </li>
        <li>
          <a href="https://amzn.to/34HW8Ms" rel="nofollow">
            Cell Phones & Accessories
          </a>
        </li>
        <li>
          <a href="https://amzn.to/38Chzzt" rel="nofollow">
            Clothing, Shoes & Jewelry
          </a>
        </li>
        <li>
          <a href="https://amzn.to/3hkrtdd" rel="nofollow">
            Baby
          </a>
        </li>
        <li>
          <a href="https://amzn.to/3rtELbI" rel="nofollow">
            Video Games
          </a>
        </li>
        <li>
          <a href="https://amzn.to/3rxMHci" rel="nofollow">
            Home & Business Services
          </a>
        </li>
        <li>
          <a href="https://amzn.to/3nUw5ZRR" rel="nofollow">
            CDs & Vinyl
          </a>
        </li>
        <li>
          <a href="https://amzn.to/34KJFrn" rel="nofollow">
            Books
          </a>
        </li>
      </ul>
      {children}
      <div style={{ textAlign: "center" }}>
        <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=topratedproducts&banner=1NKVVY70RBKZ8F0X0DR2&f=ifr&linkID=d5166c7712ff9037a0c38a0c327937d4&t=arpecop0c-20&tracking_id=arpecop0c-20"
          width="300"
          height="600"
          scrolling="no"
          border="0"
          marginwidth="0"
          frameborder="0"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </main>
    <Footer />
  </>
)
