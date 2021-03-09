import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
return(
    <div>
        <Header />
        
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 contactcolumn">
          <header>
           <h1>Contact </h1>
          </header>
  
           <hr/>
  
           <form className="formdm">
            <div className="form-row">
                <div className="col-12">
                    <label for="examplename">Name</label>
                    <input type="text" class="form-control" placeholder="name" />
                </div>
            </div>
           
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

          </form>
        </div>
  
  
      </div>
    </div>

        <Footer/>
    </div>
)
}

export default Contact;