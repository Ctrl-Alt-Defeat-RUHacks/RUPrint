import React from 'react';

class mainPage extends React.Component {
    render() {
      return (
        <div id="mainPage">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <h6>Program </h6>
                        <form>
                        <select id="programs" name="programs">
                            <option value="volvo">Computer Science</option>
                            <option value="saab">Engineering</option>
                            <option value="saab">Information Technology Management</option>
                            <option value="saab">To be added ...</option>
                        </select>
                        </form>
                    </div>
                    <div class="col-4">
                        <h6> Year Range </h6>
                        <form>
                            <p>Start Year: </p>
                            <input type="month"></input>
                            <p> End Year: </p>
                            <input type="month"></input>
                        </form>
                    </div>
                    <div class="col-4">
                        <h6>Co-op </h6>
                        <form>
                            <p> In Co-op </p>
                            <input type="checkbox"></input>
                        </form>
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
                    <h6>Required Credits 15/30</h6>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default mainPage;
