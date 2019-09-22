const randomString = (() => {
  const gen = (min, max) => {
    const usedMax = max + 1;
    return [...Array(usedMax - min)].map((s, i) =>
      String.fromCharCode(min + i)
    );
  };

  const sets = {
    numeric: gen(48, 57),
    alphaLower: gen(97, 122),
    alphaUpper: gen(65, 90),
    special: [...`~!@#$%^&*()_+-=[]{}|;:'",./<>?`]
  };

  function* iter(len, set) {
    let usedSet = set;

    if (set.length < 1) {
      usedSet = Object.values(sets).flat();
    }
    for (let i = 0; i < len; i += 1) {
      // eslint-disable-next-line no-bitwise
      yield usedSet[(Math.random() * usedSet.length) | 0];
    }
  }

  return Object.assign(
    (len, ...set) => [...iter(len, set.flat())].join(''),
    sets
  );
})();

export default randomString;
