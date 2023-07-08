import React from "react";
import '../css/Cart.css'
import StudentNavBar from '../navbars/StudentNavBar'
const Cart = () => {
  return (
    <div>
      <StudentNavBar/>
     <div className= "right cartfont">
      <div class="cartcontainer">
        <div class="cartheading">
          <h1>
            My Cart
          </h1>

          <a href="#" class="visibility-cart transition is-open">
            X
          </a>
        </div>

        <div class="cart transition is-open">
          <a href="#" class="btn btn-update">
            {/* Update cart */}
          </a>

          <div class="carttable">
            <div class="layout-inline row th">
              <div class="col col-pro">Product</div>
              <div class="col col-price align-center ">Price</div>
              <div class="col col-qty align-center">QTY</div>
              <div class="col">VAT</div>
              <div class="col">Total</div>
            </div>

            <div class="layout-inline row">
              <div class="col col-pro layout-inline">
                <img
                  src="https://images.unsplash.com/photo-1593526270954-da9b60206ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGlvbmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="kitten"
                />
                <p>Happy Little Critter</p>
              </div>

              <div class="col col-price col-numeric align-center ">
                <p>£59.99</p>
              </div>

              <div class="col col-qty layout-inline">
                <a href="#" class="qty qty-minus">
                  -
                </a>
                <input type="numeric" value="3" />
                <a href="#" class="qty qty-plus">
                  +
                </a>
              </div>

              <div class="col col-vat col-numeric">
                <p>£2.95</p>
              </div>
              <div class="col col-total col-numeric">
                {" "}
                <p> £182.95</p>
              </div>
            </div>

            <div class="layout-inline row row-bg2">
              <div class="col col-pro layout-inline">
                <img

                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1c6l2RtkjycqHY84IPA001uQxwVdunAVtxZKKlnHkKNeb30hPQe8MRpqKqUAzEIl1uI&usqp=CAU"
                  alt="kitten"
                />
                <p>Scared Little Kittie</p>
              </div>

              <div class="col col-price col-numeric align-center ">
                <p>£23.99</p>
              </div>

              <div class="col col-qty  layout-inline">
                <a href="#" class="qty qty-minus ">
                  -
                </a>
                <input type="numeric" value="1" />
                <a href="#" class="qty qty-plus">
                  +
                </a>
              </div>

              <div class="col col-vat col-numeric">
                <p>£1.95</p>
              </div>
              <div class="col col-total col-numeric">
                <p>£25.94</p>
              </div>
            </div>

            <div class="layout-inline row">
              <div class="col col-pro layout-inline">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1c6l2RtkjycqHY84IPA001uQxwVdunAVtxZKKlnHkKNeb30hPQe8MRpqKqUAzEIl1uI&usqp=CAU"
                  alt="kitten"
                />
                <p>Curious Little Begger</p>
              </div>

              <div class="col col-price col-numeric align-center ">
                <p>£59.99</p>
              </div>

              <div class="col col-qty layout-inline">
                <a href="#" class="qty qty-minus">
                  -
                </a>
                <input type="numeric" value="3" />
                <a href="#" class="qty qty-plus">
                  +
                </a>
              </div>

              <div class="col col-vat col-numeric">
                <p>£2.95</p>
              </div>
              <div class="col col-total col-numeric">
                <p>£182.95</p>
              </div>
            </div>

            <div class="tf">
              <div class="row layout-inline">
                <div class="col">
                  <p>VAT</p>
                </div>
                <div class="col"></div>
              </div>
              <div class="row layout-inline">
                <div class="col">
                  <p>Shipping</p>
                </div>
                <div class="col"></div>
              </div>
              <div class="row layout-inline">
                <div class="col">
                  <p>Total</p>
                </div>
                <div class="col"></div>
              </div>
            </div>
          </div>

          <a href="#" class="btn btn-update">
            {/* Update cart */}
          </a>
        </div>
      </div>
    </div>
     </div>
     );
};

export default Cart;
