let fs = require("fs");
let path = require("path");
fs.readdir("mainfolder", (err, data) => {
  data.forEach((file) => {
    console.log(file, "file");
    let ext = path.extname(file).slice(1).toLocaleUpperCase();
    let is_folder = fs.existsSync(path.join("mainfolder", ext));
    if (!is_folder) {
      fs.mkdirSync(path.join("mainfolder", ext));
    }
    let oldpath = path.join("mainfolder", file);
    let newpath = path.join("mainfolder", ext, file);
    fs.renameSync(oldpath, newpath);
  });
});