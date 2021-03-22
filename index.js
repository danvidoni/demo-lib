function fancyConsole(name) {
  return function(args) {
    console.log(`======== ${name} ========= : ${JSON.stringify(args)}`);
  }
}

module.exports = {
  fancyConsole
}
