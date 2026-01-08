const rootContainer = document.querySelector(`#root`);
const rootContainerReact = ReactDOM.createRoot(rootContainer);

const animals = [`cat`, `dog`, `lion`, `lion`];

const users = [
  {
    id: 1,
    name: `User_1`,
    age: 10,
  },
  {
    id: 2,
    name: `User_2`,
    age: 20,
  },
  {
    id: 3,
    name: `User_3`,
    age: 30,
  },
];

const List = ({ list, color }) => {
  return Array.isArray(list) ? (
    <ul style={{ backgroundColor: color }}>
      {list.map((item) => (
        <li key={item.id}>
          <ul>
            {Object.keys(item)
              .filter((item) => item !== "id")
              .map((key) => (
                <li key={key}>
                  {key}: {item[key]}
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  ) : null;
};

rootContainerReact.render(
  <React.Fragment>
    <List list={users} color={"crimson"} />
    <List list={animals} />
    <List />
  </React.Fragment>
);
