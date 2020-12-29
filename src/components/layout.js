import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "typeface-lato"
import "typeface-playfair-display"
import "../scss/main.scss"

export default ({ children }) => (
  <>
    <Header />

    <div style={{ border: "2px solid #FBBB15", backgroundColor: "#f5f6fa" }}>
      <div style={{ textAlign: "center", backgroundColor: "#FBBB15" }}>
        <img
          src="/img/amazon.jpg"
          alt="amazon hot deals"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <h1 style={{ padding: 0, margin: 0, textAlign: "center" }}>
        Shop from Amazon hot Deals for 2021
      </h1>
      <ul style={{ width: "50%", float: "right" }}>
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
      </ul>
      <ul>
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
    </div>
    <main className="main-body">{children}</main>
    <Footer />
  </>
)
