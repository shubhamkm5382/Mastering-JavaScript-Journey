for (let index = 0; index <= 20; index++) {
  const element = [index];

  if (index == 5) {
    console.log("dedected 5");
    break;
  }

  console.log(element);
}

for (let index = 0; index <= 20; index++) {
  const element = [index];

  if (index == 5) {
    console.log("dedected 5");
    continue;
  }

  console.log(element);
}
