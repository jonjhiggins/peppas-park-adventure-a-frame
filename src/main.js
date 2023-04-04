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
