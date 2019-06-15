var i = 0;

  function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.")
    console.log(i)
  } while (incrementVariable() < num);
}

doWhileLoop(10)

