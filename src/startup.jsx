import React from 'react';

function Header() {
  return (
    <header>
      <img src="logo.svg" alt="Company Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about-us">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Products() {
    return (
        <section>
        <h2>Our Products</h2>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </section>
    );
  }

  function AboutUs() {
    return (
      <section>
        <h2>About Us</h2>
        <p>We are a startup company that produces high-quality products...</p>
      </section>
    );
  }

  export {Header,Products,AboutUs};