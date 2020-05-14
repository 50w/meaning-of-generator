import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import {AcronymComponent} from './components';

import "./App.css";
import "./mvp.css";

function App() {
  const [acronym, setAcronym] = useState<string>("");

  const contributors = [
    { name: "Nick", url: "https://www.github.com/nicklewanowicz" },
    { name: "50w", url: "https://www.github.com/50w" },
  ];

  console.log(location);

  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: 'auto', width: '100%'}}>
      <Router>
          <Switch>
            {/* Using the `component` prop */}
            <Route path="/:slug" component={AcronymComponent} />
          </Switch>
      </Router>
      <div style={{margin: 'auto'}}>{renderContributors(contributors)}</div>
    </div>
  );

  function renderContributors(contributors: { name: string; url: string }[]) {
    return (
      <p>
        Made with ❤️ by
        {contributors.map(({ name, url }, i) => {
          const delimiter =
            i === 0 ? " " : i < contributors.length - 1 ? ", " : ", and ";
          return (
            <span key={name}>
              {delimiter}
              <a target="_blank" href={url}>
                {name}
              </a>
            </span>
          );
        })}
      </p>
    );
  }
}

export default App;
