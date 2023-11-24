var controller = new ScrollMagic.Controller();

var ani04_1 = gsap.timeline();
ani04_1.from("#overview h1", 0.9, {
  opacity: -1, // 시작값 0
  delay: 0.8,
  //y: 150, // 작아진 상태에서 시작 (0.5는 반으로 작아짐)
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#overview",
  triggerHook: 0.5,
})
  .setTween(ani04_1)
  .addTo(controller);
