//ScrollGiveClass플러그인 호출
var sgc1 = new ScrollGiveClass("header",{
	baseline:100
});

//Swiper플러그인 호출
const swiper1 = new Swiper('#main_view', {
  // Optional parameters
  wrapperClass:'slider',  
	slideClass:'view',
	autoplay: { //자동슬라이드
    delay: 5000, //하나의 슬라이드가 보여주는 시간 
  },
  speed:800, //슬라이드가 전환되는(움직이는) 시간
  spaceBetween:10, //슬라이드 사이간격
  // If we need pagination  
  pagination: {
    el: '.pager', //버튼영역 대상
    bulletActiveClass:'active', //활성화된 요소에 추가되는 클래스
    clickable:true, //클릭시 슬라이드 이동
  },
});

//press영역 스와이퍼 호출
let swiper2 = new Swiper("#press .inner",{
  wrapperClass:'slider',  
	slideClass:'item', 
  slidesPerView:1,
  spaceBetween:10,
  pagination:{
    el:'.dot',
    bulletActiveClass:'active',
    clickable:true
  },
  breakpoints:{
    //화면의 너비가 320이상 적용 옵션
    320:{slidesPerView:2, spaceBetween:20},
    //화면의 너비가 640이상 적용 옵션
    640:{slidesPerView:3, spaceBetween:30},
    //화면의 너비가 768이상 적용 옵션
    768:{slidesPerView:4, spaceBetween:40},
    //화면의 너비가 1024이상 적용 옵션
    1024:{slidesPerView:5, spaceBetween:30},
  }
});
 
//상품검색영역 스크립트
let search = document.getElementById("search");
let open_btn = document.getElementsByClassName("open_search");
    //배열로 만들어짐.
let close_btn = document.querySelector(".close_search");

//돋보기 버튼 클릭 시
open_btn[0].addEventListener("click",function(e){
  e.preventDefault(); //태그의 본래기능을 동작시키지 않음.
  search.classList.add("show");
});

//닫기 버튼 클릭 시
close_btn.addEventListener("click",function(){
  search.classList.remove("show");
});

//ESC키를 눌렀을 때
window.addEventListener("keydown",function(e){
  var state = search.classList.contains("show");
  var esc = (e.key === "Escape"); //누른 키가 "ESC"키 맞는지 확인
  if(state && esc){
    search.classList.remove("show");
  }
});


//모바일메뉴영역
var menu_btn = document.querySelector(".open_menu");
var menu = document.querySelector(".menu");

menu_btn.addEventListener("click",function(e){
  e.preventDefault(); //태그의 기능이 동작하지 않음.
  menu.classList.toggle("active");
  this.classList.toggle("active");
});

