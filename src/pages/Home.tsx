import { useState } from "react";
import MatchCard from "../components/MatchCard";
import useFetchList from "../hooks/useFetchList";
import { IMatch } from "../models/IMatch";

export default function Home() {
  const matches: IMatch[] = useFetchList("http://localhost:3001/matches");

  console.log(matches);

  return (
    <div className="container">
      <section className="section home">
        <div className="container">
          <h1 className="title"> Hello World </h1>
          <p className="subtitle"> My React app  with     <strong>Bulma</strong> </p>
        </div>
        <div className="contaier">
          <div className="columns is-multiline">
            {matches.map(match => (
              <div className="column is-one-third" key={match.id}>
                <MatchCard match={match} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}