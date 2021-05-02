import React from 'react';

class mainPage extends React.Component {
    constructor(){
        super()
        this.state={
          coop: false,
          startMonth: 99,
          startYear: 9999,
          schoolMonth: [1,2,3,4,5,6,7,8,9,10],
          schoolYear: [1,2,3,4,5,6,7,8,9,10]
        }
      }
    
    changeCoop(newCoop){
        this.setState({
          coop:newCoop
    })
    }

    changeStartYear(newMonth){
        var stringSplitted = newMonth.split("-");
        var schoolMonth=[];
        var schoolYear=[];
        var startYear= parseInt(stringSplitted[0]);

        if(parseInt(stringSplitted[1]) > 8){
            schoolMonth= ["Fall","Winter","Fall","Winter","Fall","Winter","Fall","Winter","Fall","Winter"];
            schoolYear=[startYear, startYear+1, startYear+1, startYear+2, startYear+2, startYear+3, startYear+3, startYear+4, startYear+4, startYear+5];
        }else{
            schoolMonth= ["Winter","Fall","Winter","Fall","Winter","Fall","Winter","Fall","Winter","Fall"];
            schoolYear=[startYear, startYear, startYear+1, startYear+1, startYear+2, startYear+2, startYear+3, startYear+3, startYear+4, startYear+4];
        }

        this.setState({
          startMonth: stringSplitted[1],
          startYear: stringSplitted[0],
          schoolMonth: schoolMonth,
          schoolYear: schoolYear
         })
    }

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
                            <p>Start Month: </p>
                            <input id="startMonth" type="month"></input> 
                            <p> </p>
                            <button onClick={()=>this.changeStartYear(document.getElementById("startMonth").value)}>Update</button>
                    </div>
                    <div class="col-4">
                        <h6>Co-op </h6>
                        <form>
                            <p> In Co-op </p>
                            <input type="checkbox" onClick={()=>this.changeCoop(!this.state.coop)}></input>
                        </form>
                    </div>
                </div>
                {!this.state.coop &&
                <div class="container-fluid container-scroll">
                <div class="row columns-16">
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 1 Sem 1 (" +this.state.schoolMonth[0] + " " + this.state.schoolYear[0]+ ")" : "Year 1 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 1 Sem 2 (" +this.state.schoolMonth[1] + " " + this.state.schoolYear[1]+ ")" : "Year 1 Sem 2" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 2 Sem 1 (" +this.state.schoolMonth[2] + " " + this.state.schoolYear[2]+ ")" : "Year 2 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 2 Sem 2 (" +this.state.schoolMonth[3] + " " + this.state.schoolYear[3]+ ")" : "Year 2 Sem 2" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 3 Sem 1 (" +this.state.schoolMonth[4] + " " + this.state.schoolYear[4]+ ")" : "Year 3 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 3 Sem 2 (" +this.state.schoolMonth[5] + " " + this.state.schoolYear[5]+ ")" : "Year 3 Sem 2" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 4 Sem 1 (" +this.state.schoolMonth[6] + " " + this.state.schoolYear[6]+ ")" : "Year 4 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 4 Sem 2 (" +this.state.schoolMonth[7] + " " + this.state.schoolYear[7]+ ")" : "Year 4 Sem 2" }</div>
                </div>
                </div>
                }
                {this.state.coop &&
                <div class="container-fluid container-scroll">
                <div class="row columns-20">
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 1 Sem 1 (" +this.state.schoolMonth[0] + " " + this.state.schoolYear[0]+ ")" : "Year 1 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 1 Sem 2 (" +this.state.schoolMonth[1] + " " + this.state.schoolYear[1]+ ")" : "Year 1 Sem 2" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 2 Sem 1 (" +this.state.schoolMonth[2] + " " + this.state.schoolYear[2]+ ")" : "Year 2 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 2 Sem 2 (" +this.state.schoolMonth[3] + " " + this.state.schoolYear[3]+ ")" : "Year 2 Sem 2" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 3 Sem 1 (" +this.state.schoolMonth[4] + " " + this.state.schoolYear[4]+ ")" : "Year 3 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 3 Sem 2 (" +this.state.schoolMonth[5] + " " + this.state.schoolYear[5]+ ")" : "Year 3 Sem 2" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 4 Sem 1 (" +this.state.schoolMonth[6] + " " + this.state.schoolYear[6]+ ")" : "Year 4 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 4 Sem 2 (" +this.state.schoolMonth[7] + " " + this.state.schoolYear[7]+ ")" : "Year 4 Sem 2" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 5 Sem 1 (" +this.state.schoolMonth[8] + " " + this.state.schoolYear[8]+ ")" : "Year 5 Sem 1" }</div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 5 Sem 2 (" +this.state.schoolMonth[9] + " " + this.state.schoolYear[9]+ ")" : "Year 5 Sem 2" }</div>
                </div>
                </div>
                }
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
