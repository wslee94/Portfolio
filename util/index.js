function scrollMove(moveY, direction, scrollBody) {
  if (!scrollBody) return;

  const SPEED = 3;
  let vy = 0;
  let pageYOffset = 0;

  var loop = setInterval(function () {
    vy += SPEED * direction;

    if (direction > 0) {
      pageYOffset = Math.min(moveY, scrollBody.scrollTop + vy);
    } else {
      pageYOffset = Math.max(moveY, scrollBody.scrollTop + vy);
    }

    scrollBody.scrollTo(0, pageYOffset);

    if (pageYOffset >= moveY && direction > 0) {
      clearInterval(loop);
    } else if (pageYOffset <= moveY && direction < 0) {
      clearInterval(loop);
    }
  }, 10);
}

export { scrollMove };
