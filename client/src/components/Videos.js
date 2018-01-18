import React from 'react'
import { Header, Segment, Grid, Container, Button, Image  } from 'semantic-ui-react';
import {Link } from 'react-router-dom';



class Videos extends React.Component {
 render () {

   return (
    <div style={styles.image}>
      <br></br>
      <p style={styles.heading}>

      </p>
      <p style={styles.paragraph}> </p>

      <Container>

              <Grid >
              <Grid.Row>
            <Grid.Column width={6}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-sGcp_MsSn8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </Grid.Column>

            <Grid.Column width={5}>
              <p style={styles.paragraph}></p>

            </Grid.Column>

          </Grid.Row>
          <Grid.Row>
        <Grid.Column width={8}>

        </Grid.Column>

        <Grid.Column width={8}>

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
      textDecoration: 'underline',
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
    width: '325px',
    height: '400px',
    margin: '0 auto',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: '1.5em',
    color: 'white',
  },
//  opacity: {
  //  backgroundColor: "rgba(100, 100, 100, 0)",
  //  height: "100vh"
  //},
}



export default Videos
