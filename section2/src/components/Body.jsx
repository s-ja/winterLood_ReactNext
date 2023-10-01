export default function Body() {
  const number = 101;
  const string = "Hello";
  const bool = true;
  const obj = {
    a: 1,
  };
  const func = () => {
    return "func";
  };

  return (
    <>
      <h1>{string}</h1>
      <h2>
        {number % 2 === 0 ? (
          <div>{number} is even</div>
        ) : (
          <div>{number} is odd</div>
        )}
      </h2>
      <h2>{bool}</h2>
      <h2>{obj.a}</h2>
      <h2>{func()}</h2>
    </>
  );
}
