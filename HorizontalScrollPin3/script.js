$(function(){
	const sections = gsap.utils.toArray(".container section");
	const mask = document.querySelector(".mask");
	
  //Pin
	let scrollTween = gsap.to(sections, {
	  xPercent: -100 * (sections.length - 1),
	  ease: "none",
	  scrollTrigger: {
		trigger: ".container",
		pin: true,
		scrub: 1,
		end: "+=3000",
		//snap: 1 / (sections.length - 1),
		markers: true,
		
	  }
	});
	// console.log(1 / (sections.length - 1))
	
	//Progress bar animation 진척도
	gsap.to(mask, {
	  width: "100%",
	  scrollTrigger: {
		trigger: ".wrapper",
		start: "top left",
		scrub: 1
	  }
	});


  // function createScrollTrigger(start, end) {}
  let text2 = document.querySelectorAll(".anim2");
  gsap.to(text2, {
    opacity: 1,
    ease: "linear",
    //duration: 2,
    //stagger: 0.1,
    scrollTrigger: {
      trigger: ".sec0",
      markers: true,
      start: "top center",
      end: "top center",
      toggleActions: "play none reverse none", // 1
      markers: {
        startColor: "blue",
        endColor: "red",
        fontSize: "36px",
        fontWeight: "bold",
        indent: 20,
        name: "myMarker11"
      }
    }
  });

  // createScrollTrigger("50% center", "60% center");
  // createScrollTrigger("20% center", "40% center");

// GSAP ScrollTrigger 최종 상태 유지
	sections.forEach((section) => {
	  let text = section.querySelectorAll(".anim");

	  if(text.length === 0)  return 

	  gsap.to(text, {
      opacity: 1,
      ease: "linear",
      
      scrollTrigger: {
        trigger: section,
        containerAnimation: scrollTween, //위치와이동을 제어 (애니메이션 타임라인을 지정) 바닥 기준
        start: "20% center", //첫번째: start(고정) 두번째: scroller-start(가변)
        end: "left center", //첫번째: end(고정) 두번째: scroller-end(가변)
        markers: true,
        toggleActions: "play none reverse none", // 1
        markers: {
          startColor: "orange",
          endColor: "purple",
          fontSize: "16px",
          fontWeight: "bold",
          indent: 20,
          name: "myMarker"
        }
		  }
	  });

	});
/**트리거 요소의 위치를 ​​결정하는 기준점 end에 따라서 reverse가 작동
 * end: "left center", //첫번째: end(고정) 두번째: scroller-end(가변)
 * end: 뷰포트를 기준으로 트리거의 끝 위치를 지정합니다.
  트리거가 이 위치에 도달하면 연결된 애니메이션이 완료됩니다.
  scroller-end: 스크롤 컨테이너에 상대적인 트리거의 끝 위치를 지정합니다.
  이는 뷰포트보다 작은 스크롤 컨테이너가 있고 해당 컨테이너 내의 특정 위치에 도달하면
  트리거를 종료하려는 경우에 유용합니다.
 */






  
  // --- ORANGE PANEL --- 
  gsap.from(".line-orange", {
    scrollTrigger: {
      trigger: ".line-orange",
      toggleActions: "play complete reverse reset"
    },
    scaleX: 0, 
    duration: 10, 
    repeat: -1, 
    transformOrigin: "left center", 
    ease: "none"
  });
});
//toggleActions: 'restart none none none',
//onToggle: self => self.isActive ? element.classList.add('show') : element.classList.remove('show')

//refresh: true, 페이지 크기가 조정되거나 방향이 변경되면 scrollTrigger가 자동으로 새로 고쳐짐
//repeatRefresh: true, 트리거 및 종료 위치를 업데이트
// scrub: true,
//once: false,   
// toggleActions: "restart none none none",

// const tl = gsap.timeline({
//   repeat: -1, // repeat indefinitely
//   yoyo: true // reverse the animation on each repeat
// });
// animation: tl,


// const tl = gsap.timeline({
//   repeat: -1,
//   yoyo: true
// });

// tl.from(text, {
//   y: -130,
//   opacity: 0,
//   duration: 0.5,		
// });


  //ScrollMagic TweenMax 애니메이션 반전
	// var controller = new ScrollMagic.Controller();

  // sections.forEach((section) => {

  // let text = section.querySelectorAll(".anim");

	// var tween = TweenMax.from(text, 0.5, {
	// 	y: -130,
	// 	opacity: 0,
	// 	duration: 0.5,
	// });

	// var scene = new ScrollMagic.Scene({
	// 	triggerElement: '.wrapper',
	// })
	// .setTween(tween)
	// // .setClassToggle('.purple-cube', 'show')
	// .addTo(controller)
	// .addIndicators({name: "Hello, [Name]!"});
  // });