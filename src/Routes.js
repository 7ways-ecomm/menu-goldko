import { Switch, Route, useLocation } from "react-router-dom";


import Categories from "./Categories";
import Detail from "./Detail";
import DetailContent from "./DetailContent";
import Blends from "./Blends";

const Routes = () => {
  const location = useLocation();

  return (
        <div>
            <Switch location={location}>
                <Route exact path="/" component={Categories} />
                <Route exact path="/category/:id" component={Detail} />
                <Route exact path="/product/:id" component={DetailContent} />
                <Route exact path="/blends/" component={Blends} />
            </Switch>
        </div>
  );
}

export default Routes;