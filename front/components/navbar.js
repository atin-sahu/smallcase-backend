function navbar(){
    return `<nav class="navbar navbar-expand-lg navbar-light mb-0 pb-0 fixed-top bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand text-primary" href="#">
        <div class="d-flex mt-2">
          <img style="width: 100%; height: 40px;" src="https://smallcases.upstox.com/assets/favicon/ms-icon-310x310.png"
            alt="logo">
          <p>smallcase</p>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="discover-collection.html">Discover</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Watchlist</a>
            </li>
          </ul>
        </div>

        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">For Business</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                More
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <p class="dropdown-item mb-0"><small>Account</small></p>
                </li>
                <li><a class="dropdown-item" href="#">Open Broker Account</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <p class="dropdown-item mb-0"><small>Support</small></p>
                </li>
                <li><a class="dropdown-item" href="#">FAQs</a></li>
                <li><a class="dropdown-item" href="#">Chat With Us</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <p class="dropdown-item mb-0"><small>Company</small></p>
                </li>
                <li><a class="dropdown-item" href="#">Blog</a></li>
                <li><a class="dropdown-item" href="#">Career</a></li>
              </ul>
            </li>
            <!-- <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
              data-bs-target="#exampleModal">Login</button> -->

              <div class="d-flex gap-2">
                
                <button  class="btn btn-outline-primary" onclick="window.location.href = 'login.html'">Login</button>
                <button  class="btn btn-outline-primary" onclick="window.location.href = 'register.html'">Registration</button>
                  </ul>
              </div>
        </div>
      </div>
    </div>
  </nav>`
}

function footer (){
    return `<div id="footer" class="pb-4" style="background-color: rgb(247,248,247);">
    <div class="container">
        <div class="row pt-4">
            <div class="col-12">
                <i class="fa-solid fa-house"></i>
                <i class="fa-solid fa-greater-than"></i>
                <span>Watchlist</span>
            </div>
        </div>
        <div class="row mt-4 mb-5">
            <div class="col-5">
                <img class="mb-3" src="https://www.smallcase.com/static/svgs/smallcase-logo-with-text.svg" alt="2">
                <p>smallcase Technologies builds platforms & investment products to invest better in Indian equities. A smallcase is a basket of stocks/ETFs weighted intelligently to reflect an idea</p>
                <p class="fw-bolder">Get weekly market insights and facts right in your inbox</p>
                
                <div class="row mt-4">
                    <div class="col-auto">
                        <input type="text" class="form-control"  placeholder=" Email Address">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>

            <div class="col-7">
                <div class="row">
                    <div class="col-4">
                        <p class="fw-bolder">Company</p>
                        <a href="about.html" class="text-dark text-decoration-none"><p class="m-0">About</p></a>
                        <a href="Aman.html" class="text-dark text-decoration-none"><p class="m-0">For Businesses</p></a>
                        <p class="m-0">Blog</p>
                        <p class="m-0">Press</p>
                        <p class="m-0">Careers</p>
                    </div>
                    <div class="col-4">
                        <p class="fw-bolder">Products</p>
                        <p class="m-0">Publisher</p>
                        <p class="m-0">Share</p>
                        <p class="m-0">Gateway</p>
                        <p class="m-0">Brokers</p>
                        <p class="m-0">Tickertape</p>
                    </div>
                    <div class="col-4">
                        <p class="fw-bolder">Fine Print</p>
                        <p class="m-0">Privacy</p>
                        <p class="m-0">Disclosures</p>
                        <p class="m-0">Definitions</p>
                        <p class="m-0">Investment Tools</p>
                        <p class="m-0">Return Calculation Methodology</p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row d-flex justify-content-between">
            <div class="col-3">
                <p>smallcase Technologies Private Limited
                    #51, 3rd Floor, Le Parc Richmonde,
                    Richmond Road, Shanthala Nagar,
                    Richmond Town, Bangalore - 560025</p>
            </div>
            <div class="col-3">
                <p>Contact us on help@smallcase.com</p>
                <p>Find us on:</p>
                <div class="row">
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-facebook-square"></i>
                    </div>
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <p>Help & Support</p>
                <img src="https://www.smallcase.com/static/images/25-social-trust.png" alt="3">
            </div>
        </div>
    </div>
</div>`
}

export {navbar,footer};