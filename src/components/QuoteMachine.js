import React from 'react';
// import Button from './Button'
// import {IconButton} from '@material-ui/icons'
import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
// import { FontAwesomeIcon } from 'react-fontawesome';
// import {faTwitter} from '@fortawesome/free-brands-svg-icons';

import { withStyles} from '@material-ui/core/styles';
import TButton from './Tweet'


const style= {
  card: {
    minWidth: 275,
    height: 100,
    width: "100px",
  }
}

const QuoteMachine = (props) => {
  return (
    <React.Fragment>
      {/* <h2>
          { props.selectedQuote ? props.selectedQuote.quote : "failed" }
        </h2> */}
      <Card>
        <CardContent>
          {
            props.selectedQuote
              ?
              (
                <Typography variant="body2" color="textSecondary" component="p" paragraph>
                  {props.selectedQuote.quote} - {props.selectedQuote.author}
                </Typography>
              )
              : "Network Loading..." 
          }
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            buttonDisplayName="Quote Get"
            clickHandler={
              props.assignIndex
            }
            onClick={
              props.assignIndex
            }        
          >NEXT</Button>
          {/* <IconButton>
            <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
          </IconButton> */}
          {
            props.selectedQuote ? 
            <TButton selectedQuote={props.selectedQuote} />
            : null
          }
          
        </CardActions>
      </Card>

    </React.Fragment>
  )
}

export default withStyles(style)(QuoteMachine);