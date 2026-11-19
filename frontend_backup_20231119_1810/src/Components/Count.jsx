import React from "react";

function Count() {
  return (
    <div style={{ background: "#D1EBF9", padding: "50px 20px", textAlign: "center" }}>

      <h2 style={{ fontWeight: "bold", fontSize: "38px", color: "#1E3A5F", margin: "0" }}>
        Why Patients Trust Us
      </h2>

      <div style={{ width: "90px", height: "5px", background: "#00A9D6", margin: "12px auto", borderRadius: "10px" }}></div>

      <p style={{ fontSize: "18px", color: "#555", margin: "0" }}>
        Trusted healthcare in Sivakasi for your family.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "35px" }}>

        <div style={{ background: "white", width: "250px", padding: "30px 15px", borderRadius: "18px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}>
          <div style={{ background: "#D1EBF9", width: "90px", height: "90px", borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "45px" }}>🏥</div>
          <h3 style={{ fontWeight: "bold", fontSize: "28px", marginTop: "18px", color: "#1E3A5F" }}>10+ Years</h3>
          <p style={{ fontSize: "16px", color: "#555" }}>Experience Serving<br />Sivakasi</p>
        </div>

        <div style={{ background: "white", width: "250px", padding: "30px 15px", borderRadius: "18px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}>
          <div style={{ background: "#D1EBF9", width: "90px", height: "90px", borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "45px" }}>😊</div>
          <h3 style={{ fontWeight: "bold", fontSize: "28px", marginTop: "18px", color: "#1E3A5F" }}>50,000+</h3>
          <p style={{ fontSize: "16px", color: "#555" }}>Happy Patients<br />Recovered & Happy</p>
        </div>

        <div style={{ background: "white", width: "250px", padding: "30px 15px", borderRadius: "18px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}>
          <div style={{ background: "#D1EBF9", width: "90px", height: "90px", borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "45px" }}>🚑</div>
          <h3 style={{ fontWeight: "bold", fontSize: "28px", marginTop: "18px", color: "#1E3A5F" }}>24/7<br />Emergency</h3>
          <p style={{ fontSize: "16px", color: "#555" }}>Always Open</p>
        </div>

        <div style={{ background: "white", width: "250px", padding: "30px 15px", borderRadius: "18px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}>
          <div style={{ background: "#D1EBF9", width: "90px", height: "90px", borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "45px" }}>🩺</div>
          <h3 style={{ fontWeight: "bold", fontSize: "28px", marginTop: "18px", color: "#1E3A5F" }}>20+ Expert<br />Doctors</h3>
          <p style={{ fontSize: "16px", color: "#555" }}>Specialist Team</p>
        </div>

      </div>
    </div>
  )
}

export default Count