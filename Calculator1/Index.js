function insert(num) {
  document.form.visor.value = document.form.visor.value + num;
}

function equal() {
  let numero = document.form.visor.value;
  if (numero) {
    document.form.visor.value = eval(numero);
  }
}

function backspace() {
  let numero = document.form.visor.value;
  document.form.visor.value = numero.substring(0, numero.length - 1);
}
