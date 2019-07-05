import React, { Component } from 'react';
import './Modal.css';
import data from '../Data';


function text(text) {
    if (text.length > 10) {
        let textSplit = text.substr(0, 10)
        return `${textSplit} ...`
    } else {
        let textSplit = text
        return `${textSplit}`
    }
}

class Action extends Component {

    constructor(props) {
        super(props);
        this.state = {
            act: 0,
            index: '',
            datas: data

        }
    }

    fSubmit = (e) => {
        e.preventDefault();

        let datas = this.state.datas;
        let title = this.refs.title.value;
        let description = this.refs.description.value;
        let image = this.refs.image.value;

        if (this.state.act === 0) {
            let data = {
                title, description, image
            }
            datas.unshift(data);
        } else {
            let index = this.state.index;
            datas[index].title = title;
            datas[index].description = description;
            datas[index].image = image;
        }

        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
        this.refs.title.focus();
    }

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.title.focus();
    }

    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.title.value = data.title;
        this.refs.description.value = data.description;
        this.refs.image.value = data.image;

        this.setState({
            act: 1,
            index: i
        });

        this.refs.title.focus();
    }

    render() {
        let datas = this.state.datas;
        return (
            <div>
                <div className="container">
                    <a href="/#add" className='add'>ADD</a>

                    <div id="add" className="mod">

                        <div className="form-style-2">

                            <a className="close" href="/#">X</a>
                            <h2 className="title">Add Books</h2>

                            <form ref="myForm" className="myForm">

                                <label>
                                    <span>Image Url</span>
                                    <input
                                        type="text"
                                        ref="image"
                                        placeholder="Image Url ..."
                                        className="formField" />
                                </label>

                                <label>
                                    <span>Title</span>
                                    <input
                                        type="text"
                                        ref="title"
                                        placeholder="Title..."
                                        className="formField" />
                                </label>

                                <label>
                                    <span>Description</span>
                                    <textarea
                                        type="text"
                                        ref="description"
                                        placeholder="Description..."
                                        className="textarea-field" />
                                </label>

                                <a onClick={(e) => this.fSubmit(e)} className="myButton" type="submit">submit </a>
                            </form>

                        </div>

                    </div>

                </div>

                <div className="aaa">
                    {datas.map((data, i) =>

                        <a href={`#popup2/${i}`} className="item">

                            <img src={data.image} alt="gambar" />
                            <p className='item-p'>{text(data.title)}</p>

                        </a>

                    )}
                </div>

                <div>
                    {datas.map((data, i) =>
                        <div key={i} id={`popup2/${i}`} className="overlay">

                            <div className="popup" >
                                <img className='img2' src={data.image} alt="gambar" />
                                <img className='img1' src={data.image} alt="gambar" />

                                <a href="/#add" onClick={() => this.fEdit(i)} className="edit1">Edit </a>
                                <a className="back" href="/#">Back</a>
                                <a className="delete1" href="/#" onClick={() => this.fRemove(i)}>Delete</a>

                                <h1 className="titel">{data.title}</h1>
                                <p className="desc">{data.description}</p>
                            </div>

                        </div>
                    )}

                </div>

            </div>
        );
    }
}

export default Action;
