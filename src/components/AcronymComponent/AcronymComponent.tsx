import React, { useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import Random from "random-words";

export function AcronymComponent() {
  const location = useLocation();
  const history = useHistory();
  const { search } = location;

  const term = getTerm(search);

  const words = Random(1000);
  console.log(words);
  return (
    <div style={{ margin: "auto" }}>
      <div>
        <form>
          <p>
            <b>Search acronym:</b>
          </p>

          <input
            style={{ width: "100%" }}
            value={term}
            onChange={(e) =>
              history.push({ search: `?term=${e.target.value}` })
            }
          />
          <h3>"{term}" means:</h3>
          <h1>{getAcronym(term, words)}</h1>
        </form>
      </div>
    </div>
  );

  function getAcronym(term: string, words: string[]) {
    const meaning = term.split("");
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
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
      if (meaning.every((el) => el.length > 1)) {
        break;
      }
    }
    return meaning.join(" ");
  }
}

function getTerm(search: string) {
  const term = search.slice(1).split("=").slice(-1)[0]
  return typeof term === 'string'? term : "wfh";
}
