import React, { Component } from 'react';
import Student from './Student';
class App extends Component {
    state={records:[],roll:"",name:""};
    handleChange=(evt)=>{
        const name=evt.target.name;
        const value=evt.target.value;
        this.setState({[name]:value});
    }
    handleClick=()=>{
        const obj={roll:this.state.roll,name:this.state.name};
        const rcds=this.state.records;
        rcds.push(obj);
        this.setState({records:rcds,roll:"",name:""});
    }

    handleDel=(index)=>{        
        const rcds=this.state.records;
        rcds.splice(index,1);
        this.setState({records:rcds});
    }
    handleEdit=(index,evt)=>{
        const rcds=this.state.records;
        const row=rcds[index];
        row.name=evt.target.value;
        this.setState({records:rcds});
    }
    render() {        
        return (
            <>
                Roll : 
                <input type="text" name="roll" value={this.state.roll} onChange={this.handleChange} /> <br />
                Name : <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> <br />
                <input type="button" value="Add record" onClick={this.handleClick} /> <br /> <hr />
                {this.state.records.map((record,i)=>{
                    return(
                        <Student 
                        key={record.roll}
                        roll={record.roll} 
                        name={record.name}
                        chg={(evt)=>this.handleEdit(i,evt)}
                        clk={()=>this.handleDel(i)} />
                    )
                })}
            </>
        );
    }
}

export default App;