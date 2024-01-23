function isPrime(v) {
  const isPrimeCache = {};

  if (v <= 3) {
    return v > 1;
  }

  if (v % 2 == 0 || v % 3 == 0) {
    return false;
  }

  if (isPrimeCache[v]) {
    return isPrimeCache[v];
  } else {
    const vSqrt = Math.sqrt(v);

    for (let i = 5; i < vSqrt; i += 6) {
      if (v % i == 0 || v % (i + 2) == 0) {
        isPrimeCache[v] = false;

        return isPrimeCache[v];
      }
    }

    isPrimeCache[v] = true;

    return isPrimeCache[v];
  }
}

function factorize(v) {
  const factorizeCache = {};

  if (factorizeCache[v]) {
    return factorizeCache[v];
  } else {
    if (!isPrime(v)) {
      let i = Math.floor(Math.sqrt(v));
      while (v % i != 0) {
        i--;
      }
      factorizeCache[v] = [...factorize(i), ...factorize(v / i)];

      return factorizeCache[v];
    }

    factorizeCache[v] = [v];

    return factorizeCache[v];
  }
}

