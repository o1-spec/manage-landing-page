'use strict'

const hamburger = document.querySelector('.hamburger')
const mobile = document.querySelector('.mobile-links')
const btnMobile = document.querySelector('.btn-mobile')
const mob = document.querySelector('.mobile')
const body = document.getElementsByTagName('body')
const mobileLink = document.querySelectorAll('.mobile-link')
const overlay = document.querySelector('.overlay')
const date = document.querySelector('.date')

const now = new Date
const day = now.getFullYear()
date.textContent = day

hamburger.addEventListener('click',function(e){
    mob.classList.toggle('nav-open')
    overlay.classList.toggle('hidden')
})

mobileLink.forEach(function(btn){
    btn.addEventListener('click',function(e){
        e.preventDefault;
        mob.classList.toggle('nav-open')
        overlay.classList.toggle('hidden')
    })
})
