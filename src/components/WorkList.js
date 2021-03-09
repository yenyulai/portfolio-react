import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function WorkList(props) {
  return (
    <div className="row justify-content-center">
      {props.projects.map((item) => (
      <div className="col-lg-5 ">
        
            {/* <React.Fragment> */}
            <img
              className="portfolioicon"
              src={item.img}
              alt={item.name}
              key={item.id}
            />
            <br />
            <a className="btn" href={item.url}>Click Me</a>
            <a href={item.repo}>Repo</a>
          {/* </React.Fragment> */}
        
      </div>
      ))}
    </div>

  );
}

export default WorkList;
