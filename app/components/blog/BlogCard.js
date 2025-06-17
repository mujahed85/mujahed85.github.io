'use client';

const BlogCard = ({ image, title, description, link }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm p-3">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">
            <b>
              <a href={link} className="text-decoration-none">
                {title}
              </a>
            </b>
          </h5>
          <p className="card-text text-center">{description}</p>
          <a href={link} className="btn btn-primary mt-auto">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 