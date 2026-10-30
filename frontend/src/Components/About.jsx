import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' if='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About</h1>
                    <p>The only thing we are serious about is food</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos beatae natus aut voluptatum laboriosam eum reiciendis reprehenderit asperiores delectus vero, eos ab explicabo expedita velit quae maiores quibusdam, voluptates similique eveniet illo est? Explicabo ipsam deserunt esse! Ipsam nesciunt officia aperiam veritatis saepe ullam neque cum aspernatur distinctio voluptas!
                </p>
                <Link
                to={"/"}> Explore Menu<span>
                    <HiOutlineArrowNarrowRight/>
                </span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About