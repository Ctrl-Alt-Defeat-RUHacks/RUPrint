import React from 'react';

class mainPage extends React.Component {
    constructor(props){
        super(props)
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
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 1 Sem 1 (" +this.state.schoolMonth[0] + " " + this.state.schoolYear[0]+ ")" : "Year 1 Sem 1" }
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,0)}>
                            {this.props.courses[0] == null ?  "CPS 109" : this.props.courses[0]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,1)}>
                            {this.props.courses[1] == null ?  "CPS 213" : this.props.courses[1]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,2)}>
                            {this.props.courses[2] == null ?  "MTH 110" : this.props.courses[2]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,3)}>
                            {this.props.courses[3] == null ?  "PCS 110" : this.props.courses[3]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,4)}>
                            {this.props.courses[4] == null ?  "Add Course +" : this.props.courses[4]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,5)}>
                            {this.props.courses[5] == null ?  "Add Course +" : this.props.courses[5]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,6)}>
                            {this.props.courses[6] == null ?  "Add Course +" : this.props.courses[6]}
                        </div>
                    </div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 1 Sem 2 (" +this.state.schoolMonth[1] + " " + this.state.schoolYear[1]+ ")" : "Year 1 Sem 2" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,7)}>
                            {this.props.courses[7] == null ?  "CPS 209" : this.props.courses[7]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,8)}>
                            {this.props.courses[8] == null ?  "CPS 310" : this.props.courses[8]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,9)}>
                            {this.props.courses[9] == null ?  "CPS 412" : this.props.courses[9]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,10)}>
                            {this.props.courses[10] == null ?  "MTH 207" : this.props.courses[10]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,11)}>
                            {this.props.courses[11] == null ?  "Add Course +" : this.props.courses[11]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,12)}>
                            {this.props.courses[12] == null ?  "Add Course +" : this.props.courses[12]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,13)}>
                            {this.props.courses[13] == null ?  "Add Course +" : this.props.courses[13]}
                        </div>
                    </div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 2 Sem 1 (" +this.state.schoolMonth[2] + " " + this.state.schoolYear[2]+ ")" : "Year 2 Sem 1" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,14)}>
                            {this.props.courses[14] == null ?  "CMN 300" : this.props.courses[14]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,15)}>
                            {this.props.courses[15] == null ?  "CPS 305" : this.props.courses[15]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,16)}>
                            {this.props.courses[16] == null ?  "CPS 393" : this.props.courses[16]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,17)}>
                            {this.props.courses[17] == null ?  "MTH 108" : this.props.courses[17]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,18)}>
                            {this.props.courses[18] == null ?  "Add Course +" : this.props.courses[18]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,19)}>
                            {this.props.courses[19] == null ?  "Add Course +" : this.props.courses[19]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,20)}>
                            {this.props.courses[20] == null ?  "Add Course +" : this.props.courses[20]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 2 Sem 2 (" +this.state.schoolMonth[3] + " " + this.state.schoolYear[3]+ ")" : "Year 2 Sem 2" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,21)}>
                            {this.props.courses[21] == null ?  "CPS 406" : this.props.courses[21]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,22)}>
                            {this.props.courses[22] == null ?  "CPS 420" : this.props.courses[22]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,23)}>
                            {this.props.courses[23] == null ?  "CPS 506" : this.props.courses[23]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,24)}>
                            {this.props.courses[24] == null ?  "CPS 590" : this.props.courses[24]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,25)}>
                            {this.props.courses[25] == null ?  "Add Course +" : this.props.courses[25]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,26)}>
                            {this.props.courses[26] == null ?  "Add Course +" : this.props.courses[26]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,27)}>
                            {this.props.courses[27] == null ?  "Add Course +" : this.props.courses[27]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 3 Sem 1 (" +this.state.schoolMonth[4] + " " + this.state.schoolYear[4]+ ")" : "Year 3 Sem 1" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,28)}>
                            {this.props.courses[28] == null ?  "CPS 510" : this.props.courses[28]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,29)}>
                            {this.props.courses[29] == null ?  "CPS 633" : this.props.courses[29]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,30)}>
                            {this.props.courses[30] == null ?  "CPS 721" : this.props.courses[30]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,31)}>
                            {this.props.courses[31] == null ?  "Add Course +" : this.props.courses[31]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,32)}>
                            {this.props.courses[32] == null ?  "Add Course +" : this.props.courses[32]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,33)}>
                            {this.props.courses[33] == null ?  "Add Course +" : this.props.courses[33]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,34)}>
                            {this.props.courses[34] == null ?  "Add Course +" : this.props.courses[34]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 3 Sem 2 (" +this.state.schoolMonth[5] + " " + this.state.schoolYear[5]+ ")" : "Year 3 Sem 2" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,35)}>
                            {this.props.courses[35] == null ?  "CPS 616" : this.props.courses[35]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,36)}>
                            {this.props.courses[36] == null ?  "CPS 706" : this.props.courses[36]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,37)}>
                            {this.props.courses[37] == null ?  "Add Course +" : this.props.courses[37]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,38)}>
                            {this.props.courses[38] == null ?  "Add Course +" : this.props.courses[38]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,39)}>
                            {this.props.courses[39] == null ?  "Add Course +" : this.props.courses[39]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,40)}>
                            {this.props.courses[40] == null ?  "Add Course +" : this.props.courses[40]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,41)}>
                            {this.props.courses[41] == null ?  "Add Course +" : this.props.courses[41]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 4 Sem 1 (" +this.state.schoolMonth[6] + " " + this.state.schoolYear[6]+ ")" : "Year 4 Sem 1" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,42)}>
                            {this.props.courses[42] == null ?  "Add Course +" : this.props.courses[42]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,43)}>
                            {this.props.courses[43] == null ?  "Add Course +" : this.props.courses[43]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,44)}>
                            {this.props.courses[44] == null ?  "Add Course +" : this.props.courses[44]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,45)}>
                            {this.props.courses[45] == null ?  "Add Course +" : this.props.courses[45]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,46)}>
                            {this.props.courses[46] == null ?  "Add Course +" : this.props.courses[46]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,47)}>
                            {this.props.courses[47] == null ?  "Add Course +" : this.props.courses[47]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,48)}>
                            {this.props.courses[48] == null ?  "Add Course +" : this.props.courses[48]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 4 Sem 2 (" +this.state.schoolMonth[7] + " " + this.state.schoolYear[7]+ ")" : "Year 4 Sem 2" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,49)}>
                            {this.props.courses[49] == null ?  "Add Course +" : this.props.courses[49]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,50)}>
                            {this.props.courses[50] == null ?  "Add Course +" : this.props.courses[50]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,51)}>
                            {this.props.courses[51] == null ?  "Add Course +" : this.props.courses[51]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,52)}>
                            {this.props.courses[52] == null ?  "Add Course +" : this.props.courses[52]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,53)}>
                            {this.props.courses[53] == null ?  "Add Course +" : this.props.courses[53]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,54)}>
                            {this.props.courses[54] == null ?  "Add Course +" : this.props.courses[54]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,55)}>
                            {this.props.courses[55] == null ?  "Add Course +" : this.props.courses[55]}
                        </div></div>
                </div>
                </div>
                }
                {this.state.coop &&
                <div class="container-fluid container-scroll">
                <div class="row columns-20">
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 1 Sem 1 (" +this.state.schoolMonth[0] + " " + this.state.schoolYear[0]+ ")" : "Year 1 Sem 1" }
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,0)}>
                            {this.props.courses[0] == null ?  "CPS 109" : this.props.courses[0]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,1)}>
                            {this.props.courses[1] == null ?  "CPS 213" : this.props.courses[1]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,2)}>
                            {this.props.courses[2] == null ?  "MTH 110" : this.props.courses[2]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,3)}>
                            {this.props.courses[3] == null ?  "PCS 110" : this.props.courses[3]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,4)}>
                            {this.props.courses[4] == null ?  "Add Course +" : this.props.courses[4]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,5)}>
                            {this.props.courses[5] == null ?  "Add Course +" : this.props.courses[5]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,6)}>
                            {this.props.courses[6] == null ?  "Add Course +" : this.props.courses[6]}
                        </div>
                    </div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 1 Sem 2 (" +this.state.schoolMonth[1] + " " + this.state.schoolYear[1]+ ")" : "Year 1 Sem 2" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,7)}>
                            {this.props.courses[7] == null ?  "CPS 209" : this.props.courses[7]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,8)}>
                            {this.props.courses[8] == null ?  "CPS 310" : this.props.courses[8]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,9)}>
                            {this.props.courses[9] == null ?  "CPS 412" : this.props.courses[9]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,10)}>
                            {this.props.courses[10] == null ?  "MTH 207" : this.props.courses[10]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,11)}>
                            {this.props.courses[11] == null ?  "Add Course +" : this.props.courses[11]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,12)}>
                            {this.props.courses[12] == null ?  "Add Course +" : this.props.courses[12]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,13)}>
                            {this.props.courses[13] == null ?  "Add Course +" : this.props.courses[13]}
                        </div>
                    </div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 2 Sem 1 (" +this.state.schoolMonth[2] + " " + this.state.schoolYear[2]+ ")" : "Year 2 Sem 1" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,14)}>
                            {this.props.courses[14] == null ?  "CMN 300" : this.props.courses[14]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,15)}>
                            {this.props.courses[15] == null ?  "CPS 305" : this.props.courses[15]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,16)}>
                            {this.props.courses[16] == null ?  "CPS 393" : this.props.courses[16]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,17)}>
                            {this.props.courses[17] == null ?  "MTH 108" : this.props.courses[17]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,18)}>
                            {this.props.courses[18] == null ?  "Add Course +" : this.props.courses[18]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,19)}>
                            {this.props.courses[19] == null ?  "Add Course +" : this.props.courses[19]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,20)}>
                            {this.props.courses[20] == null ?  "Add Course +" : this.props.courses[20]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 2 Sem 2 (" +this.state.schoolMonth[3] + " " + this.state.schoolYear[3]+ ")" : "Year 2 Sem 2" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,21)}>
                            {this.props.courses[21] == null ?  "CPS 406" : this.props.courses[21]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,22)}>
                            {this.props.courses[22] == null ?  "CPS 420" : this.props.courses[22]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,23)}>
                            {this.props.courses[23] == null ?  "CPS 506" : this.props.courses[23]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,24)}>
                            {this.props.courses[24] == null ?  "CPS 590" : this.props.courses[24]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,25)}>
                            {this.props.courses[25] == null ?  "Add Course +" : this.props.courses[25]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,26)}>
                            {this.props.courses[26] == null ?  "Add Course +" : this.props.courses[26]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,27)}>
                            {this.props.courses[27] == null ?  "Add Course +" : this.props.courses[27]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 3 Sem 1 (" +this.state.schoolMonth[4] + " " + this.state.schoolYear[4]+ ")" : "Year 3 Sem 1" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,28)}>
                            {this.props.courses[28] == null ?  "CPS 510" : this.props.courses[28]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,29)}>
                            {this.props.courses[29] == null ?  "CPS 633" : this.props.courses[29]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,30)}>
                            {this.props.courses[30] == null ?  "CPS 721" : this.props.courses[30]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,31)}>
                            {this.props.courses[31] == null ?  "Add Course +" : this.props.courses[31]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,32)}>
                            {this.props.courses[32] == null ?  "Add Course +" : this.props.courses[32]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,33)}>
                            {this.props.courses[33] == null ?  "Add Course +" : this.props.courses[33]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,34)}>
                            {this.props.courses[34] == null ?  "Add Course +" : this.props.courses[34]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 3 Sem 2 (" +this.state.schoolMonth[5] + " " + this.state.schoolYear[5]+ ")" : "Year 3 Sem 2" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,35)}>
                            {this.props.courses[35] == null ?  "CPS 616" : this.props.courses[35]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,36)}>
                            {this.props.courses[36] == null ?  "CPS 706" : this.props.courses[36]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,37)}>
                            {this.props.courses[37] == null ?  "Add Course +" : this.props.courses[37]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,38)}>
                            {this.props.courses[38] == null ?  "Add Course +" : this.props.courses[38]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,39)}>
                            {this.props.courses[39] == null ?  "Add Course +" : this.props.courses[39]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,40)}>
                            {this.props.courses[40] == null ?  "Add Course +" : this.props.courses[40]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,41)}>
                            {this.props.courses[41] == null ?  "Add Course +" : this.props.courses[41]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 4 Sem 1 (" +this.state.schoolMonth[6] + " " + this.state.schoolYear[6]+ ")" : "Year 4 Sem 1" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,42)}>
                            {this.props.courses[42] == null ?  "Add Course +" : this.props.courses[42]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,43)}>
                            {this.props.courses[43] == null ?  "Add Course +" : this.props.courses[43]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,44)}>
                            {this.props.courses[44] == null ?  "Add Course +" : this.props.courses[44]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,45)}>
                            {this.props.courses[45] == null ?  "Add Course +" : this.props.courses[45]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,46)}>
                            {this.props.courses[46] == null ?  "Add Course +" : this.props.courses[46]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,47)}>
                            {this.props.courses[47] == null ?  "Add Course +" : this.props.courses[47]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,48)}>
                            {this.props.courses[48] == null ?  "Add Course +" : this.props.courses[48]}
                        </div></div>
                    <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 4 Sem 2 (" +this.state.schoolMonth[7] + " " + this.state.schoolYear[7]+ ")" : "Year 4 Sem 2" }
                    <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,49)}>
                            {this.props.courses[49] == null ?  "Add Course +" : this.props.courses[49]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,50)}>
                            {this.props.courses[50] == null ?  "Add Course +" : this.props.courses[50]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,51)}>
                            {this.props.courses[51] == null ?  "Add Course +" : this.props.courses[51]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,52)}>
                            {this.props.courses[52] == null ?  "Add Course +" : this.props.courses[52]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,53)}>
                            {this.props.courses[53] == null ?  "Add Course +" : this.props.courses[53]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,54)}>
                            {this.props.courses[54] == null ?  "Add Course +" : this.props.courses[54]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,55)}>
                            {this.props.courses[55] == null ?  "Add Course +" : this.props.courses[55]}
                        </div></div>
                        
                        <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 5 Sem 1 (" +this.state.schoolMonth[8] + " " + this.state.schoolYear[8]+ ")" : "Year 5 Sem 1" }
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,56)}>
                            {this.props.courses[56] == null ?  "Add Course +" : this.props.courses[56]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,57)}>
                            {this.props.courses[57] == null ?  "Add Course +" : this.props.courses[57]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,58)}>
                            {this.props.courses[58] == null ?  "Add Course +" : this.props.courses[58]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,59)}>
                            {this.props.courses[59] == null ?  "Add Course +" : this.props.courses[59]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,60)}>
                            {this.props.courses[60] == null ?  "Add Course +" : this.props.courses[60]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,61)}>
                            {this.props.courses[61] == null ?  "Add Course +" : this.props.courses[61]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,62)}>
                            {this.props.courses[62] == null ?  "Add Course +" : this.props.courses[62]}
                        </div></div>
                        <div class="col-md-2"> {this.state.startYear !== 9999 ? "Year 5 Sem 2 (" +this.state.schoolMonth[9] + " " + this.state.schoolYear[9]+ ")" : "Year 5 Sem 2" }
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,63)}>
                            {this.props.courses[63] == null ?  "Add Course +" : this.props.courses[63]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,64)}>
                            {this.props.courses[64] == null ?  "Add Course +" : this.props.courses[64]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,65)}>
                            {this.props.courses[65] == null ?  "Add Course +" : this.props.courses[65]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,66)}>
                            {this.props.courses[66] == null ?  "Add Course +" : this.props.courses[66]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,67)}>
                            {this.props.courses[67] == null ?  "Add Course +" : this.props.courses[67]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,68)}>
                            {this.props.courses[68] == null ?  "Add Course +" : this.props.courses[68]}
                        </div>
                        <br></br>
                        <div class="addCourse" onClick={()=> this.props.changePage2(2,null,null,69)}>
                            {this.props.courses[69] == null ?  "Add Course +" : this.props.courses[69]}
                        </div></div>
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
