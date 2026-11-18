function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="hospic.png" className="d-block w-100 rounded-5" style={{ height: "500px", objectFit: "cover" }} alt="Its Naira Multi Specialist Hospital." />
          <div className="carousel-caption" style={{ background: "rgba(0, 0, 0, 0.6)", padding: "25px", borderRadius: "15px", bottom: "80px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "38px", color: "white" }}>Naira Multi Specialist Hospital</h2>
            <p style={{ fontSize: "18px", color: "#f1f1f1" }}>Trusted healthcare in Sivakasi for your family.</p>
            <button className="btn btn-primary" style={{ padding: "10px 25px", borderRadius: "25px", fontWeight: "bold" }}>Book Appointment</button>
          </div>
        </div>

        <div className="carousel-item">
          <img src="care.jpg" className="d-block w-100 rounded-5" style={{ height: "500px", objectFit: "cover" }} alt="Our Doctors Care for Your Health" />
          <div className="carousel-caption" style={{ background: "rgba(0, 0, 0, 0.6)", padding: "25px", borderRadius: "15px", bottom: "80px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "38px", color: "white" }}>Expert Doctors, Caring Hands</h2>
            <p style={{ fontSize: "18px", color: "#f1f1f1" }}>Our Doctors Care for Your Health</p>
            <button className="btn btn-danger" style={{ padding: "10px 25px", borderRadius: "25px", fontWeight: "bold" }}>Emergency Call</button>
          </div>
        </div>

        <div className="carousel-item">
          <img src="scan.jpg" className="d-block w-100 rounded-5" style={{ height: "500px", objectFit: "cover" }} alt="First-Class in Medical Facilities" />
          <div className="carousel-caption" style={{ background: "rgba(0, 0, 0, 0.6)", padding: "25px", borderRadius: "15px", bottom: "80px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "38px", color: "white" }}>First-Class in Medical Facilities</h2>
            <p style={{ fontSize: "18px", color: "#f1f1f1" }}>Advanced Scan, Lab & ICU - Everything in one place.</p>
            <button className="btn btn-primary" style={{ padding: "10px 25px", borderRadius: "25px", fontWeight: "bold" }}>Our Services</button>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel;