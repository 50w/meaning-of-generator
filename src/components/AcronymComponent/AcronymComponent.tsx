import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import Random from "random-words";

export function AcronymComponent() {
  const { pathname } = useLocation();
  const term = pathname.slice(1);
  const words = Random(1000);
  console.log(words);
  return (
    <div style={{ margin: "auto" }}>
      <h3>{pathname.slice(1)} means:</h3>
      <h1>{getAcronym(term, words)}</h1>
    </div>
  );

  function getAcronym(term: string, words: string[]) {
    const meaning = term.split("");
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      for (let j = 0; j < meaning.length; j++) {
        const element = meaning[j];
        if (element.length === 1 && word[0] === element && !meaning.includes(word)) {
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
