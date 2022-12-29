
import './style.scss'

export function About() {
  return (
    <div className='about-page'>

      <section className="hero">
        <div className="container">
          <div className="row">
            <h2 className="heading">Our mission is to make building websites easier for everyone. </h2>
            <p className="subheading">
              Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.
            </p>
            <div className="action">
              <button> Read our story </button>
            </div>
          </div>
        </div>
      </section>
      <section className="founding">
        <div className="container">
          <div className="row">
            <div className="column left-column ">
              <img src='https://dummyimage.com/600x400/343a40/6c757d' alt="" />
            </div>
            <div className="column right-column ">
              <h3 className="title">Our founding </h3>
              <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="growth">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h3 className="title"> Growth & Beyond </h3>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
            </div>
            <div className="right-column">
              <img src='https://dummyimage.com/600x400/343a40/6c757d' alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h3 className="heading">Our team</h3>
          <p className="subheading"> Dedicated to quality and your success</p>
          <div className="row">
            <TeamMember img='https://dummyimage.com/150x150/ced4da/6c757d' fullname="Ibbie Eccart" position="Founder & CEO" />
            <TeamMember img='https://dummyimage.com/150x150/ced4da/6c757d' fullname="Ibbie Eccart" position="Founder & CEO" />
            <TeamMember img='https://dummyimage.com/150x150/ced4da/6c757d' fullname="Ibbie Eccart" position="Founder & CEO" />
            <TeamMember img='https://dummyimage.com/150x150/ced4da/6c757d' fullname="Ibbie Eccart" position="Founder & CEO" />
          </div>
        </div>
      </section>





    </div>
  )
}
function TeamMember(props) {
  return (
    <div className="box" >
      <picture>
        <img src={props.img} alt="" />
      </picture>
      <h4 className="fullname"> {props.fullname} </h4>
      <p className="position"> {props.position} </p>
    </div >
  )

}