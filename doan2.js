const addressbt = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
const addressaccept = document.querySelector('#address-accept')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
let index = 0
const rightbtn = document.querySelector('.fa-angle-right')
const leftbtn = document.querySelector('.fa-angle-left')

addressbt.addEventListener("click", function(){
	document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click", function(){
	document.querySelector('.address-form').style.display = "none"
})
addressaccept.addEventListener("click", function(){
	document.querySelector('.address-form').style.display = "none"
})

rightbtn.addEventListener('click', function(){
	index = index + 1
	if(index>imgNuber.length - 1){
		index=0
	}
	document.querySelector('.slider-content-left-top').style.right =index *100+"%"
})
leftbtn.addEventListener('click', function(){
	index = index - 1
	if(index<0){
		index=imgNuber.length - 1
	}
	document.querySelector('.slider-content-left-top').style.right =index *100+"%"
})

const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li')

imgNuberLi.forEach(function(image, index){
	image.addEventListener("click",function(){
		removeactive()
		document.querySelector('.slider-content-left-top').style.right =index *100+"%"
		image.classList.add('active')
	})
})
function removeactive(){
	let imgactive= document.querySelector('.active')
	imgactive.classList.remove('active')
}
function imgAuto(){
	index = index + 1
	if(index>imgNuber.length - 1){
		index=0
	}
	removeactive()
	document.querySelector('.slider-content-left-top').style.right =index *100+"%"
	imgNuberLi[index].classList.add('active')
}
setInterval(imgAuto,5000)




const rightbtn1 = document.querySelector('.fa-angle-right1')
const leftbtn1 = document.querySelector('.fa-angle-left1')
const imgNuber1 = document.querySelectorAll('.slider-product1-content-items')
rightbtn1.addEventListener('click', function(){
	index = index + 1
	if(index>2){
		index=0
	}
	document.querySelector('.slider-product1-content-items-content').style.right =index *100+"%"
})
leftbtn1.addEventListener('click', function(){
	index = index - 1
	if(index<0){
		index=2
	}
	document.querySelector('.slider-product1-content-items-content').style.right =index *100+"%"
})



const btn = document.querySelectorAll('#button-add button')
btn.forEach(function(button, index){
button.addEventListener('click',function(event){{
	var btnItem = event.target
	var product = btnItem.parentElement.parentElement.parentElement
	var productImg = product.querySelector('img').src
	var productName = product.querySelector('.n1').innerText
	var productPrice = product.querySelector('.p1 span').innerText
	addcart(productImg, productName, productPrice)
}})
})
function addcart(productImg, productName, productPrice){
	var addtr = document.createElement('tr')
	var cartItem = document.querySelectorAll('tbody tr')
	for (var i=0;i<cartItem.length;i++){
		var productT = document.querySelectorAll('.titleName')
		if(productT[i].innerHTML == productName){
			alert('Sản phẩm của bạn đã có trong giỏ hàng')
			return
		}
	}
	var trcontent = "<tr><td style='display:flex;align-items:center;'><img style='width:70px;' src='"+productImg+"' alt=''><span class='titleName'>"+productName+"</span></td><td><p><span class='prices'>"+productPrice+"</span><sup>đ</sup></p></td><td><input style='width:30px;outline:none;' type='number' value='1' min='1'></td><td style='cursor:pointer;'><span class='Cart-delete'>Xoá</span></td></tr>"
	addtr.innerHTML = trcontent
	var cartTable = document.querySelector('tbody')
	cartTable.append(addtr)
	carttotal()
	deleteCart()
}



function carttotal(){
	var cartItem = document.querySelectorAll('tbody tr')
	var totalC=0
	for (var i=0;i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector('input').value
		
		var productPrice = cartItem[i].querySelector('.prices').innerHTML
		
		totalA = inputValue*productPrice*1000
		totalC = totalC + totalA
		
		
	}
	var cartTotalA = document.querySelector('.price-total span')
	cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
	inputchange()
}




function deleteCart(){
	var cartItem = document.querySelectorAll('tbody tr')
	for (var i=0;i<cartItem.length;i++){
		var productT = document.querySelectorAll('.Cart-delete')
		productT[i].addEventListener('click',function(event){
			var cartdelete = event.target
			var cartitemR = cartdelete.parentElement.parentElement
			cartitemR.remove()
			carttotal()
		})
	}
}



function inputchange(){
	var cartItem = document.querySelectorAll('tbody tr')
	for (var i=0;i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector('input')
		inputValue.addEventListener('change',function(){
			carttotal()
		})
	}
}
const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector('#cart')
cartshow.addEventListener('click',function(){
	document.querySelector('.cart').style.right='0'
})
cartbtn.addEventListener('click',function(){
	document.querySelector('.cart').style.right='-100%'
})
const cartpay = document.querySelector('.cart button')
cartpay.addEventListener('click',function(){
	document.querySelector('.tbody').remove()
	carttotal()
})