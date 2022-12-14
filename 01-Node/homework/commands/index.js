const fs = require("fs");
const request = require('request') 

const write = (value) => {
  process.stdout.write(value + "\n");
  process.stdout.write("Prompt > ");
};

module.exports = {
  pwd: () => {
    write(process.cwd().split("\\").at(-1));
  },
  date: () => {
    write(Date());
  },
  ls: () => {
    fs.readdir(".", (err, files) => {
      const text = files.join("\n");
      write(text);
    });
  },
  echo: (text) => {
    write(text);
  },
  //cat muestra todo el contenido del archivo
  cat: (filename) => {
      fs.readFile('./' + filename, 'utf8', (err, file)=>{
        write(file);  
    });
  },
  //head, muestra las primeras lineas de un archivo
  head: (filename) => {
    fs.readFile('./' + filename, 'utf8', (err, file)=>{
        write (file.split('\n').slice(0, 5).join('\n'));
    });
  },
  // tail, muestra las ultimas lineas de un archivo
  tail: (filename) => {
    fs.readFile('./' + filename, 'utf8', (err, file)=>{
        write (file.split('\n').slice(-7).join('\n'));
    });
  },
  curl:(url)=>{
    request(url, (error, reponse, body)=>{
        write(body)
    });
  },
};
