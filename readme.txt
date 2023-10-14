// news socket io logic

var news = io.of("/news");

var newsUsers = {};
news.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    newsUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    news.emit("user-list",newsUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = newsUsers[socket.id]));
    delete newsUsers[socket.id];
    news.emit("user-list", newsUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});
