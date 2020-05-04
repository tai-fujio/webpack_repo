export default () => {
  console.log('sample');
  const obj1 = { a:1, b:2, c:3 };
  const obj2 = { ...obj1, d:4, e:5 };
  console.log(obj2);
}
