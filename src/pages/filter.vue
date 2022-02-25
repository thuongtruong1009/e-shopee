<route lang="yaml">
meta:
  layout: LFilter
</route>

<template>
  <div class="filter-container bg-white grid grid-cols-4 py-20 px-10 gap-3">
    <aside class="left-sidebar theme1 text-left col-span-1 px-2">
      <div class="search-filter">
        <h4 class="title">
          Bags &amp; Shoes
        </h4>
      </div>

      <ul class="blog-ctry-menu pb-5">
        <li>
          <a href="" class="flex justify-between items-center">Shoes <span>+</span></a>
          <ul class="category-sub-menu">
            <li><a href="#">Women Shoes</a></li>
            <li><a href="#">Men Shoes</a></li>
            <li><a href="#">Boots</a></li>
            <li><a href="#">Casual Shoes</a></li>
            <li><a href="#">Flip Flops</a></li>
          </ul>
        </li>
        <li>
          <a href="" class="flex justify-between items-center">Luggage &amp; Bags <span>+</span></a>
          <ul class="category-sub-menu">
            <li><a href="#">Stylish Backpacks</a></li>
            <li><a href="#">Shoulder Bags</a></li>
            <li><a href="#">Crossbody Bags</a></li>
            <li><a href="#">Briefcases</a></li>
            <li><a href="#">Luggage &amp; Travel</a></li>
          </ul>
        </li>
        <li>
          <a href="" class="flex justify-between items-center">Accessories <span>+</span></a>
          <ul class="category-sub-menu">
            <li><a href="#">Cosmetic Bags &amp; Cases</a></li>
            <li><a href="#">Wallets &amp; Card Holders</a></li>
            <li><a href="#">Luggage Covers</a></li>
            <li><a href="#">Passport Covers</a></li>
            <li><a href="#">Bag Parts &amp; Accessories</a></li>
          </ul>
        </li>
      </ul>

      <div class="search-filter">
        <h4 class="title">
          Filter By
        </h4>
      </div>

      <div>
        <form action="#">
          <h4 class="sub-title">
            Categories
          </h4>
          <div class="filter-check-box">
            <input id="20820" type="checkbox">
            <label for="20820">Digital Cameras <span>(13)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="20821" type="checkbox">
            <label for="20821">Camcorders <span>(13)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="20822" type="checkbox">
            <label for="20822">Camera Drones<span>(13)</span></label>
          </div>

          <h4 class="sub-title">
            Price
          </h4>
          <div class="filter-check-box">
            <input id="test9" type="checkbox">
            <label for="test9">s <span>(2)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="test10" type="checkbox">
            <label for="test10">m <span>(2)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="test11" type="checkbox">
            <label for="test11">l <span>(2)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="test12" type="checkbox">
            <label for="test12">xl <span>(2)</span></label>
          </div>

          <!-- check-box-inner -->
          <div class="check-box-inner mt-10">
            <div class="price-filter mt-10">
              <div class="price-slider-amount">
                <input
                  id="amount" type="text" name="price" readonly
                  placeholder="Add Your Price"
                >
              </div>
              <div id="slider-range" />
            </div>
          </div>
          <!-- check-box-inner -->
          <div class="check-box-inner mt-10">
            <h4 class="sub-title">
              color
            </h4>
            <div class="filter-check-box color-grey">
              <input id="20826" type="checkbox">
              <label for="20826">grey <span>(4)</span></label>
            </div>
            <div class="filter-check-box color-white">
              <input id="20827" type="checkbox">
              <label for="20827">white <span>(3)</span></label>
            </div>
            <div class="filter-check-box color-black">
              <input id="20828" type="checkbox">
              <label for="20828">black <span>(6)</span></label>
            </div>
            <div class="filter-check-box color-camel">
              <input id="20829" type="checkbox">
              <label for="20829">camel <span>(2)</span></label>
            </div>
          </div>
          <!-- check-box-inner -->
          <div class="check-box-inner mt-10">
            <h4 class="sub-title">
              Brand
            </h4>
            <div class="filter-check-box">
              <input id="20824" type="checkbox">
              <label for="20824">Graphic Corner<span>(5)</span></label>
            </div>
            <div class="filter-check-box">
              <input id="20825" type="checkbox">
              <label for="20825">Studio Design<span>(8)</span></label>
            </div>
          </div>
        </form>
      </div>

      <div class="product-widget mb-60 mt-30">
        <h3 class="title">
          Product Tags
        </h3>
        <ul class="product-tag d-flex flex-wrap">
          <li><a href="#">shopping</a></li>
          <li><a href="#">New products</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">sale</a></li>
        </ul>
      </div>
      <!--second banner start-->
      <div class="banner hover-animation position-relative overflow-hidden">
        <a href="shop-grid-4-column.html" class="d-block">
          <img src="assets/img/banner/2.jpg" alt="img">
        </a>
      </div>
    </aside>
    <div class="product-tab col-span-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mb-30">
            <div class="grid-nav-wraper bg-lighten2 mb-30">
              <div class="row align-items-center">
                <div class="col-12 col-md-6 mb-3 mb-md-0">
                  <nav class="shop-grid-nav">
                    <ul id="pills-tab" class="nav nav-pills align-items-center" role="tablist">
                      <li class="nav-item">
                        <a
                          id="pills-home-tab" class="nav-link active" data-toggle="pill"
                          href="#pills-home" role="tab" aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i class="fa fa-th" />

                        </a>
                      </li>
                      <li class="nav-item mr-0">
                        <a
                          id="pills-profile-tab" class="nav-link" data-toggle="pill"
                          href="#pills-profile" role="tab" aria-controls="pills-profile"
                          aria-selected="false"
                        ><i class="fa fa-list" /></a>
                      </li>
                      <li> <span class="total-products text-capitalize">There are 13 products.</span></li>
                    </ul>
                  </nav>
                </div>
                <div class="col-12 col-md-6 position-relative">
                  <div class="shop-grid-button d-flex align-items-center">
                    <span class="sort-by">Sort by:</span>
                    <button
                      id="dropdownMenuButton" class="btn-dropdown rounded d-flex justify-content-between"
                      type="button" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Relevance <span class="ion-android-arrow-dropdown" />
                    </button>
                    <div class="dropdown-menu shop-grid-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Relevance</a>
                      <a class="dropdown-item" href="#"> Name, A to Z</a>
                      <a class="dropdown-item" href="#"> Name, Z to A</a>
                      <a class="dropdown-item" href="#"> Price, low to high</a>
                      <a class="dropdown-item" href="#"> Price, high to low</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product-tab-nav end -->
            <div id="pills-tabContent" class="tab-content">
              <!-- first tab-pane -->
              <div
                id="pills-home" class="tab-pane fade show active" role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="row grid-view theme1">
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/1.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">New Luxury
                              Men's Slim Fit Shirt Short Sleeve...</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $11.90
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-success top-left">-10%</span>
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/6.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">New Balance
                              Running Arishi trainers in triple</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              <del class="del">$23.90</del>
                              <span class="onsale">$21.51</span>
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/2.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">New Balance
                              Fresh Foam Kaymin from new zeland</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $11.90
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/7.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">New Balance
                              Running Fuel Cell trainers</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $11.90
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/3.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">Juicy
                              Couture
                              Tricot Logo Stripe Jacket</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $21.51
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/8.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">orginal
                              Kaval
                              Windbreaker Winter Jacket</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $11.90
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/4.jpg" alt="thumbnail">
                            <img class="second-img" src="assets/img/product/12.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">Juicy
                              Couture
                              Tricot Logo Stripe Jacket</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              <del class="del">$23.90</del>
                              <span class="onsale">$21.51</span>
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/9.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">orginal
                              Kaval
                              Windbreaker Winter Jacket</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $11.90
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/5.jpg" alt="thumbnail">
                            <img class="second-img" src="assets/img/product/12.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">New Luxury
                              Men's
                              Slim Fit Shirt Short Sleeve...</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $11.90
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/12.jpg" alt="thumbnail">
                            <img class="second-img" src="assets/img/product/5.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">orginal
                              Kaval
                              Windbreaker Winter Jacket</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $11.90
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/10.jpg" alt="thumbnail">
                            <img class="second-img" src="assets/img/product/8.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">New Luxury
                              Men's
                              Slim Fit Shirt Short Sleeve...</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              <del class="del">$23.90</del>
                              <span class="onsale">$21.51</span>
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="product-thumbnail position-relative">
                          <span class="badge badge-danger top-right">New</span>
                          <a href="single-product.html">
                            <img class="first-img" src="assets/img/product/11.jpg" alt="thumbnail">
                            <img class="second-img" src="assets/img/product/5.jpg" alt="thumbnail">
                          </a>
                          <!-- product links -->
                          <ul class="product-links d-flex justify-content-center">
                            <li>
                              <a href="wishlist.html">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="add to wishlist" class="icon-heart"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#compare">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Add to compare" class="icon-shuffle"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                <span
                                  data-toggle="tooltip" data-placement="bottom"
                                  title="Quick view" class="icon-magnifier"
                                />
                              </a>
                            </li>
                          </ul>
                          <!-- product links end-->
                        </div>
                        <div class="product-desc py-0">
                          <h3 class="title">
                            <a href="shop-grid-4-column.html">orginal
                              Kaval
                              Windbreaker Winter Jacket</a>
                          </h3>
                          <div class="star-rating">
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star" />
                            <span class="ion-ios-star de-selected" />
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="product-price">
                              $11.90
                            </h6>
                            <button
                              class="pro-btn" data-toggle="modal"
                              data-target="#add-to-cart"
                            >
                              <i class="icon-basket" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                </div>
              </div>
              <!-- second tab-pane -->
              <div id="pills-profile" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="row grid-view-list theme1">
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/1.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">New Luxury
                                  Men's Slim Fit Shirt Short Sleeve...</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $11.90
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-success top-left">-10%</span>
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/6.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">New Balance
                                  Running Arishi trainers in triple</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                <del class="del">$23.90</del>
                                <span class="onsale">$21.51</span>
                              </h6>
                            </div>

                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/2.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">New Balance
                                  Fresh Foam Kaymin from new zeland</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $11.90
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/7.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">New Balance
                                  Running Fuel Cell trainers</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $11.90
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/3.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">Juicy
                                  Couture
                                  Tricot Logo Stripe Jacket</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $21.51
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/8.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">orginal
                                  Kaval
                                  Windbreaker Winter Jacket</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $11.90
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/4.jpg"
                                alt="thumbnail"
                              >
                              <img
                                class="second-img" src="assets/img/product/12.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">Juicy
                                  Couture
                                  Tricot Logo Stripe Jacket</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                <del class="del">$23.90</del>
                                <span class="onsale">$21.51</span>
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/9.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">orginal
                                  Kaval
                                  Windbreaker Winter Jacket</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $11.90
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/5.jpg"
                                alt="thumbnail"
                              >
                              <img
                                class="second-img" src="assets/img/product/12.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">New Luxury
                                  Men's
                                  Slim Fit Shirt Short Sleeve...</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $11.90
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/12.jpg"
                                alt="thumbnail"
                              >
                              <img
                                class="second-img" src="assets/img/product/5.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">orginal
                                  Kaval
                                  Windbreaker Winter Jacket</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $11.90
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/10.jpg"
                                alt="thumbnail"
                              >
                              <img
                                class="second-img" src="assets/img/product/8.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">New Luxury
                                  Men's
                                  Slim Fit Shirt Short Sleeve...</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                <del class="del">$23.90</del>
                                <span class="onsale">$21.51</span>
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                  <div class="col-12 mb-30">
                    <div class="card product-card">
                      <div class="card-body">
                        <div class="media flex-column flex-md-row">
                          <div class="product-thumbnail position-relative">
                            <span class="badge badge-danger top-right">New</span>
                            <a href="single-product.html">
                              <img
                                class="first-img" src="assets/img/product/11.jpg"
                                alt="thumbnail"
                              >
                              <img
                                class="second-img" src="assets/img/product/5.jpg"
                                alt="thumbnail"
                              >
                            </a>
                            <!-- product links -->
                            <ul class="product-links d-flex justify-content-center">
                              <li>
                                <a href="wishlist.html">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="add to wishlist" class="icon-heart"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#compare">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Add to compare" class="icon-shuffle"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-toggle="modal" data-target="#quick-view">
                                  <span
                                    data-toggle="tooltip" data-placement="bottom"
                                    title="Quick view" class="icon-magnifier"
                                  />
                                </a>
                              </li>
                            </ul>
                            <!-- product links end-->
                          </div>
                          <div class="media-body pl-30">
                            <div class="product-desc py-0">
                              <h3 class="title">
                                <a href="shop-grid-4-column.html">orginal
                                  Kaval
                                  Windbreaker Winter Jacket</a>
                              </h3>
                              <div class="star-rating mb-10">
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star" />
                                <span class="ion-ios-star de-selected" />
                              </div>
                              <h6 class="product-price">
                                $11.90
                              </h6>
                            </div>
                            <ul class="product-list-des">
                              <li>
                                Block out the haters with the fresh adidas® Originals Kaval
                                Windbreaker
                                div Jacket.
                              </li>
                              <li>
                                Part of the Kaval Collection.
                              </li>
                              <li>
                                Regular fit is eased, but not sloppy, and perfect for any
                                activity.
                              </li>
                              <li>
                                Plain-woven jacket specifically constructed for freedom of
                                movement.
                              </li>
                            </ul>
                            <div class="availability-list mb-30">
                              <p>Availability: <span>1200 In Stock</span></p>
                            </div>
                            <button
                              class="btn theme-btn--dark1 btn--xl rounded-5"
                              data-toggle="modal" data-target="#add-to-cart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- product-list End -->
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <nav class="pagination-section mt-30">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <ul class="pagination justify-content-center">
                        <li class="page-item active">
                          <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#"><i class="ion-chevron-right" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-3 mb-30 order-lg-first">
            <aside class="left-sidebar theme1">
              <!-- search-filter start -->
              <div class="search-filter">
                <div class="check-box-inner pt-0">
                  <h4 class="title">
                    Bags &amp; Shoes
                  </h4>
                </div>
              </div>

              <ul id="offcanvas-menu2" class="blog-ctry-menu">
                <li>
                  <a href="javascript:void(0)">Shoes</a>
                  <ul class="category-sub-menu">
                    <li><a href="#">Women Shoes</a></li>
                    <li><a href="#">Men Shoes</a></li>
                    <li><a href="#">Boots</a></li>
                    <li><a href="#">Casual Shoes</a></li>
                    <li><a href="#">Flip Flops</a></li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">Luggage &amp; Bags</a>
                  <ul class="category-sub-menu">
                    <li><a href="#">Stylish Backpacks</a></li>
                    <li><a href="#">Shoulder Bags</a></li>
                    <li><a href="#">Crossbody Bags</a></li>
                    <li><a href="#">Briefcases</a></li>
                    <li><a href="#">Luggage &amp; Travel</a></li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">Accessories</a>
                  <ul class="category-sub-menu">
                    <li><a href="#">Cosmetic Bags &amp; Cases</a></li>
                    <li><a href="#">Wallets &amp; Card Holders</a></li>
                    <li><a href="#">Luggage Covers</a></li>
                    <li><a href="#">Passport Covers</a></li>
                    <li><a href="#">Bag Parts &amp; Accessories</a></li>
                  </ul>
                </li>
              </ul>

              <div class="search-filter">
                <form action="#">
                  <div class="check-box-inner mt-10">
                    <h4 class="title">
                      Filter By
                    </h4>
                    <h4 class="sub-title pt-10">
                      Categories
                    </h4>
                    <div class="filter-check-box">
                      <input id="20820" type="checkbox">
                      <label for="20820">Digital Cameras <span>(13)</span></label>
                    </div>
                    <div class="filter-check-box">
                      <input id="20821" type="checkbox">
                      <label for="20821">Camcorders <span>(13)</span></label>
                    </div>
                    <div class="filter-check-box">
                      <input id="20822" type="checkbox">
                      <label for="20822">Camera Drones<span>(13)</span></label>
                    </div>
                  </div>
                  <!-- check-box-inner -->
                  <div class="check-box-inner mt-10">
                    <h4 class="sub-title">
                      Price
                    </h4>
                    <div class="price-filter mt-10">
                      <div class="price-slider-amount">
                        <input
                          id="amount" type="text" name="price" readonly
                          placeholder="Add Your Price"
                        >
                      </div>
                      <div id="slider-range" />
                    </div>
                  </div>
                  <div class="check-box-inner mt-10">
                    <h4 class="sub-title">
                      Size
                    </h4>
                    <div class="filter-check-box">
                      <input id="test9" type="checkbox">
                      <label for="test9">s <span>(2)</span></label>
                    </div>
                    <div class="filter-check-box">
                      <input id="test10" type="checkbox">
                      <label for="test10">m <span>(2)</span></label>
                    </div>
                    <div class="filter-check-box">
                      <input id="test11" type="checkbox">
                      <label for="test11">l <span>(2)</span></label>
                    </div>
                    <div class="filter-check-box">
                      <input id="test12" type="checkbox">
                      <label for="test12">xl <span>(2)</span></label>
                    </div>
                  </div>
                  <!-- check-box-inner -->
                  <div class="check-box-inner mt-10">
                    <h4 class="sub-title">
                      color
                    </h4>
                    <div class="filter-check-box color-grey">
                      <input id="20826" type="checkbox">
                      <label for="20826">grey <span>(4)</span></label>
                    </div>
                    <div class="filter-check-box color-white">
                      <input id="20827" type="checkbox">
                      <label for="20827">white <span>(3)</span></label>
                    </div>
                    <div class="filter-check-box color-black">
                      <input id="20828" type="checkbox">
                      <label for="20828">black <span>(6)</span></label>
                    </div>
                    <div class="filter-check-box color-camel">
                      <input id="20829" type="checkbox">
                      <label for="20829">camel <span>(2)</span></label>
                    </div>
                  </div>
                  <!-- check-box-inner -->
                  <div class="check-box-inner mt-10">
                    <h4 class="sub-title">
                      Brand
                    </h4>
                    <div class="filter-check-box">
                      <input id="20824" type="checkbox">
                      <label for="20824">Graphic Corner<span>(5)</span></label>
                    </div>
                    <div class="filter-check-box">
                      <input id="20825" type="checkbox">
                      <label for="20825">Studio Design<span>(8)</span></label>
                    </div>
                  </div>
                </form>
              </div>
              <!-- search-filter end -->
              <div class="product-widget mb-60 mt-30">
                <h3 class="title">
                  Product Tags
                </h3>
                <ul class="product-tag d-flex flex-wrap">
                  <li><a href="#">shopping</a></li>
                  <li><a href="#">New products</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">sale</a></li>
                </ul>
              </div>
              <!--second banner start-->
              <div class="banner hover-animation position-relative overflow-hidden">
                <a href="shop-grid-4-column.html" class="d-block">
                  <img src="assets/img/banner/2.jpg" alt="img">
                </a>
              </div>
              <!--second banner end-->
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
    font-family: "Gilroy-Medium";
    src: url("/public/fonts/Gilroy-Medium.woff");
}
.search-filter{
  font-family: "Gilroy-Medium";
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: #1d1d1d;
  padding-bottom: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  position: relative;
  display: block;
  border-bottom: 1px solid #ebebeb;
  text-transform: capitalize;
}
.search-filter::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 60px;
  height: 1px;
  background: #f33535;
}
.blog-ctry-menu > li > a, .filter-check-box{
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 2;
}

.blog-ctry-menu li ul.category-sub-menu {
  display: none;
}

.blog-ctry-menu li ul.category-sub-menu li a {
  font-size: 13px;
  line-height: 35px;
  padding: 0 10px;
  display: block;
  color: #707070;
}
form > h4{
    font-weight: 500;
    padding-top: 0.5rem;
}
input[type="checkbox"]{
    margin-right: 1rem;
}
.filter-check-box{
    padding: 0.25rem 0;
}
</style>
