import { Link } from "react-router-dom";
import { IMatch } from "../models/IMatch";

interface IProps {
  match: IMatch
}

export default function MatchCard(props: IProps) {

  const thumnail = props.match.thumnail ? props.match.thumnail : "https://bulma.io/images/placeholders/1280x960.png"

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={thumnail} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.match.title}</p>
            <p className="subtitle is-6">@{props.match.venue}</p>
          </div>
        </div>

        <div className="content">
          {props.match.message}
          <br />
          <time>11:09 PM - 1 Jan 2016</time>
        </div>

        <div className="buttons">
          <Link to={`/matches/${props.match.id}`} className="button is-primary">Join</Link>
        </div>
      </div>
    </div>
  );
}