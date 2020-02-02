
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TButton = (props) => {
    return (
        <IconButton
            id="tweet-quote"
            target="_blank"
            href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}
    	~${props.selectedQuote.author}`)}
        >
            <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
        </IconButton>
    )
}

export default TButton; 