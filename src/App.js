import React, { Component } from "react";
import Ozneler from "./ozne/Ozneler";
import Yardimcilar from "./yardimci/Yardimcilar";
import Fiiller from "./fiil/Fiiller";
import Sifatlar from "./sifat/Sifatlar";
import "./App.css";
import PNA from "./State";
import ozneJson from "./ozne/ozneJson";
import yardimciJson from "./yardimci/yardimciJson";
import fiilJson from "./fiil/fiilJson";
import sifatJson from "./sifat/sifatJson";
import Baglaclar from "./baglac/Baglaclar";
import baglacJson from "./baglac/baglacJson";
export default class App extends Component {
  state = {
    printedOzne: 0,
    printedYardimci: 0,
    printedFiil: 0,
    printedSifat: 0,
    printedBaglac: 0,
    pna: 0, //possitive or negative or question
  };

  randomAll = () => {
    this.setState({ printedBaglac: Math.floor(Math.random() * 13) });
    this.setState({ printedOzne: Math.floor(Math.random() * 11) });
    this.setState({ printedYardimci: Math.floor(Math.random() * 14) });
    this.setState({ printedFiil: Math.floor(Math.random() * 100) });
    this.setState({ pna: Math.floor(Math.random() * 3) });
    this.setState({ printedSifat: Math.floor(Math.random() * 100) });
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
  randomAdj = () => {
    this.setState({ printedSifat: Math.floor(Math.random() * 100) });
  };
  randomConj = () => {
    this.setState({ printedBaglac: Math.floor(Math.random() * 13) });
  };
  resultCreator = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
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
          <div className="col col-1 frame-col ">{PNA[this.state.pna]}</div>

          <div className="col col-1 frame-col">
            <Ozneler item={ozneJson[this.state.printedOzne]} />
          </div>
          <div className="col col-2 frame-col">
            <Yardimcilar item={yardimciJson[this.state.printedYardimci][0]} />
          </div>
          <div className="col col-2 frame-col">
            <Fiiller item={fiilJson[this.state.printedFiil][0]} />
          </div>

          <div className="col col-2 frame-col">
            <Sifatlar item={sifatJson[this.state.printedSifat]} />
          </div>

          <div className="col col-2 frame-col">
            <Baglaclar item={baglacJson[this.state.printedBaglac][0]} />
          </div>
          <div className="col col-2 frame-col">Will update!</div>
        </div>

        <div className="row button-row">
          <div className="col col-1 button-frame">
            <button
              type="button"
              onClick={() => this.randomPna()}
              className="btn random-buttons"
            >
              +?-
            </button>
          </div>
          <div className="col col-1 button-frame">
            <button
              type="button"
              onClick={() => this.randomSubject()}
              className="btn random-buttons"
            >
              Subj
            </button>
          </div>
          <div className="col col-2 button-frame">
            <button
              type="button"
              onClick={() => this.randomYardmici()}
              className="btn random-buttons"
            >
              Modals
            </button>
          </div>
          <div className="col col-2 button-frame">
            <button
              type="button"
              onClick={() => this.randomVerb()}
              className="btn random-buttons"
            >
              Verbs
            </button>
          </div>

          <div className="col col-2 button-frame">
            <button
              type="button"
              onClick={() => this.randomAdj()}
              className="btn random-buttons"
            >
              Adjectives/Jobs
            </button>
          </div>
          <div className="col col-2 button-frame">
            <button
              type="button"
              onClick={() => this.randomConj()}
              className="btn random-buttons"
            >
              Conj
            </button>
          </div>
          <div className="col col-2 button-frame">
            <button type="button" className="btn random-buttons">
              doesnt work
            </button>
          </div>
        </div>

        <div className="row">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              onChange={this.resultCreator}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div id="result"></div>
      </div>
    );
  }
}
