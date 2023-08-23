function makeInfiniteEnergyGenerator() {
  let energy = 0;
  return function (booster = 0) {
    if (booster) {
      energy += booster;
    } else {
      energy++;
    }

    return energy;
  };
}

// const energy = makeInfiniteEnergyGenerator();

// for (let i = 0; i < 5; i++) {
//   console.log(energy());
// }

// console.log(energy(5));

// --------------------------------------------------

function* infiniteEnergyGenerator() {
  let energy = 1;
  while (true) {
    const booster = yield energy;

    if (booster) {
      energy += booster;
    } else {
      energy++;
    }
  }
}

const energyGenerator = infiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  console.log(energyGenerator.next());
}

console.log(energyGenerator.next(5));
