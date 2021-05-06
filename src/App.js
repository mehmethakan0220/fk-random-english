import React, { Component } from "react";
import Ozneler from "./ozne/Ozneler";
import Yardimcilar from "./yardimci/Yardimcilar";
import Fiiller from "./fiil/Fiiller";
import "./App.css";
import PNA from "./State";
import ozneJson from "./ozne/ozneJson";
import yardimciJson from "./yardimci/yardimciJson";
import fiilJson from "./fiil/fiilJson";

export default class App extends Component {
  state = {
    printedOzne: 0,
    printedYardimci: 0,
    printedFiil: 0,
    pna: 0,
  };

  randomAll = () => {
    this.setState({ printedOzne: Math.floor(Math.random() * 11) });
    this.setState({ printedYardimci: Math.floor(Math.random() * 14) });
    this.setState({ printedFiil: Math.floor(Math.random() * 100) });
    this.setState({ pna: Math.floor(Math.random() * 3) });
  };

  randomSubject = () => {
    this.setState({ printedOzne: Math.floor(Math.random() * 11) });
  };
  randomYardmici = () => {
    this.setState({ printedYardimci: Math.floor(Math.random() * 14) });
  };
  randomVerb = () => {
    this.setState({ printedFiil: Math.floor(Math.random() * 100) });
  };
  randomPna = () => {
    this.setState({ pna: Math.floor(Math.random() * 3) });
  };

  render() {
    return (
      <div className="container frame">
        <div className="row button-row">
          <button
            type="button"
            onClick={() => this.randomAll()}
            className="btn random-buttons"
          >
            Random All
          </button>
        </div>
        <div className="row content-row">
          <div className="col col-2 frame-col ">{PNA[this.state.pna]}</div>

          <div className="col col-3 frame-col">
            <Ozneler item={ozneJson[this.state.printedOzne]} />
          </div>
          <div className="col col-4 frame-col">
            <Yardimcilar item={yardimciJson[this.state.printedYardimci][0]} />
          </div>
          <div className="col col-3 frame-col">
            <Fiiller item={fiilJson[this.state.printedFiil][0]} />
          </div>
        </div>
        <div className="row button-row">
          <div className="col col-2 button-frame">
            <button
              type="button"
              onClick={() => this.randomPna()}
              className="btn random-buttons"
            >
              +?-
            </button>
          </div>
          <div className="col col-3 button-frame">
            <button
              type="button"
              onClick={() => this.randomSubject()}
              className="btn random-buttons"
            >
              Subjects
            </button>
          </div>
          <div className="col col-4 button-frame">
            <button
              type="button"
              onClick={() => this.randomYardmici()}
              className="btn random-buttons"
            >
              Modals
            </button>
          </div>
          <div className="col col-3 button-frame">
            <button
              type="button"
              onClick={() => this.randomVerb()}
              className="btn random-buttons"
            >
              Verbs
            </button>
          </div>
        </div>
      </div>
    );
  }
}
