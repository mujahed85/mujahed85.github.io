export default function Blog() {
  return (
    <>
      {/* ======= blog Section ======= */}
      <section id="blog" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className=" ">Blog's</h2>
            <p className="just-align">
              "Welcome to the hub of IT insights, where the world of technology
              unfolds. In this blog section, dive into a curated collection of
              articles covering the latest trends, best practices, and
              innovations in the realm of Information Technology. Join me in
              exploring the ever-evolving landscape of IT, from coding gems to
              cybersecurity strategies. Let's navigate the digital frontier
              together, unlocking knowledge and fostering a community of IT
              enthusiasts and professionals."
            </p>
          </div>
          {/* <div class="col-lg-3">
      <div class="card" style="width: 16rem; padding: 25px;">
        <img src="assets/img/icons/aws-azure-google-1.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>(AWS, Azure, GCP)</b></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">AWS</li>
            <li class="list-group-item">Azure</li>
            <li class="list-group-item">GCP </li>                  
          </ul>
      </div>
    </div>

    <div class="col-lg-3 ">
      <div class="card " style="width: 18rem; padding: 25px;">
        <img src="assets/img/icons/os.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Ops (Core)</b></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Linux</li>
            <li class="list-group-item">Python</li>
            <li class="list-group-item">Git </li>
            <li class="list-group-item">SQL </li>
          </ul>
          
      </div>
    </div>          

    <div class="col-lg-3">
      <div class="card" style="width: 18rem; padding: 25px;">
        <img src="assets/img/icons/bigData.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Big Data(Data Brikcs, Spark)</b></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">DataBricks</li>
            <li class="list-group-item">Python</li>
            <li class="list-group-item">Data Processing </li>
            <li class="list-group-item">Data Storage </li>
            <li class="list-group-item">Data Warehousing</li>
          </ul>   
      </div>
    </div> 

    <div class="col-lg-3">
      <div class="card" style="width: 16rem; padding: 25px;">
        <img src="assets/img/icons/aws-azure-google-1.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Ops (Automation)</b></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">DevOps </li>
            <li class="list-group-item">SysOps </li>
            <li class="list-group-item">DevSec Ops </li>
            <li class="list-group-item">Cloud Ops </li>
            <li class="list-group-item">MLOps </li>
            <li class="list-group-item">AIOps </li>
          </ul>
      </div>
    </div>

    <div class="col-lg-3">
      <div class="card" style="width: 16rem; padding: 25px;">
        <img src="assets/img/icons/aws-azure-google-1.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Dev (FSD)</b></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Python (Flask, DJango,)</li>
            <li class="list-group-item">Java (SpringBoot, Maven,)</li>
            <li class="list-group-item">Go </li>
            <li class="list-group-item">kotlin </li>
            <li class="list-group-item">MERN </li>
            <li class="list-group-item">MEAN </li>
          </ul>
      </div>
    </div>

    <div class="col-lg-3 ">
      <div class="card" style="width: 18rem; padding: 25px;">
        <img src="assets/img/icons/AI-Gen.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Artificial Intelligence(Gen-AI)</b></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Machine Learning Framework's</li>
            <li class="list-group-item">Deep Learning Framework's</li>
            <li class="list-group-item">Natural Language Processing (NLP) </li>
            <li class="list-group-item">AI Chatbots and Virtual Assistants</li>
          </ul>
      </div>
    </div>
  </div> 




</div>*/}
        </div>
      </section>
      <section className="blogs-card">
        <div className="row">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="assets/img/icons/AI-Gen.jpeg"
                className="card-img-top"
                alt="Artificial Intelligence"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">
                  <b>
                    <a href="#" className="text-decoration-none">
                      Artificial Intelligence
                    </a>
                  </b>
                </h5>
                <p className="card-text text-center">
                  AI blogs that publish cutting-edge research, tutorials, and
                  news on machine learning, deep learning, NLP, and more.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="assets/img/icons/bigData.png"
                className="card-img-top"
                alt="Big Data Blogs"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">
                  <b>
                    <a href="#" className="text-decoration-none">
                      Big Data Blogs
                    </a>
                  </b>
                </h5>
                <p className="card-text text-center">
                  The article lists renowned big data blogs widely read by
                  industry experts and clients. Learn about data lakes and more.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="assets/img/icons/aws-azure-google-1.webp"
                className="card-img-top"
                alt="Cloud Blogs"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">
                  <b>
                    <a href="#" className="text-decoration-none">
                      Cloud Blogs
                    </a>
                  </b>
                </h5>
                <p className="card-text text-center">
                  Explore AWS blogs to learn about Amazon Web Services like
                  Lambda, Amplify, DynamoDB, RDS, and more.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="assets/img/icons/dev(fsd).png"
                className="card-img-top"
                alt="DevOps Blogs"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">
                  <b>
                    <a href="#" className="text-decoration-none">
                      DevOps Blogs
                    </a>
                  </b>
                </h5>
                <p className="card-text text-center">
                  The best DevOps engineers are constantly learning. Here are
                  the top 12 DevOps blogs.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://mujahed85.github.io/Blogs/"
          className="btn btn-primary mt-auto"
        >
          Read More
        </a>
      </section>
      {/* End blog Section */}
    </>
  );
}
