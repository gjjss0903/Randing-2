$(function(){

  $('.account').click(function(){
    $('.account-content').stop().slideToggle(100)
  })

  $('.modal').click(function(){
    $('.personal').stop().slideToggle()
  })
  $('.btn-x').click(function(){
    $('.personal').slideToggle()
  })
  $('.symptom').click(function(){
    $(this).toggleClass('active')
  })
})