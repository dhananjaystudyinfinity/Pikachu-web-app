import React,{Component} from 'react';
class InputField extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="form-group">
                <label>Label</label>
                <input type='text' name='name' placeholder="Place Holder" className="form-control" />
            </div>
         );
    }
}
 
export default InputField;