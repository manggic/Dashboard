import { getIcon } from "./function";

const card = (dataToShow) => {
  console.log("data", dataToShow);
  return (
    <div
      // onMouseEnter={() => this.changeTheHover()}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
      // className={this.state.showOnHover ? "hover" : ""}
    >
      {dataToShow.map((item) => {
        let IconName = getIcon(item.iconName);

        return (
          <div className="card">
            <div className="cardText">
              <strong>{item.count}</strong>
              <p>{item.name}</p>
            </div>
            <div className="cardIcon">
              <IconName />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const verticalLineseperator = () => {
  return (
    <div class="or-spacer-vertical left">
      <div class="mask"></div>
    </div>
  );
};

export { card, verticalLineseperator };
