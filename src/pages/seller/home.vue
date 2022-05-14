<route lang="yaml">
meta:
  layout: seller/LSDashBoard
</route>

<script setup>

// onMounted(() => {
//   const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a')

//   allSideMenu.forEach((item) => {
//     const li = item.parentElement

//     item.addEventListener('click', () => {
//       allSideMenu.forEach((i) => {
//         i.parentElement.classList.remove('active')
//       })
//       li.classList.add('active')
//     })
//   })
// })
</script>

<template>
  <main class="w-300 max-w-300">
    <div class="grid justify-center gap-5">
      <div class="max-w-196 w-196 h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 p-3 border-t-1 border-t-[#e9e9e9]">
        <div class="p-2 text-lg font-medium">
          <h2>Your to do list</h2>
        </div>
        <div class="home_action flex justify-around divide-1 divide-solid divide-x divide-[#e9e9e9] text-center">
          <div>
            <h6>0</h6>
            <p>Chờ xác nhận</p>
          </div>
          <div>
            <h6>0</h6>
            <p>Đơn giảm giá</p>
          </div>
          <div>
            <h6>0</h6>
            <p>Đã xử lí</p>
          </div>
          <div>
            <h6>0</h6>
            <p>Đơn hủy</p>
          </div>
        </div>
      </div>
      <div class="max-w-196 w-196 h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 p-3">
        <div>
          <div class="flex items-center">
            <h2 class="text-lg font-medium">
              Phân tích bán hàng
            </h2>
            <p class="text-xs text-gray-400 ml-3">
              ( Hôm nay 17:00 GMT+7 )
            </p>
          </div>
          <p class="text-xs text-gray-400">
            Tổng quan về dữ liệu của cửa hàng cho kích thước của đơn hàng đã xác nhận
          </p>
        </div>
      </div>
    </div>

    <ul class="box-info">
      <li>
        <i class="bx bxs-calendar-check" />
        <span class="text">
          <h3>1020</h3>
          <p>New Order</p>
        </span>
      </li>
      <li>
        <i class="bx bxs-group" />
        <span class="text">
          <h3>2834</h3>
          <p>Visitors</p>
        </span>
      </li>
      <li>
        <i class="bx bxs-dollar-circle" />
        <span class="text">
          <h3>$2543</h3>
          <p>Total Sales</p>
        </span>
      </li>
    </ul>

    <div class="table-data">
      <div class="order">
        <div class="head">
          <h3>Recent Orders</h3>
          <i class="bx bx-search" />
          <i class="bx bx-filter" />
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Date Order</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/img/seller/people.png">
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td><span class="status completed">Completed</span></td>
            </tr>
            <tr>
              <td>
                <img src="/img/seller/people.png">
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td><span class="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>
                <img src="/img/seller/people.png">
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td><span class="status process">Process</span></td>
            </tr>
            <tr>
              <td>
                <img src="/img/seller/people.png">
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td><span class="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>
                <img src="/img/seller/people.png">
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td><span class="status completed">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="todo">
        <div class="head">
          <h3>Todos</h3>
          <i class="bx bx-plus" />
          <i class="bx bx-filter" />
        </div>
        <ul class="todo-list">
          <li class="completed">
            <p>Todo List</p>
            <i class="bx bx-dots-vertical-rounded" />
          </li>
          <li class="completed">
            <p>Todo List</p>
            <i class="bx bx-dots-vertical-rounded" />
          </li>
          <li class="not-completed">
            <p>Todo List</p>
            <i class="bx bx-dots-vertical-rounded" />
          </li>
          <li class="completed">
            <p>Todo List</p>
            <i class="bx bx-dots-vertical-rounded" />
          </li>
          <li class="not-completed">
            <p>Todo List</p>
            <i class="bx bx-dots-vertical-rounded" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');
main {
font-family: var(--poppins);
max-height: calc(100vh - 56px);
overflow-y: auto;
}
main .box-info {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
grid-gap: 24px;
margin-top: 36px;
}
main .box-info li {
padding: 24px;
background: var(--light);
border-radius: 20px;
display: flex;
align-items: center;
grid-gap: 24px;
}
main .box-info li .bx {
width: 80px;
height: 80px;
border-radius: 10px;
font-size: 36px;
display: flex;
justify-content: center;
align-items: center;
}
main .box-info li:nth-child(1) .bx {
background: var(--light-blue);
color: var(--blue);
}
main .box-info li:nth-child(2) .bx {
background: var(--light-yellow);
color: var(--yellow);
}
main .box-info li:nth-child(3) .bx {
background: var(--light-orange);
color: var(--orange);
}
main .box-info li .text h3 {
font-size: 24px;
font-weight: 600;
color: var(--dark);
}
main .box-info li .text p {
color: var(--dark);
}

main .table-data {
display: flex;
flex-wrap: wrap;
grid-gap: 24px;
margin-top: 24px;
width: 100%;
color: var(--dark);
}
main .table-data > div {
border-radius: 20px;
background: var(--light);
padding: 24px;
overflow-x: auto;
}
main .table-data .head {
display: flex;
align-items: center;
grid-gap: 16px;
margin-bottom: 24px;
}
main .table-data .head h3 {
margin-right: auto;
font-size: 24px;
font-weight: 600;
}
main .table-data .head .bx {
cursor: pointer;
}

main .table-data .order {
flex-grow: 1;
flex-basis: 500px;
}
main .table-data .order table {
width: 100%;
border-collapse: collapse;
}
main .table-data .order table th {
padding-bottom: 12px;
font-size: 13px;
text-align: left;
border-bottom: 1px solid var(--grey);
}
main .table-data .order table td {
padding: 16px 0;
}
main .table-data .order table tr td:first-child {
display: flex;
align-items: center;
grid-gap: 12px;
padding-left: 6px;
}
main .table-data .order table td img {
width: 36px;
height: 36px;
border-radius: 50%;
object-fit: cover;
}
main .table-data .order table tbody tr:hover {
background: var(--grey);
}
main .table-data .order table tr td .status {
font-size: 10px;
padding: 6px 16px;
color: var(--light);
border-radius: 20px;
font-weight: 700;
}
main .table-data .order table tr td .status.completed {
background: var(--blue);
}
main .table-data .order table tr td .status.process {
background: var(--yellow);
}
main .table-data .order table tr td .status.pending {
background: var(--orange);
}

main .table-data .todo {
flex-grow: 1;
flex-basis: 300px;
}
main .table-data .todo .todo-list {
width: 100%;
}
main .table-data .todo .todo-list li {
width: 100%;
margin-bottom: 16px;
background: var(--grey);
border-radius: 10px;
padding: 14px 20px;
display: flex;
justify-content: space-between;
align-items: center;
}
main .table-data .todo .todo-list li .bx {
cursor: pointer;
}
main .table-data .todo .todo-list li.completed {
border-left: 10px solid var(--blue);
}
main .table-data .todo .todo-list li.not-completed {
border-left: 10px solid var(--orange);
}
main .table-data .todo .todo-list li:last-child {
margin-bottom: 0;
}
@media screen and (max-width: 576px) {
main .box-info {
grid-template-columns: 1fr;
}

main .table-data .head {
min-width: 420px;
}
main .table-data .order table {
min-width: 420px;
}
main .table-data .todo .todo-list {
min-width: 420px;
}
}
</style>
