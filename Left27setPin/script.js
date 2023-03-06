// Define the animation options for each element
const animations = [
	{
	  selector: ".videoCover",
	  options: {
		scale: 1,
		height: "100vh",
		width: "100%",
		y: 65,
	  },
	},
	{
	  selector: "video",
	  options: {
		scale: 1,
		height: "100vh",
		width: "100%",
		y: 65,
	  },
	},
	{
	  selector: ".txt_top",
	  options: {
		color: "#FFF",
	  },
	},
	{
	  selector: ".txt_left",
	  options: {
		left: "28%",
		color: "white",
	  },
	},
	{
	  selector: ".txt_right",
	  options: {
		right: "27.5%",
		color: "#FFF",
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
  
  // Loop through each animation and create a ScrollMagic scene with a tween
  animations.forEach((animation) => {
	const tween = new TimelineMax().add(
	  TweenMax.to(animation.selector, 1, animation.options)
	);
	const scene = new ScrollMagic.Scene(sceneOptions)
	  .setTween(tween)
	  .addTo(controller)
	  .addIndicators();
  });
  
  // Pin the greeting_wrap element
  const pinScene = new ScrollMagic.Scene(sceneOptions)
	.setPin("#greeting_wrap")
	.addTo(controller)
	.addIndicators();