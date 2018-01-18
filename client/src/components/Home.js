import React from 'react';
import { Header, Segment, Grid, Container, Button, Image  } from 'semantic-ui-react';
import {Link } from 'react-router-dom';
import Videos from './Videos';
import Reviews from './Reviews';
import About from './About';
import Contact from './Contact';
import home2 from '../images/home2.jpg'
import home4 from '../images/home4.jpg'
import home6 from '../images/home6.png'
import home7 from '../images/home7.png'
import Slider from 'react-slick';
import Footer from './Footer'




class Home extends React.Component {
 render () {
   var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
   return (
    <div style={styles.image}>
      <br></br>
      <br></br>
      <p style={styles.heading}>
    Dayne Aristizabal
    Jui Jitsu
      </p>

      <br></br>
      <Container>
        <Slider {...settings}>
        <div><img style={styles.pics2} src={home7} /></div>
        <div><img style={styles.pics1} src={home2} /></div>

        <div><img style={styles.pics1} src={home4} /></div>


        <div><img style={styles.pics} src={home6} /></div>




        </Slider>
        <br></br>
        <p style={ styles.paragraph }>
        Pivate and group jui jitsu lesson in Salt Lake and Utah County

        </p>
              <Grid>
              <Grid.Row>

            <Grid.Column width={4}>
            <div> //class='ui center aligned segment'>
                <Link to="/About">
                  <Button inverted color='white'>
                    <p>About</p>
                  </Button>
                </Link>
                </div>
            </Grid.Column>
            <Grid.Column width={4}>
            <div >//class='ui center aligned segment'>
                <Link to="/Videos">
                  <Button inverted color='white'>
                    <p>Videos</p>
                  </Button>
                </Link>
                </div>
            </Grid.Column>
            <Grid.Column width={4}>
            <div >//class='ui center aligned segment'>
                <Link to="/Reviews">
                  <Button inverted color='white'>
                    <p>Reviews</p>
                  </Button>
                </Link>
                </div>
            </Grid.Column>
            <Grid.Column width={4}>
            <div> //class='ui center aligned segment'>
                <Link to="/Contact">
                  <Button inverted color='white'>
                    <p>Contact</p>
                  </Button>
                </Link>
                </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
   )
 }
}


const styles = {

  heading: {
      color: 'white',
      //textDecoration: 'underline',
     textAlign: 'center',
    fontSize: '3em',
    },
  //image: {
  //  backgroundImage: "url("+ Wallpaper + ")",
  //  resizeMode: "stretch",
  //  backgroundRepeat: "no-repeat",
  //  flex: 1,
  //  alignSelf: 'stretch',
  //  width: null,
//  },
  pics: {
    width: '400px',
    height: '400px',
    margin: '0 auto',
  },
  pics1: {
    width: '600px',
    height: '400px',
    margin: '0 auto',
  },
  pics2: {
    width: '500px',
    height: '400px',
    margin: '0 auto',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: '1.5em',
    color: 'white',
  },
  opacity: {
    backgroundColor: "rgba(100, 100, 100, 0)",
    height: "100vh"
  },
}



export default Home
