import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="row">
          <div className="col-md-4">
            <img src="assets/shop-icon.png" width="20%" height="100px" />
            <a class="navbar-brand" href="#">
              <span className="h1 align-middle">WooHoo Shop</span>
            </a>
          </div>
          <div className="col-md-5">
            <div class="d-flex justify-content-center">
              <img src="assets/cart-icon.png" width="%20" height="100px" />
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" style={{margin: "auto"}}>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <h3>Shirt</h3> 
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <h3>Shoe</h3> 
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <h3>Hoodie</h3> 
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
