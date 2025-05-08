const user_id = GetCookie("op");
var audio = new Audio('https://media.memesoundeffects.com/2021/06/Discord-Notification-Sound-Effect.mp3');

socket.on('prompt', function(prompt) {
  if (msg.message.owner.id != user_id && document.hidden) {
      audio.play();
  };
});
