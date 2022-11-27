const Contact = ()=>{
    return(
        <>
        <center>
        <div className="contactCenter">
           <div className="headingPara" >
           <h2>Our Contact Page</h2>
           <p>This is our simpe contact page here here you give your information we assure you to not do spam with your information</p>
           </div>
        </div>
        </center>
        
        <div className="center1" >
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">enter your email</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        </>
    )
}
export default Contact;
