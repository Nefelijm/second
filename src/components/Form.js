import React,{Component } from 'react';
import { Input,Col,Button,Card} from 'antd';


class Form extends Component {

    state = {
        task: "",
        inputvalue:""
    };



    agarrarvalordelinput = (e) => {
        const val = e.target.value;
        console.log(e.target.value)
        this.setState({
                task: val
            }
        )


    };

    action(e){
        e.preventDefault();


        return (

            <div >
                <Col span={6}>
                    <Card t bordered={false} style={{width: 300, margin: 10}}>
                        <span style={{background: 'red', padding: '5px'}}>d</span>
                        <div>
                            <p> nnrrrrrr</p>

                        </div>
                        <div>
                            <button>
                                Delete
                            </button>
                        </div>
                    </Card>
                </Col>
            </div>
        )



    }


x


  render() {
      return (
         <div>
             <Col className = "col-input" span={6} offset={8}>
                 <Input placeholder="Agregar una nueva tarea"
                        value = {this.state.task}
                        onChange={this.agarrarvalordelinput}


                 />

             </Col>
             < Col className = "button-margin" span={2}>
                 <Button type="submit" value="Crear" onClick={this.action}>
                     CREAR
                </Button>
             </Col>

         </div>
      )
  }


};

  export default Form;