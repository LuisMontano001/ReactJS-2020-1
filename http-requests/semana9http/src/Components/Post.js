import React from 'react';

var Post = (props) => {
    return ( <div>
    	<li>id: {props.id} Contenido: {props.title}</li>

    	</div>
    	)
}

export default Post;