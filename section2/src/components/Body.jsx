export default function Body() {
  const user = {
    name: "asj",
    isLogedin: true,
  };

  if (user.isLogedin) {
    return <div>my page / log out</div>;
  } else {
    return <div>please log in</div>;
  }

  //   return (
  //     <>
  //       {user.isLogedin ? <div>hello {user.name}</div> : <div>please log in</div>}
  //     </>
  //   );
}
