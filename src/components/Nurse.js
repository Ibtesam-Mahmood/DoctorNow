import React, { Component } from 'react';

class Nurse extends Component {
  render() {
    return (
     

  <div>
      <div className="App">
      <div id="home">
       <nav class="navbar navbar-light navbar-expand-xl fixed-top text-capitalize">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Doctor<b class="vote">Now</b></a>
          <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav ml-auto">
              <li>
                <div class="dropdown">
                  <button type="button" class="btn btn-primary dropdown-toggle! dashboard">
                    Back
                  </button>
                  <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Nurse Dashboard</a>
                      <a class="dropdown-item" href="#">Doctor Dashboard</a>
                  </div>
                </div>
              </li>
            </ul> 
          </div>
        </div> 
      </nav>
    </div>
   </div> 
    
<div class = "fourmpadding">
   <a> Patient Fourm </a>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
        <form>
          <div class="form-group colos">
              <label for="exampleFormControlInput1">Patient Label</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
              </input>
          </div>


          <div class="form-group colos">
              <label for="exampleFormControlInput1">Reason</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
              </input>
          </div>

          <div class="form-group colos">
              <label for="exampleFormControlInput1">Gender</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
              </input>
          </div>

          
      <div class="form-group">
          <label for="exampleFormControlTextarea1">Health History</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    
      
      <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

     <div class = "pos"> <button type="button pos" class="btn btn-primary dropdown-toggle! dashboard"> Send </button> </div>
      
    </form>
         </div>
      </div>
    </div>
  </div> 

</div> 
    ); 

  }

}
export default Nurse; 
