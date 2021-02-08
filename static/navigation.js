var about = undefined
var experience = undefined
var education = undefined
var skills = undefined
var awards = undefined
var is_mobile_menu_active = false
// let projects = undefined

$(document).ready(function(){
    about = $('.about').position().top;
    experience = $('.experience').position().top;
    education = $('.education').position().top;
    skills = $('.skills').position().top;
    awards = $('.awards').position().top;
    // projects = $('.projects').position().top;
})

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (0 < scroll && scroll < experience) {
        $('.nav_experience').removeClass("nav-active")
        $('.nav_about').addClass("nav-active")
    } else if (experience <= scroll && scroll < education) {
        $('.nav_about').removeClass("nav-active")
        $('.nav_experience').addClass("nav-active")
        $('.nav_education').removeClass("nav-active")
    } else if (education <= scroll && scroll < skills) {
        $('.nav_experience').removeClass("nav-active")
        $('.nav_education').addClass("nav-active")
        $('.nav_skills').removeClass("nav-active")
    } else if (skills <= scroll && scroll < awards) {
        $('.nav_education').removeClass("nav-active")
        $('.nav_skills').addClass("nav-active")
        $('.nav_awards').removeClass("nav-active")
    } else if (awards <= scroll) {
        $('.nav_skills').removeClass("nav-active")
        $('.nav_awards').addClass("nav-active")
        // $('.nav_projects').removeClass("nav-active")
    } 
})

function move_nav(c) {
    $('html, body').animate({
        scrollTop: $('.'+c).position().top + 1,
        duration:600
    })
    is_mobile_menu_active = true;
    show_navbar();
}

function show_navbar() {
    if (!is_mobile_menu_active) {
        $('.mobile_sideBar').animate({
            height: 50 + 40 * 5,
            duration: 600
        })
        is_mobile_menu_active = true
    } else {
        $('.mobile_sideBar').animate({
            height: 50,
            duration: 600
        })
        is_mobile_menu_active = false
    }
}