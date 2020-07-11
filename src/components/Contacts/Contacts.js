import React, { Component } from "react";
import "./Contacts.css";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts-container">
        <div className="contacts-wrapper">
          <div className="content-contact-wrapper">
            <section className="message-wrapper">
              <h3>КОНТАКТИ</h3>
              <p>
                Уважаеми клиенти, При възникнали въпроси, запитвания,
                необходимост от справки и други, може да се свържете с нас всеки
                делничен ден от 09:00ч. до 17:30ч., като ни пишете на e-mail
                адрес -nimari@yahoo.bg или ни позвъните на телефонни номера +359
                111 000 000 и +359 100 000 . Благодарим Ви. С уважение, Екипът
                на Nimari.com
              </p>
            </section>

            <section className="adreess-wrapper">
              <h3>Адрес</h3>
              <ul>
                <li>София</li>

                <li>ул. Студентска 23</li>

                <li>кв. Студентски град</li>

                <li>Email: supe@muper.com</li>
              </ul>
            </section>
            <section className="contacts-mobile-wrapper">
              <h3>Телефон</h3>
              <p> tel:359 00 222 022</p>
             
            </section>
            <section className="contacts-email-wrapper">
              <h3>Email</h3>
              <p>nimari@yahoo.com</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
