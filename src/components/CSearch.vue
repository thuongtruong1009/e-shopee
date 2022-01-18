<template>
  <div class="search-container w-lg <lg:w-xl">
    <input type="text" placeholder="Enter your search key...">
    <button><img src="https://img.icons8.com/ios/50/ffffff/search--v1.png"></button>
  </div>
</template>

<style scoped>
          .search-container {
            height: 2.9rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 7px;
            overflow: hidden;
            box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.05);
          }
          .search-container > input {
            width: 100%;
            height: 100%;
            padding: 10px;
            background-color: white;
            -webkit-appearance: none;
            font-size: 14px;
            font-weight: 400;
            outline: none;
          }
          .search-container > button {
            height: 100%;
            padding: 10px 15px;
            color: white;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            background-color: black;
          }
          .search-container button > img {
            width: 2rem;
            height: 2rem;
          }
          @media (max-width: 992px){
            .search-container{
              width: 100%;
            }
          }
</style>
