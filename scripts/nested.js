for (var x = 1; x <=100; x++) {
    var failedCounter = 0;

    for (var y = 2; y <= x - 1; y++) {

          if (x % y !== 0) {
            failedCounter++;
          } else {
            break;
          }

    }

    if (failedCounter === x - 2) {
      console.log(`${x}`);
    }
}
