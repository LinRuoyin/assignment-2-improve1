let add = document.querySelector('#increment');
let minus = document.querySelector('#decrement');
let num = document.querySelector('#number')
let integer = 0




function addFreeShippingSpan() {
  if (!document.querySelector('#freeShipping')) {
    let span = document.createElement('span')
    span.id = 'freeShipping'
    span.innerHTML = 'You have free shipping'
    document.querySelector('#container').append(span)
    span.classList.add('reminder')
  }
}

function addOutOfStockSpan() {
  if (!document.querySelector('#outOfStock')) {
    let span = document.createElement('span')
    span.id = 'outOfStock'
    span.innerHTML = 'Out of Stock!'
    document.querySelector('#container').append(span)
    span.classList.add('reminder')
  }
}



function checkIntegar() {
  if (integer === 0) {
    minus.disabled = true
  } else {
    minus.disabled = false
  }

  if (integer >= 10 && integer < 20) {
    addFreeShippingSpan()
  } else {
    const freeShippingSpan = document.querySelector('#freeShipping')
    if (freeShippingSpan) {
      freeShippingSpan.remove()
    }
  }

  if (integer >= 20) {
    addOutOfStockSpan()
    add.style.backgroundColor = 'red'
  } else {
    const outOfStockSpan = document.querySelector('#outOfStock')
    if (outOfStockSpan) {
      outOfStockSpan.remove()
      add.style.backgroundColor = ''
    }
  }

}

checkIntegar()



add.addEventListener('click', function () {
  integer++
  num.innerHTML = integer
  checkIntegar()
})

minus.addEventListener('click', function () {
  if (integer <= 0) {
    integer = 0
  } else {
    integer--
    num.innerHTML = integer
    checkIntegar()
  }
}
)




let reset = document.createElement('button')
document.querySelector('#container').append(reset)
reset.innerHTML = 'Reset'
reset.classList.add('reset')
reset.addEventListener('click', function () {
  num.innerHTML = 0
  integer = 0
  checkIntegar()
})



