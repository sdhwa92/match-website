import { useParams } from "react-router";
import { IMatch } from "../models/IMatch";
import axios from 'axios';
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from "react";

export default function Match() {

  const { id } = useParams<{ id: string }>();
  const [matchData, setMatchData] = useState<IMatch>();

  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:3001/matches/${id}`)
      .then(res => {
        console.log(res);
        setMatchData(res.data);
      })
  }, [id])

  return (
    <div className="container">
      <div className="tabs is-large">
        <ul>
          <li className="is-active"><a>Pictures</a></li>
          <li><a>Music</a></li>
          <li><a>Videos</a></li>
          <li><a>Documents</a></li>
        </ul>
      </div>
      
      <div className="notification is-primary">
        This container has a <code>max-width</code> of <code>$desktop - $container-offset</code> on widescreen and fullhd.
      </div>

      <p>Title: {matchData?.title}</p>
      <p>Venue: {matchData?.venue}</p>
      <p>Date Time: {matchData?.datetime}</p>
      <p>Message: {matchData?.message}</p>
      <p>Teams: </p>
      <ul>
        {matchData?.teams.map(team => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>

      <p>Players:</p>
      <ul>
        {matchData?.players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );

}