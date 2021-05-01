import React from 'react';

class mainPage extends React.Component {
    render() {
      return (
        <div id="mainPage">
            <div class="container">
                <div class="row">
                    <h2>RUPrint</h2>
                </div>
                <div class="row">
                    <div class="col-4">
                        <h6>Program</h6>
                        <form>
                        <select id="cars" name="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                        <input type="submit" />
                        </form>
                    </div>
                    <div class="col-4">
                        <h6>Year Range</h6>
                        <form>
                            <input type="date"></input>
                        </form>
                    </div>
                    <div class="col-4">
                        <h6>Co-op</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                    One column
                    </div>
                    <div class="col-2">
                    Two column
                    </div>
                    <div class="col-2">
                    Three column
                    </div>
                    <div class="col-2">
                    Fourth column
                    </div>
                    <div class="col-2">
                    Fifth column
                    </div>
                </div>
                <div class="row">
                    
                </div>
            </div>
        </div>
      );
    }
}

export default mainPage;