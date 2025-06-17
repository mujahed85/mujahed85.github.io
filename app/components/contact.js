export default function Contact() {
  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    // Check if fields are empty
    if (name.trim() === "" || message.trim() === "") {
      alert("Please fill out all fields.");
      return; // Exit the function if fields are empty
    }

    // Replace 'YOUR_GOOGLE_FORM_URL' with your actual Google Form URL
    var googleFormUrl =
      "https://script.google.com/macros/s/AKfycbzwgU8xQzHlsuwmWKlO6e90aXABwuyMbVc9YMQd994I4i7Wnoykuq_ZZNQdU4zBmGPDAA/exec";

    var formData = new FormData();
    formData.append("entry.617381392", name);
    formData.append("entry.1039351751", message);

    fetch(googleFormUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully:", response);

          // Clear the form values after successful submission
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";

          // Display success message on the page
          alert("Form submitted successfully! Thank you.");
        } else {
          console.error(
            "Error submitting form. Server responded with:",
            response.status
          );
          alert("Error submitting form. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again later.");
      });
  }

  return (
    <>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className=" ">Contact</h2>
          </div>
          <div className="row mt-1">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>
                    T9, Office Aids Building, STPI(Software Technology Park of
                    India), MIDC Industrial Area, Chilkalthana, Aurangabad,
                    Maharashtra 431007
                  </p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>mujahed.trainer@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+91-7219851089</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="#"
                id="contact-form"
                method="post"
                role="form"
                name="contact-form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required=""
                    />
                    <br />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    type="message"
                    className="form-control"
                    id="message"
                    name="message"
                    autoComplete="message"
                    required=""
                    rows={5}
                    defaultValue={""}
                  />
                  <br />
                </div>
                <div className="text-center">
                  <button id="btn" onClick={(e) => submitForm(e)}>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}
