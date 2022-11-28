import "./dashboard.css";

import Accordian from "./accordian";
import Alert from "./alert";
import Hr from "./hr";
import Badges from "./Badges";

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <Accordian />
      <Hr />
      <Alert />
      <Hr />
      <Badges />
    </div>
  );
};

export default Dashboard;
