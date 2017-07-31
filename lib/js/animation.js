const Animation = {
  update: function(data) {
    Animation.glassJoe(data);
    Animation.littleMac(data);
  },

  glassJoe: function(data) {
    data.glassJoe.currentState.animation(data);
  },

  littleMac: function(data) {
    data.littleMac.currentState.animation(data);
  }
};

export default Animation;