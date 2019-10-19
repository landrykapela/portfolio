import React from "react";
import fk from "./assets/fk_logo.png";
import abc from "./assets/abc.jpg";
import ubj from "./assets/ubj.png";
import jmx from "./assets/jamirex.jpg";
import itm from "./assets/itm.png";
import kakobrands from "./assets/kakobrands.png";
import neelansoft from "./assets/neelansoft.png";
import xplore from "./assets/xplore-logo2.jpg";
import lawhill from "./assets/lawhill.png";
import acmate from "./assets/acmate.png";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.getClients = this.getClients.bind(this);
    this.populate = this.populate.bind(this);
    this.state = {
      clients: [
        {
          id: 9,
          name: "Acmate Mobile",
          link: "https://acmate.neelansoft.co.tz",
          image: acmate
        },
        {
          id: 8,
          name: "Lawhill & Co. Advocates",
          link: "http://lawhill.co.tz",
          image: lawhill
        },
        {
          id: 7,
          name: "Xplore Tours",
          link: "https://xplore.co.tz",
          image: xplore
        },
        {
          id: 0,
          name: "FK Law Chambers",
          link: "https://fklawchambers.co.tz",
          image: fk
        },
        {
          id: 1,
          name: "ABC Dental Clinic",
          link: "https://abcdentalclinic.co.tz",
          image: abc
        },
        {
          id: 2,
          name: "UBJ Law Chamber",
          link: "http://ubjlawchamber.co.tz",
          image: ubj
        },
        {
          id: 3,
          name: "Jamirex Hotel",
          link: "https://jamirexhotel.co.tz",
          image: jmx
        },
        {
          id: 4,
          name: "ITM Tanzania Ltd",
          link: "http://registration.itmafrica.co.tz",
          image: itm
        },
        {
          id: 5,
          name: "Kakobrands",
          link: "https://kakobrands.com",
          image: kakobrands
        },
        {
          id: 6,
          name: "Neelansoft Technologies",
          link: "https://neelansoft.co.tz",
          image: neelansoft
        }
      ]
    };
  }
  setClients(clients) {
    this.setState({ clients: clients });
  }
  getClients() {
    return this.state.clients;
  }
  componentDidMount() {
    this.populate();
  }
  populate() {
    return (
      <div className="work-content" id="work-content">
        <h1 id="work-content-title">Projects I've Worked On</h1>
        <div className="work-details">
          {this.getClients().map(data => (
            <a className="work-item" key={data["id"]} href={data["link"]}>
              <img src={data["image"]} alt={data["name"]} />
            </a>
          ))}
        </div>
      </div>
    );
  }
  render() {
    return this.populate();
  }
}
export default Work;
