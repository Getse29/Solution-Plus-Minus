const arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = function (arr) {
  const num = [0, 0, 0];

  arr.forEach((number) => {
    if (number > 0) num[0]++;
    else if (number < 0) num[1]++;
    else num[2]++;
  });

  num.forEach((number) =>
    console.log((number / arr.length).toFixed(arr.length))
  );

  return;
};

plusMinus(arr);
