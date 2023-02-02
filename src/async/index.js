const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve("assyncs"), 2000)
    : reject(new Error("error"));
  });
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hwyyy");
}

console.log("before async");
anotherFn();
console.log("after async");
