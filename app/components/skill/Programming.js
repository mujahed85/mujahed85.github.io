'use client';

const Programming = () => {
  return (
    <>
      <h3 className="resume-title" style={{ paddingBottom: 10 }}>
        <div className="icon-size">
          <img src="assets/img/icons/code-icon-vector.jpg" alt="Programming Languages" />
        </div>
        Computer Programming Languages
      </h3>
      <div className="resume-item pb-0">
        <h4>
          <img className="tool-icon" src="assets/img/icons/sub-list/programming.png" alt="" />
          Programming/Scripting
        </h4>
        <ul>
          <li>
            Python (From basics to Advance)
            <ul>
              <li>Language Specification(Descriptors, Properties, Class Decorators, Metaclasses, Mixin Classes, Composition, Dynamic Class Creation)</li>
              <li>OOP, Design Patterns, Memory Optimization, Unit Testing with Mockito</li>
              <li>Frameworks(Flask, Fast.ai, Django, Pyramid), FastAPI (ASG), Gunicorn (WSGI)</li>
              <li>Boto3, AWS CDK, Anaconda, Jupyter</li>
              <li><b>Numpy</b>(Array Creation, Manipulation, Universal Functions, Indexing, Slicing, Masking, Filtering, Broadcasting, Iteration, Mathematical Operations, Linear Algebra, Masked Arrays, Memory Management, Vectorization, Performance Optimization)</li>
              <li><b>Pandas</b>(MultiIndex, Window functions, Method chaining, Custom accessor methods, Query optimization)</li>
              <li><b>AI/ML/DL/Gen AI Libraries</b>(TensorFlow, PyTorch, JAX, Hugging Face Transformers, DeepSpeed)</li>
            </ul>
          </li>
          <li>
            Scala (From basics to Advance)
            <ul>
              <li>Pattern matching, Data structure, Conversions</li>
              <li>OOPs (Traits and Mixin composition)</li>
              <li>Type variance (covariance, contravariance, invariance)</li>
              <li>Concurrency and Parallelism</li>
              <li>DSL, Specs2, SBT, etc.</li>
              <li>Implicits and Typeclasses</li>
              <li>Higher-Kinded Types</li>
              <li>Monads, Functors, and Functional Programming concepts</li>
              <li>Macros and Metaprogramming</li>
              <li>Effect systems and Tagless Final encoding</li>
            </ul>
          </li>
          <li>Java (Complete Core and Advance Java)</li>
          <li>MS.Net (VB.Net, C#.Net, ADO.Net, ERM, LINQ, MVC, MVVM)</li>
          <li>Node.JS</li>
          <li>Scripting Languages (PowerShell, Linux Shell Scripting)</li>
          <li>Data Transfer Languages (JSON, YAML, XML)</li>
          <li>
            Big Data Scala &amp; R
            <ul>
              <li>Classes &amp; Objects, Language Specifications, Closures, Collections, Traits</li>
              <li>Patterns, RegEx, Extractors, File IO, Packages, OOPs, Params Types, Exceptions</li>
              <li>Map, Annotations, Options, Evaluations, Streaming, Serializations, etc.</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Programming; 