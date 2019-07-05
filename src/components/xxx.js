import React, { Component } from 'react';
import Modal from 'react-modal';
import './Modal.css';

class Modal1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            tittle: 'Add Books',
            act: 0,
            index: "",
            datas: [],
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    componentDidMount(){
        this.refs.name.focus();
      }
    

    openModal() {
        this.setState({ modalIsOpen: true });
    };

    fSubmit = (e) => {
        e.preventDefault();

        let datas = this.state.datas;
        let image = this.refs.image.value;
        let title = this.refs.title.value;
        let description = this.refs.description.value;

        if (this.state.act === 0) {
            let data = {
                image, title, description
            }
            datas.push(data);
          
        }else{                      //update
            let index = this.state.index;
            datas[index].title = title;
            datas[index].description = description;
          }  

        this.setState({
            datas: datas,
            act: 0,
            modalIsOpen: false 
        });

        this.refs.myForm.reset();
        this.refs.image.focus();
    };

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });
        this.refs.myForm.reset();
        this.refs.image.focus();
  
    };

    fEdit = (i) => {
        let data = this.state.datas[i];
        console.log(data);
        this.refs.image.value = data.image;
        this.refs.title.value = data.title;
        this.refs.description.value = data.description;
       
        

        this.setState({
            modalIsOpen: true,  
            act: 1,
            index : i
        });
        this.refs.image.focus();
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }



    render() {
        return (
            <div>
                <p onClick={this.openModal} className='add'>ADD</p>
                <div id="modal-window-one" >

                    <Modal className="mod"
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                    >
                        <p className="close" onClick={this.closeModal}>X</p>
                        <h2 className="title">{this.state.tittle}</h2>

                        <div className="form-style-2">
                            <form ref="myForm">

                                <label for="field1">
                                    <span>Image Url</span>
                                    <input 
                                        ref="image" 
                                        placeholder="Image Url" 
                                        type="text" 
                                        className="input-field"
                                        />
                                        
                                </label>
                               
                                <label for="field2">
                                    <span>Tittle</span>
                                    <input 
                                        ref="title" 
                                        placeholder="Title" 
                                        type="text" 
                                        className="input-field"
                                        />
                                </label>
                                
                                <label for="field5">
                                    <span>Description</span>
                                    <textarea 
                                        ref="description" 
                                        placeholder="Description" 
                                        className="textarea-field"
                                        >
                                    </textarea>
                                </label>
                                <button type="submit" className="myButton" onClick={(e) => this.fSubmit(e)} >Save</button>

                            </form>
                        </div>


                    </Modal>
                </div>

                <div>
                    
                        {this.state.datas.map((data, i) =>
                        <div>
                        <a  className="button" href={`#popup1/${i}`}>
                            <div key={i} className="myList">
                                <img className='img' src={data.image} alt="gambar" />
                                <p className='myP'>{data.title}</p>
                            
                            </div>
                        </a>
                       
                       
                  
                  
                    <div key={i} id={`popup1/${i}`} className="overlay">
                        
                            <div className="popup" >
                                <img className='img2' src={data.image} alt="gambar" />
                                <a className="edit1" onClick={() => this.fEdit(i)}>Edit</a>
                                <a className="back" href="/#">Back</a>
                                <a className="delete1" href="/#" onClick={() => this.fRemove(i)}>Delete
                            </a>
                                <img className='img1' src={data.image} alt="gambar" />
                                <div>
                                    <h1 className="titel">{data.title}</h1>
                                    <p className="desc">{data.description}</p>
                                </div>

                            </div>
                       
                    </div>
                    </div>
                     )}


                </div>
            </div>
        );
    }
}

export default Modal1;
