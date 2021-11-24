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
import swiofish from "./assets/coat_of_arms.png";
import rainbow from "./assets/rainbow.png";
import siar from "./assets/siar_logo.png";
import acmate from "./assets/acmate.png";
import care from "./assets/care.png";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.getClients = this.getClients.bind(this);
    this.populate = this.populate.bind(this);
    this.state = {
      clients: [
        {
          id:13,
          name:"Fisheries Groups Management System",
          link: "https://swiofish.equitan.or.tz:3000",
          image: swiofish
        },
        {
          id:12,
          name:"Rainbow Inventory Tracking System",
          link: "https://mak-david.com",
          image: rainbow
        },
        {
          id:11,
          name:"Criminal Registry (Build for SDG Challenge)",
          link: "https://siar-sdg.herokuapp.com",
          image: siar
        },
	{
	  id:10,
	  name:"Care Vehicle Management System",
	  link: "https://cvms.care-tanzania.org:3000",
	  image: care
	},
        {
          id: 9,
          name: "Acmate Mobile",
          link: "https://acmate.neelansoft.co.tz",
          image: acmate
        },
        {
          id: 8,
          name: "Lawhill & Co. Advocates",
          link: "https://lawhill.co.tz",
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
          link: "http://fklawchambers.co.tz",
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
          link: "https://ubjlawchamber.co.tz",
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
          link: "https://itmafrica.co.tz",
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
