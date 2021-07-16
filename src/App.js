import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Checker_inbox from './Checker-inbox';
import Collection_sheet from './Collection-sheet';
import Client_approval from './Client-approval';
import Individual_collection from './Individual_collection';
import Closing_entries from './Closing_entries';
import Frequent_posting from './Frequent-posting';
import Chart_of_accounts from './Chart-of-accounts';
import Create_closure from './Create-closure';
import Navigation from './Navigation';
import Docks from './Docks';

function App() {
  return <div className ="bigblue">
    <Router>
          <Route path="/checker_inbox">
            <Checker_inbox />
          </Route>
          <Route path="/collection_sheet">
            <Collection_sheet />
          </Route>
          <Route path="/client_approval">
            <Client_approval />
          </Route>
          <Route path="/individual_collection">
            <Individual_collection />
          </Route>
          <Route path="/closing_entries">
            <Closing_entries />
          </Route>
          <Route path="/frequent_posting">
            <Frequent_posting />
          </Route>
          <Route path="/chart_of_accounts">
            <Chart_of_accounts />
          </Route>
          <Route path="/create_closure">
            <Create_closure />
          </Route>
          <Route path="/navigation">
            <Navigation />
          </Route>
 
 
        <Route exact path="/" component={Docks} />
      
    </Router>
    </div>;
}

export default App;


