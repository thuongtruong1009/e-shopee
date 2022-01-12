<route lang="yaml">
meta:
  layout: LOrders
</route>

<template>
  <div class="myaccount-content">
    <h3>Orders</h3>

    <div class="myaccount-table table-responsive text-center">
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Mostarizing Oil</td>
            <td>Aug 22, 2018</td>
            <td>Pending</td>
            <td>$45</td>
            <td>
              <a href="shopping-cart.html" class="ht-btn black-btn">View</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Katopeno Altuni</td>
            <td>July 22, 2018</td>
            <td>Approved</td>
            <td>$100</td>
            <td>
              <a href="shopping-cart.html" class="ht-btn black-btn">View</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Murikhete Paris</td>
            <td>June 12, 2017</td>
            <td>On Hold</td>
            <td>$99</td>
            <td>
              <a href="shopping-cart.html" class="ht-btn black-btn">View</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
