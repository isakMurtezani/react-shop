/* eslint-disable react/prop-types */
function Page(props) {
  // const title = fakeProps.title;
  // const description = fakeProps.desctiption;

  // const { title, description } = props; // destructuring components
  // const { title, description } = fakeProps; // destructuring components

  return (
    <>
      <div id={'sidebar'}>{props.title}</div>
      <p>{}</p>
      {/*<h2>This is a page component</h2>*/}
    </>
  );
}

export { Page };
