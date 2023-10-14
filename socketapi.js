const io = require("socket.io")();
const socketapi = {
  io: io,
};

// dev socket io logic
var dev = io.of("/dev");

var devUsers = {};
dev.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    devUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    dev.emit("user-list", devUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = devUsers[socket.id]));
    delete devUsers[socket.id];
    dev.emit("user-list", devUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

// news socket io logic

var news = io.of("/news");

var newsUsers = {};
news.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    newsUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    news.emit("user-list", newsUsers);
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

// blood socket io logic
var blood = io.of("/blood");

var bloodUsers = {};
blood.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    bloodUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    blood.emit("user-list", bloodUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = bloodUsers[socket.id]));
    delete bloodUsers[socket.id];
    blood.emit("user-list", bloodUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

// career socket io logic

var career = io.of("/career");

var careerUsers = {};
career.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    careerUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    career.emit("user-list", careerUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = careerUsers[socket.id]));
    delete careerUsers[socket.id];
    career.emit("user-list", careerUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

// cricket socket io logic

var cricket = io.of("/cricket");

var cricketUsers = {};
cricket.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    cricketUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    cricket.emit("user-list", cricketUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit(
      "user-disconnected",
      (user = cricketUsers[socket.id])
    );
    delete cricketUsers[socket.id];
    cricket.emit("user-list", cricketUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

// IT socket io logic

var it = io.of("/it");

var itUsers = {};
it.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    itUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    it.emit("user-list", itUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = itUsers[socket.id]));
    delete itUsers[socket.id];
    it.emit("user-list", itUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

// java socket io logic
var java = io.of("/java");

var javaUsers = {};
java.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    javaUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    java.emit("user-list", javaUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = javaUsers[socket.id]));
    delete javaUsers[socket.id];
    java.emit("user-list", javaUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

// market socket io logic
var market = io.of("/market");

var marketUsers = {};
market.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    marketUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    market.emit("user-list", marketUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = marketUsers[socket.id]));
    delete marketUsers[socket.id];
    market.emit("user-list", marketUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

// ngo socket io logic

var ngo = io.of("/ngo");

var ngoUsers = {};
ngo.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    ngoUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    ngo.emit("user-list", ngoUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = ngoUsers[socket.id]));
    delete ngoUsers[socket.id];
    ngo.emit("user-list", ngoUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

// python socket io logic

var python = io.of("/python");

var pythonUsers = {};
python.on("connection", function (socket) {
  socket.on("new-user-join", function (username) {
    pythonUsers[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
    python.emit("user-list", pythonUsers);
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user-disconnected", (user = pythonUsers[socket.id]));
    delete pythonUsers[socket.id];
    python.emit("user-list", pythonUsers);
  });

  socket.on("message", function (data) {
    socket.broadcast.emit("message", { user: data.user, msg: data.msg });
  });
});

module.exports = socketapi;
