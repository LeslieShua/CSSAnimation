$(function(){
	
// Define the animation options for each element
const animations = [
	{
	  selector: ".videoCover",
	  options: {
		scale: 1,
		height: "100%",
		width: "100%",
	  },
	},
  ];
  
  // Define the scroll magic scene options
  const sceneOptions = {
	triggerElement: ".trigger1",
	duration: "200%",
	offset: 545,
  };
  
  // Create a ScrollMagic controller
  const controller = new ScrollMagic.Controller();

  // if (window.innerWidth >= 1024) {
  animations.forEach((animation) => {
	const tween = new TimelineMax().add(
	  TweenMax.to(animation.selector, 1, animation.options)
	);
	const scene = new ScrollMagic.Scene(sceneOptions)
	  .setTween(tween)
	  .addTo(controller)
	  // .addIndicators();
  });

  
  // Pin the greeting_wrap element
  const pinScene = new ScrollMagic.Scene(sceneOptions)
	.setPin("#greeting_wrap")
	.addTo(controller)
	// .addIndicators();
// }
});