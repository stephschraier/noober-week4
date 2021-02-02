function renderRide(leg) {
  let element = document.querySelector('.rides')
  element.insertAdjacentHTML('beforeend',
  `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
     <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
        <p class="font-bold text-gray-600">(312) 555-1212</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${leg.numberOfPassengers}
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${leg.pickupLocation.address}</p>
        <p>${leg.pickupLocation.city},${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${leg.dropoffLocation.address}</p>
        <p>${leg.dropoffLocation.city},${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
      </div>
      </div>
    </div>
    `)
}
async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  let rides = json

  for (let i=0; i < rides.length; i++) {
    let ride = (rides[i])
    for (let i = 0; i < ride.length; i++) {
      let leg = (ride[i])
      console.log(leg)
      console.log(ride)
      console.log(leg.numberOfPassengers)

      if (ride.length > 1) {
        levelOfService =  'Noober Pool'
      } 
      else if (ride[0].numberOfPassengers > 3) {
        levelOfService = 'Noober XL'
      }
      else if (ride[0].purpleRequested == true) {
        levelOfService = 'Noober Purple'
      }
      else {
        levelOfService = 'Noober X'
      }
 

      renderRide(leg)

    }
  

  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

