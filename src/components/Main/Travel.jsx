function Travel() {
  return (
    <main>
      <h1>Travel</h1>
      <nav className="pageContent">
        <h2>Content</h2>
        <ul>
          <li>
            <a href="#summary">Summary</a>
          </li>
          <li>
            <a href="#morrocco2022">Morrocco 2022</a>
          </li>
          <li>
            <a href="#europe2022">Europe 2022</a>
          </li>
          <li>
            <a href="#milan2022">Milan 2022</a>
          </li>
          <li>
            <a href="#portugal2019">Portugal 2019</a>
          </li>
          <li>
            <a href="#kefalonia2017">Kefalonia 2017</a>
          </li>
          <li>
            <a href="#laciotat2016">La Ciotat 2016</a>
          </li>
        </ul>
      </nav>
      <section>
        <h2 id="summary">Summary</h2>
        <p>
          Countries visited : roughly 15 <br />
          Flights caught : a lot
          <br />
          Percentage of my life travelling : 6.2%
        </p>
      </section>
      <section id="morrocco2022">
        <h2>Morrocco 2022</h2>
        <p className="with">with my mother</p>
        <h4>Summary</h4>
        <p>
          Duration : 10 days <br />
          Spend some time exploring a new country with my mother! <br />
          Highlights : sandsurfing, souks
        </p>
        <h4>Cities</h4>
        <ul>
          <li>Marrakesh</li>
          <li>Essaouira</li>
        </ul>
      </section>
      <section id="europe2022">
        <h2>Europe 2022</h2>
        <p className="with">with George</p>
        <h4>Summary</h4>
        <p>
          Duration : 90 days <br />
          Travelling after university with George. Sam F coming to meet us from
          La Ciotat to Verona. Sam H and Tom coming to meet us from Venice to
          Rome. <br />
          Best sunset spots : Ponte Vecchio (Florence), Piazzale Michelangelo
          (Florence), kitties rock (Porto), Piazzale Castel S. Pietro (Verona)
        </p>
        <h4>Countries and Cities</h4>
        <ul>
          <li>Portugal</li>
          <p>Highlights : flammingos on Ludo Trail, Faro, Sintra</p>
          <li>
            <ul>
              <li>Faro</li>
              <li>Sintra</li>
              <li>Lisbon</li>
              <li>Porto</li>
            </ul>
          </li>
          <li>Spain</li>
          <p>
            Highlights : walking to the top of some mountain at Monserat,
            Sagrada Familia
          </p>
          <li>
            <ul>
              <li>Pontevedra</li>
              <li>Madrid</li>
              <li>Barcelona</li>
            </ul>
          </li>
          <li>France</li>
          <p>Highlights : Eze</p>
          <li>
            <ul>
              <li>Nimes</li>
              <li>Marsellie</li>
              <li>Nice</li>
            </ul>
          </li>
          <li>Monaco</li>
          <li>Italy</li>
          <p>
            Highlights : Boccadasse, swimming in Manorala, swimming and having
            ice cream in Nesso, Burano, Colosseum, enacting killing eve scene at
            hadrian villa, Pompeii, pizza from Naples, chairlift in Capri, path
            of the gods in Amalfi Coast
          </p>
          <li>
            <ul>
              <li>Genoa</li>
              <li>La Spezia</li>
              <li>Milan</li>
              <li>Como</li>
              <li>Bellagio</li>
              <li>Verona</li>
              <li>Venice</li>
              <li>Bologna</li>
              <li>Florence</li>
              <li>Rome</li>
              <li>Naples</li>
              <li>Sorrento</li>
              <li>Capri</li>
            </ul>
          </li>
          <li>Vatican City</li>
          <li>Greece</li>
          <p>Highlights : Kali Strata</p>
          <li>
            <ul>
              <li>Rhodes</li>
              <li>Symi</li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="milan2022">
        <h2>Milan 2022</h2>
        <p className="with">with George and Ruairidh</p>
        <p>
          Duration : 4 days <br />
          Long weekend trip to Milan to explore a new city. <br />
          Highlights : Duomo, Suneleven cocktails with a view
        </p>
      </section>
      <section id="portugal2019">
        <h2>Portugal 2019</h2>
        <p className="with">solo trip, mam joining me for the last week</p>
        <p>
          Duration : 21 days <br />
          My first solo travel exerience staying in hostels and meeting amazing
          people from all over! <br />
          Highlights : surfing, porto Sunsets
        </p>
        <h4>Cities</h4>
        <ul>
          <li>Faro</li>
          <li>Lisbon</li>
          <li>Porto</li>
        </ul>
      </section>
      <section id="kefalonia2017">
        <h2>Kefalonia 2017</h2>
        <p className="with">holiday with my mam</p>
        <p>
          Duration : 11 days <br />
          Spending some time with mam <br />
          Highlights : Melissani Cave
        </p>
      </section>
      <section id="laciotat2016">
        <h2>La Ciotat 2016</h2>
        <p className="with">holiday with my mam</p>
        <p>
          Duration : 5 days <br />
          Spending some time with mam <br />
          Highlights : Relaxing
        </p>
      </section>
    </main>
  );
}

export default Travel;
