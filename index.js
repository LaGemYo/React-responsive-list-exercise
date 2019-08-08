import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <article className="person">
      <img src={url} alt="person image" />

      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}


const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="john" job="developer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo erat, aliquet eget tincidunt in, vulputate non quam. Pellentesque quis condimentum augue.
        </p>
      </Person>
      <Person img="32" name="bob" job="designer">
        <p>
          Pellentesque urna ante, blandit non dui vel, posuere rhoncus nulla. Integer vel enim augue. Suspendisse potenti.
        </p>
      </Person>
      <Person img="56" name="david" job="the boss" >
        <p>
          Vivamus sollicitudin justo nec mi euismod, sed facilisis lectus vulputate. Proin et neque tempor, finibus odio ac, tristique est.
        </p>
      </Person>
    </section>
  )
}











ReactDOM.render(<PersonList />, document.getElementById('root'));

