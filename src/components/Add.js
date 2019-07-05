import React, { Component } from 'react';
import './Modal.css';
import datas from '../Data';


class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Add Books',
            act: 0,
            index: '',
            datas: datas

        }
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;
        let image = this.refs.image.value;

        if (this.state.act === 0) {   //new
            let data = {
                name, address, image
            }
            datas.push(data);
        } else {                      //update
            let index = this.state.index;
            datas[index].name = name;
            datas[index].address = address;
            datas[index].image = image;
        }

        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;
        this.refs.image.value = data.image;

        this.setState({
            act: 1,
            index: i
        });

        this.refs.name.focus();
    }

    render() {
        return (
            <div>

                <a href="/#add" className='add'>ADD</a>

                <div id="add" className="mod">
                    <div className="form-style-2">
                        <a className="close" href="/#">X</a>
                        <h2 className="title">{this.state.title}</h2>

                        <form ref="myForm" className="myForm">
                            <label><span>Image Url</span> <input type="text" ref="image" placeholder="Image Url ..." className="formField" /></label>
                            <label><span>Title</span> <input type="text" ref="name" placeholder="Title..." className="formField" /></label>
                            <label><span>Description</span> <textarea type="text" ref="address" placeholder="Description..." className="textarea-field" /></label>

                            <a onClick={(e) => this.fSubmit(e)} className="myButton">submit </a>
                        </form>
                    </div>
                </div>

                <pre>


                </pre>
            </div>
        );
    }
}

export default Add;
