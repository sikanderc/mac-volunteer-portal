import React from 'react'
import { Segment, Grid, Image } from 'semantic-ui-react'

const HomePage = () => (
  <div>
  <br/><br/>
    <Segment.Group textAlign='center' raised >
      <Segment color='blue' size={'big'}>
        Our Mission
      </Segment>
      <Segment padded='very'>
        Muslim Americans for Compassion is an organization built to engage the community through interfaith, environmental, and philanthropic outreach initiatives and to promote educational activities and events, whether hosted by MAC or another organization, focused on interfaith dialogue. MAC hopes to provide a platform by which Muslim Americans are able to engage their fellow citizens in such a way as to increase mutual understanding and respect through service and compassion for all.
      </Segment>
    </Segment.Group>
    <br/> <br/>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Segment.Group textAlign='center' raised>
            <Segment color='blue' size={'big'}>
              Interfaith
            </Segment>
            <Segment>
              We work with Interfaith partners to develop programming that brings people of various backgrounds together, fostering interaction that is positive and meaningful.
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Segment.Group textAlign='center' raised>
            <Segment color='blue' size={'big'}>
              Social/Civic
            </Segment>
            <Segment>
              We address social and civic concerns in communities that are under-served, trying to utilize our resources efficiently to achieve what we believe is the most positive effect.
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Segment.Group textAlign='center' raised>
            <Segment color='blue' size={'big'}>
              Environment
            </Segment>
            <Segment>
              We work to protect and improve the environment so that future generations may have more of an opportunity to further the messages of love and compassion.
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)


export default HomePage
