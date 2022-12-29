import './style.scss'

export function Home() {
  return (
    <main className='home-page'>

      

      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h2 className="heading">Modern Business template for free everyone </h2>
              <p className="subheading">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
              <div className="action">
                <button className="btn-get-started">Get Started</button>
                <button className="btn-learn-more">Learn More </button>
              </div>
            </div>
            <div className="right-column">
              <div>
                <img src='https://dummyimage.com/600x400/343a40/6c757d' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="building">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h3 className="heading">A better way to start building.</h3>
            </div>
            <div className="right-column">
              <StartBuildingCard img='https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0' title="Featured title" text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
              <StartBuildingCard img='https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0' title="Featured title" text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
              <StartBuildingCard img='https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0' title="Featured title" text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
              <StartBuildingCard img='https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0' title="Featured title" text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
            </div>
          </div>


        </div>
      </section>


      <section className="quote">
        <div className="container">
          <div className="row">
            <p className="text">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</p>
            <div className="author">
              <img src='https://dummyimage.com/40x40/ced4da/6c757d' alt="" />
              <h4 className="fullname"> Yusif </h4>
              <span className="slash">  / </span>
              <h4 className="position"> Ceo, Developer </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <h3 className="heading">From our blog</h3>
          <p className="subheading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
          <div className="row">
            <OurBlogCard img='https://dummyimage.com/600x350/ced4da/6c757d' tags={['news']} title="Amazing " text=" Some quick example text to build on the card title and make up the bulk of the card's content. " authorImage='https://dummyimage.com/40x40/ced4da/6c757d'
              authorFullName="Kelly Rowan" date="March 12 2022" readTime="6 min" />

            <OurBlogCard img='https://dummyimage.com/600x350/ced4da/6c757d' tags={['news']} title="Amazing " text="Some quick example text to build on the card title and make up the bulk of the card's content." authorImage='https://dummyimage.com/40x40/ced4da/6c757d'
              authorFullName="Josiac Barcley" date="March 12 2022" readTime="2 min" />

            <OurBlogCard img='https://dummyimage.com/600x350/ced4da/6c757d' tags={['news']} title="Amazing " text="Some quick example text to build on the card title and make up the bulk of the card's content." authorImage='https://dummyimage.com/40x40/ced4da/6c757d'
              authorFullName="Evenly Barnzley" date="March 12 2022" readTime="4 min" />

          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h3 className="heading">New products, delivered to you.</h3>
              <p className="subheading">Sign up for our newsletter for the latest updates.</p>
            </div>
            <div className="right-column">
              <form action="">
                <input type="text" placeholder='Email address' />
                <button> Sign up  </button>
              </form>
              <p className="text">We care about privacy, and will never share your data.</p>
            </div>
          </div>
        </div>
      </section>


 

    </main>
  )
}

function OurBlogCard(props) {
  return (
    <div className="box">

      <div >
        <img src={props.img} alt="" />
        <span></span>
      </div>

      <div className="content">

        <div className="tags">
          {props.tags.map(x => <span className="tag"> {x} </span>)}
        </div>
        <h3 className="title">  {props.title} </h3>
        <p className="text"> {props.text} </p>
        <div className="author">
          <div>
            <img src={props.authorImage} alt="" />
          </div>
          <div className="content">
            <h4 className="fullname"> {props.authorFullName} </h4>
            <span className="date"> {props.date} </span>
            <span className="read-time"> {props.readTime} read</span>
          </div>
        </div>

      </div>

    </div>
  )
}



function StartBuildingCard(props) {
  return (
    <div className="box">
      <div>
        <img src={props.img} alt="" />
      </div>
      <h4 className="title"> {props.title}  </h4>
      <p className="text">  {props.text}  </p>
    </div>
  )
}