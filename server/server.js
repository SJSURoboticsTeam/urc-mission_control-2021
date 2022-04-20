const express = require("express");
const os = require("os");

const app = express().set("json spaces", 2);
const port = 3000;
const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

app.use(express.json({ limit: "2mb", extended: false }));
app.use(express.urlencoded({ extended: false }));

var driveCommands = {
  heartbeat_count: 0,
  is_operational: 1,
  wheel_shift: 0,
  drive_mode: "S",
  speed: 0,
  angle: 0,
};

var driveStatus = {
  heartbeat_count: 0,
  is_operational: 0,
  wheel_shift: 0,
  drive_mode: "S",
  battery: 0,
  left_wheel_speed: 0,
  left_wheel_angle: 0,
  right_wheel_speed: 0,
  right_wheel_angle: 0,
  back_wheel_speed: 0,
  back_wheel_angle: 0,
};

app.get("/", (req, res) => {
  res.send("Home");
});

app.post("/ip", (req, res) => {
  ip = req.body.ip_address;
  console.log(`Obtained ip address: ${ip}`);
  res.redirect("/");
});

app.get("/drive", (req, res) => {
  driveStatus.is_operational = Number(req.query.is_operational);
  driveStatus.wheel_shift = Number(req.query.wheel_shift);
  driveStatus.drive_mode = String(req.query.drive_mode);
  driveStatus.battery = Number(req.query.battery);
  driveStatus.left_wheel_speed = Number(req.query.left_wheel_speed);
  driveStatus.left_wheel_angle = Number(req.query.left_wheel_angle);
  driveStatus.right_wheel_speed = Number(req.query.right_wheel_speed);
  driveStatus.right_wheel_angle = Number(req.query.right_wheel_angle);
  driveStatus.back_wheel_speed = Number(req.query.back_wheel_speed);
  driveStatus.back_wheel_angle = Number(req.query.back_wheel_angle);

  driveCommands.heartbeat_count = Number(req.query.heartbeat_count);
  console.log("Query Params: ", req.query);
  console.log("Returned Commands: ", driveCommands);
  res.jsonp(driveCommands);
  });

  drive.post("/drive", (req, res) => {
    driveCommands.is_operational = req.body.is_operational;
    driveCommands.wheel_shift = req.body.wheel_shift;
    driveCommands.drive_mode = req.body.drive_mode;
    driveCommands.speed = req.body.speed;
    driveCommands.angle = req.body.angle;
    driveCommands.heartbeat_count = 0;
    res.jsonp(driveCommands);
  });

app.post("/arm", (req, res) => {
  console.log("arm post!");
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Computer:\thttp://localhost:3000`);
  // Line below only works for Nate's T440p Thinkpad
  // console.log(
  //   `Network:\thttp://${networkInterfaces.wlp4s0[0].address}:${port}`
  // );
});
