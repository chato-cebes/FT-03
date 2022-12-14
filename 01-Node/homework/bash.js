const commands = require("./commands");
process.stdout.write("Prompt > ");

process.stdin.on("data", function (data) {
  const input = data.toString().trim().split(" "); // esta lina convierte la informacion ingresada como "data" en lenguaje que podamos entender, primero a string y luego a caracteres conocidos. De lo contrario aparece en binario.
  const cmd = input.shift();
  const args = input.join(" ")


  /* switch (cmd){
    case 'pwd':
      // ejecutar pwd => imprime el directorio actual
      commands.pwd();
      break;
    case 'date':
        // ejecutar date => imprime la fecha
        commands.date();
        break;
    default:
      //imprimir un mensaje de error
  } */

  if (commands.hasOwnProperty(cmd)) {
    commands[cmd](args); //Esta linea remplaza todo el switch
  } else {
    process.stdout.write("El comando no existe");
  }

});
