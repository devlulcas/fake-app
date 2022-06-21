function fisherShuffle<T>(array: T[]) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    let currentValue = array[currentIndex];
    let randomValue = array[randomIndex];

    // Swap
    [array[randomIndex], array[currentIndex]] = [currentValue, randomValue];
  }

  return array;
}

export { fisherShuffle };
