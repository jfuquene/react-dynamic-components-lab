import React, { Component } from 'react';


export default class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                //receives information from blogpost
                 {this.props.commentText}
            </div>    
        )
    }
}
