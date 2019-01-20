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
 <a class = "titlepadding"> Patient Fourm </a> 
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
        <form>
          <div class="form-group colos">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </input>
          </div>
      <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
               <select class="form-control" id="exampleFormControlSelect1">
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
               </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
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
