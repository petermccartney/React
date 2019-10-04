import React, { Component } from 'react';
export default class Counter extends Component {
    state = {  
        count: 0,
        imageUrl: 'https://picsum.photos/400',
        tags:['tag1','tag2','tag3']

    };

    style = {
        fontSize: 10,
        fontWeight: "bold"
    };
    //<img src={this.state.imageUrl} alt = "" />
    render() { 
        let classes = this.getBadgeClasses();


        return <React.Fragment>
            <span style={this.styles}className= {classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                    {this.state.tags.map(tag => <li key ={tag}>{ tag } </li>)}  
            </ul>
            </React.Fragment>;
        
   
    }

    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const{count}=this.state;
        return count ===0? 'Zero': count;
    }
}
 