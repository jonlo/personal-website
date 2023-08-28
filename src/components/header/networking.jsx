import "./networking.css";

export const Networking = (props) => {
  const goToUrl = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <div className="Networking">
      <ul>
        {props.networks.map((network, index) => {
          let icon = network.icon + " fa-2x";
          return (
            <li
              key={index}
              className={icon}
              onClick={() => goToUrl(network.url)}
              alt={network}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};
