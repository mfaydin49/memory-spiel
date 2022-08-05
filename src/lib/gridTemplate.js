const gridTemplate = (count) => {
  const fr =
    Number(count) % 5 === 0 ? "1fr 1fr 1fr 1fr 1fr" : "1fr 1fr 1fr 1fr";

  const grid = {
    display: "grid",
    gridTemplateColumns: `${fr}`,
    gridGap: "20px",
  };

  return grid;
};

export default gridTemplate;
