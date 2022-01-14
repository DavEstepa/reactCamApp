import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
        <div className="container-fluid bg-light text-dark p-5">
            <div className="container bg-light p-5">
                <h1 className="display-3">Beyond Safety</h1>
                <p className="lead">Laborum id enim excepteur occaecat sit officia velit enim. Aliquip magna id est officia aute sint amet cupidatat. Irure do sit sunt fugiat id do cupidatat voluptate dolor aliqua nostrud ea commodo duis.Fugiat in aliqua minim Lorem fugiat ipsum. Aliquip incididunt aliquip ullamco ullamco amet exercitation veniam laboris amet exercitation. Do dolore labore velit irure ut ex mollit eiusmod. Incididunt sint enim labore occaecat aute voluptate anim voluptate.Ad quis adipisicing magna quis in ex elit velit. Minim consectetur aliquip sunt nisi qui elit cillum in do. Quis voluptate occaecat consequat nulla nostrud.</p>
                <hr className="my-2" />
                <p>Excepteur culpa cupidatat do laboris nisi exercitation.</p>
                <p className="lead">
                <Link to='/camform'><Button color="primary">Try yourself</Button></Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Home;