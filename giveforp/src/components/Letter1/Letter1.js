import React, { Component } from 'react'
import './index.js'
export default class Letter1 extends Component {
  render() {
    return (
        <div className="envelop">
        <div className="envelop__front-paper" />
        <div className="envelop__back-paper" />
        <div className="envelop__up-paper js-up-paper" />
        <div className="envelop__sticker js-sticker" />
        <div className="envelop__false-sticker" />
        <div className="envelop__content js-envelop-content">
          <div className="love-notes">
            <div className="note js-note">
              <div className="note__text">
                <p>
                  Oii minha princesa, aqui estamos completando mais um mês juntos, é
                  sempre uma alegria poder acordar e saber que tenho você ao meu lado
                  e sentir que isso será para sempre é magnífico
                </p>
              </div>
            </div>
            <div className="note js-note">
              <div className="note__text">
                <p>
                  quero que eles nunca acabem e que tenham sempre muitos outros pela
                  frente.
                </p>
              </div>
            </div>
            <div className="note js-note">
              <div className="note__text">
                <p>
                  você é a melhor coisa que me aconteceu, obrigado por me escolher
                  todos os dias.
                </p>
                <p>Te amo muito! ♥.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
