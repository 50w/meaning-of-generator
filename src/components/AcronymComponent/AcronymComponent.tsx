import React, { useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import {wordList as words} from "../../words";

export function AcronymComponent() {
  const location = useLocation();
  const history = useHistory();
  const { search } = location;

  const term = getTerm(search);

  console.log(words);
  return (
    <div style={{ margin: "auto" }}>
      <div>
        <form>
          <p>
            <b>Search acronym:</b>
          </p>

          <input
            style={{ width: "90%" }}
            value={term}
            onChange={(e) =>
              history.push({ search: `?term=${e.target.value}` })
            }
          />
          <h3>"{term}" means:</h3>
          <h1>{getAcronym(term)}</h1>
        </form>
      </div>
    </div>
  );

  function getAcronym(term: string) {
    const meaning = term.split("");
    let i  = 0
    while (true) {
      const word = words[i%words.length];
      for (let j = 0; j < meaning.length; j++) {
        const element = meaning[j];
        if (
          element.length === 1 &&
          word[0] === element &&
          !meaning.includes(word)
        ) {
          meaning[j] = word;
        }
      }
      if (meaning.every((el) => el.length > 1) || i > 10000000) {
        break;
      }
      i+=meaning.length
    } 

    return meaning.join(" ");
  }
}

function getTerm(search: string) {
  const term = search.slice(1).split("=").slice(-1)[0]
  return typeof term === 'string'? term : "wfh";
}
