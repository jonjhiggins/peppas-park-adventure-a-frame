AFRAME.registerComponent("follow-player", {
  init: function () {
    this.playerEl = this.el.sceneEl.querySelector("#player");
    this.cameraOffset = { ...this.el.getAttribute("position") };
  },
  tick: function () {
    const position = {
      x: this.playerEl.getAttribute("position").x + this.cameraOffset.x,
      y: this.playerEl.getAttribute("position").y + this.cameraOffset.y,
      z: this.playerEl.getAttribute("position").z + this.cameraOffset.z,
    };
    this.el.setAttribute("position", position);
  },
});

AFRAME.registerComponent("control-bad-dog", {
  init: function () {
    this.playerEl = this.el.sceneEl.querySelector("#player");
    this.speed = 0.005;
  },
  tick: function (time, timeDelta) {
    this.el.object3D.lookAt(this.playerEl.object3D.position);
    this.el.object3D.translateZ(1 * timeDelta * this.speed);
  },
});
