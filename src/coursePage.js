import React from 'react';



class TableAComponent extends React.Component{

  constructor(props){
    super(props);
    this.tableAItems = [];
    this.props.tableA.map(
      (tableAElement) => this.tableAItems.push(
        <div class="accordion-item" key={tableAElement.url}>
        <h2 class="accordion-header" id={"heading"}>
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseTwo" + tableAElement.name.replace(/\s/g, '')} aria-expanded="false" aria-controls={"collapseTwo"+ tableAElement.name.replace(/\s/g, '')}>
            {tableAElement.name}
          </button>
        </h2>
        <div id={"collapseTwo"+ tableAElement.name.replace(/\s/g, '')} class="accordion-collapse collapse" aria-labelledby={"headingTwo"+ tableAElement.name.replace(/\s/g, '')} data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <h5>{tableAElement.Course_Title}</h5><br></br>
            <h6>Course Code:</h6> <p>{tableAElement.name}</p><br></br>
            <h6>Prerequisite</h6> <p>{tableAElement.pre_value}</p><br></br>
            <h6>Co-Requisite</h6> <p>{tableAElement.co_value}</p><br></br>
            <h6>Antirequisite</h6> <p>{tableAElement.an_value}</p><br></br>
            <h6>Custom Requisites</h6> <p>{tableAElement.cus_value}</p><br></br>
            <a href={tableAElement.url}><p>More Info</p></a>
            <br></br>
            {this.props.lastBox=== 70? "" : <button onClick={()=> this.props.changePage2(1,this.props.lastBox,tableAElement.name,null)}>Add</button>}
            

          </div>
        </div>
      </div>
      )
    )
  }

  render(){
  return(
    <div>
      {this.tableAItems}
    </div>
  );
  }
}


class coursePage extends React.Component {

    render() {
      return (
        <div id="mainPage">
          <div class="container">
            <h3>Table A - Lower Level Liberal Studies</h3>
            <div class="accordion" id="accordionExample">
              <TableAComponent changePage2={this.props.changePage2} lastBox ={this.props.lastBox} tableA={this.props.tableA} />
            </div>
            <h3>Table B - Upper Level Liberal Studies</h3>
            <div class="accordion" id="accordionExample">
              <TableAComponent  changePage2={this.props.changePage2} lastBox ={this.props.lastBox} tableA={this.props.tableB} />
            </div>
            <h3>Professional-Related Table (Computer Science)</h3>
            <div class="accordion" id="accordionExample">
              <TableAComponent changePage2={this.props.changePage2} lastBox ={this.props.lastBox} tableA={this.props.tableI} />
            </div>
            <h3>Open Elective Table</h3>
            <div class="accordion" id="accordionExample">
              <TableAComponent changePage2={this.props.changePage2} lastBox ={this.props.lastBox} tableA={this.props.tableO} />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default coursePage;