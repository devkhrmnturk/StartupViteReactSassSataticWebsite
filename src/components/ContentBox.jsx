function ContentBox(subtitle) {
  return (
    <article className="content-box c-white">
      <h4 className="content-box-subtitle">{subtitle.subtitle}</h4>
      <h2 className="content-box-title">
        Lorem ipsum dolor sit amet consectetur
      </h2>
      <small className="content-box-paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo
        hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate
        culpa nesciunt delectus iste?
      </small>
      <button className="btn content-box-btn">Learn More</button>
    </article>
  );
}

export default ContentBox
