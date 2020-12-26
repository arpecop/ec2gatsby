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
    </main>
    <Footer />
  </>
)
