import React from 'react'

const Card = () => {
  return (
<div class="flex h-screen items-center justify-center px-4">
  <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
    <img src="https://im.whatshot.in/img/2020/Sep/18118-c-1599551141.jpg" alt="sandwich" class="h-auto w-full" />
    <div class="p-5">
      <p class="text-medium mb-5 text-gray-700">name</p>
      <p class="text-medium mb-5 text-gray-700">price</p>

      <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">buy</button>
    </div>
  </div>
</div>



  )
}

export default Card