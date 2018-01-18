import React, { Component } from 'react';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'


       class Footer extends Component {
         render() {
          return (


       <div>
       <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={4}>

                  <List link inverted>
                    <List.Item as='a'>
                      <a href='http://www.wasatchcombatsports.com/' target="_blank">Wasatch Combat Sports</a>
                      </List.Item>

                  </List>
                </Grid.Column>
                <Grid.Column width={4}>
                <List link inverted>
                <List.Item as='a'>
                  <a href='http://www.pedrosauer.com/' target="_blank">Pedro Sauer</a>
                  </List.Item>
                  </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <List link inverted>
                <List.Item as='a'>
                  <a href='http://unifiedbjj.com/' target="_blank">Unified BJJ</a>
                  </List.Item>
                  </List>
                  </Grid.Column>

                <Grid.Column width={4}>
                  <Header as='h4' inverted>This website....</Header>
                  <p>Made with love by Amarie A </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}


export default Footer;
