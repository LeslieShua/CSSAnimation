$(function(){

  const animations = [
    {
      selector: ".work_wrap1",
      options: {
        left: '1%',
      },
    },
    {
      selector: ".work_wrap2",
      options: {
        right: '6%',
      },
    },
    {
      selector: ".work_wrap3",
      options: {
        left: '1%',
      },
    },
    {
      selector: ".work_wrap4",
      options: {
        right: '-4.5%',
      },
    },
  ]

  const sceneOptions = {
    triggerElement: ".trigger1",
    duration: "185%",
    offset: 200,
  };

  const sceneOptions2 = {
    triggerElement: ".trigger2",
    duration: "60%",
    offset: "1000vh",
  };

  // controller
  let controller = null;
  let workTxtScene = null;

  // scrollmagic 기능
  function initScrollMagic() {
    controller = new ScrollMagic.Controller();
  
    animations.forEach((animation) => {
      const tween = new TimelineMax().add(
        TweenMax.to(animation.selector, 1, animation.options)
      );
      const scene = new ScrollMagic.Scene(sceneOptions)
        .setTween(tween)
        .addTo(controller)
        .addIndicators();
    });
  
    const workTxtTween = new TimelineMax().add(
      TweenMax.to(".work_txt_wrap", 1, {bottom: '5%', transform: 'translateY(5%)'})
    );
  
    workTxtScene = new ScrollMagic.Scene(sceneOptions2)
      .setTween(workTxtTween)
      .addTo(controller)
      .addIndicators();
  }
  
  function disableScrollMagic() {
    if (controller) {
      controller.destroy(true);
      controller = null;
    }
  
    if (workTxtScene) {
      workTxtScene.destroy(true);
      workTxtScene = null;
    }
  }



  let timeoutId = null;
  let projectHtml = '';
  const DELAY1 = 1300;
  const DELAY2 = 1000;
  const DELAY3 = 1500;

  // 함수를 호출하여 max-width 체크
  function checkMaxWidth() {
    projectHtml += `
    <div class="trigger1"></div>
    <div class="container1">
      <div class="work_container">
  
        <div class="work_contents">
            <img src="./img/works_bg.png" alt="">
            
        <div class="work_wrap work_wrap1">
            <div class="works work01">
                <a class="zoomer" href="javascript:goPf('271')">
                <div class="work_tit">오스카</div>
                <div class="video">
                  <video preload="auto" autoplay="" muted="" loop="" playsinline="" poster="">
                      <source src="mainFile_1675843766_0.mp4" type="video/mp4">
                  </video>
              </div>
                </a>
            </div>
        </div>
        <div class="work_wrap work_wrap2">
            <div class="works work02">
                <a class="zoomer" href="javascript:goPf('157')">
      
                <div class="work_tit">코딩캠퍼스 홈페이지 제작</div>
                <img src="./img/mainFile_1675316882_0.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="work_wrap work_wrap3">
            <div class="works work03">
                <a class="zoomer" href="javascript:goPf('232')">
      
                <div class="work_tit">삼성 주니어 SW 아카데미</div>
                <img src="./img/mainFile_1675750636_0.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="work_wrap work_wrap4">
            <div class="works work04">
                <a class="zoomer" href="javascript:goPf('217')">
      
                <div class="work_tit">염창환병원</div>
                <img src="./img/mainFile_1675843865_0.jpg" alt="">
                </a>
            </div>
        </div>                   
      </div>
      
      <div class="trigger2"></div>
      <div class="work_txt_wrap">
        <div class="tit_text">
            <p><span>프로젝트</span></p>
        </div>
        <div class="tit">
            <p class="slide_txt"><span>Creative of</span></p>
            <p class="slide_txt"><span>WORK</span></p>
        </div>
        <p class="txt">
            <span>본질에 충실하여 변화에 순응하고 새로움을 추구하는</span>
            <span>생각의 경계를 넘어 유연한 사고와 혁신적인 발상을 플렉시블</span>
        </p>
      
        <a href="/" class="goto_btn project_center">
            전체 프로젝트
            <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
      </div>
    </div>
    `;

    if ($(window).width() >= 1024) {
      // min-width 1024px 이전에 추가한 HTML 코드를 지우고 다시 렌더링
      $('#project').empty();
      $('#project').append(`${projectHtml}`);
      initScrollMagic();
    } else { //max-width 1024
      disableScrollMagic();
      $('#project').empty();
      $('#project').append(`${projectHtml}`);
      $('.work_wrap1, .work_wrap2').addClass('button');
      $('.work_wrap3, .work_wrap4').addClass('button2');
    }
  }

  // 페이지 로드 시 한 번 호출
  checkMaxWidth();

  // 윈도우의 크기가 변경될 때마다 checkMaxWidth 함수 호출
  $(window).on('resize', function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(checkMaxWidth(), 200);
  });
  
  // 스크롤 이벤트 등록
  $(window).on("scroll", handleScroll);

  function handleScroll() {
    const buttonOffset = $('.button').offset().top;
    const buttonOffset2 = $('.button2').offset().top;
    const scrollTop = $(window).scrollTop();
    
    
    if(scrollTop + $(window).height() > buttonOffset)
    {
      $('.button').addClass('tt');
      $(window).off('scroll', handleScroll);
    }//else {$('.button').removeClass('tt');}

    if(scrollTop + $(window).height() > buttonOffset2)
    {
      $('.button2').addClass('tt2');
      $(window).off('scroll', handleScroll);
    }//else {$('.button2').removeClass('tt2');}


    if ($('.button').hasClass('tt')) {
      $('.work_wrap1').css('display', 'block');
      setTimeout(() => $('.work_wrap2').css('display', 'block'), DELAY1);
    } else {
      $('.work_wrap1, .work_wrap2').css('display', 'none');
    }
    if ($('.button2').hasClass('tt2')) {
      setTimeout(() => $('.work_wrap3').css('display', 'block'), DELAY2);
      setTimeout(() => $('.work_wrap4').css('display', 'block'), DELAY3);
    } else {
      $('.work_wrap3, .work_wrap4').css('display', 'none');
    }
    
  }
});

/*
기본 동작
1. ScrollMagic 컨트롤러 생성
2. animation object 생성 (tween 동작)
3. Scene object 생성 -> Scene에 4,5,6 추가
4. setTween(tween)
5. addTo(controller)
6. addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});

triggerHook에 지정된 값이 화면에 보이는 비율에 따라 애니메이션을 시작하거나 종료합니다.
0에서 1 사이의 값을 가짐
onEnter: Scene이 화면에 진입할 때 애니메이션을 시작합니다. (기본값)
onCenter: Scene이 화면의 중앙에 위치할 때 애니메이션을 시작합니다.
onLeave: Scene이 화면에서 벗어날 때 애니메이션을 시작합니다.
*/