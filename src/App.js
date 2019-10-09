import React, {Component} from "react";

export default class Test extends Component{
  constructor(props) {
		
		super(props)
		
		this.state = {
			values: {
				select1: '',
				select2: ''
			}
		}
		
	}
	
	options = (opt) => {
		
		var options = {
			day: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			],
			month: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		}
		
		return options[opt]
		
	};

	response = (value, id) => {
		
		this.setState({
			values: {
				...this.state.values,
				[id]: value
			}
		})
		
	};
	
	render() {
		
		console.log(this.state)
		
		return (
			
			<div className="select__wrapper">
			
				<Select options={this.options('day')} label="Favorite Day" onChange={this.response} value={this.state.values.select1} id='select1' />
			
				<Select options={this.options('month')} label="Favorite Month" onChange={this.response} value={this.state.values.select2} id='select2' />
				
			</div>
			
		)
		
	};
}

class Select extends Component{
  constructor(props) {

    super(props)

    this.state = {
        active: false,
    }

}

handleClick = (e) => {

    this.setState({values: e.currentTarget.innerText, active: false})

    if (typeof this.props.onChange !== 'undefined') {

        this.props.onChange(e.currentTarget.dataset.value, this.props.id)

    }

};

toggleActive = () => {

    this.setState({active: ! this.state.active})

};

render() {

    return (

        <div className={'select' + (this.state.active ? ' select-active' : ' select-deactive') + (typeof this.props.value !== 'undefined' && this.props.value.length ? ' selected' : '')}>
        
            <div className="select__label">
              
              <p>{this.props.label}</p>
              
            </div>

            <div className='select__value' onClick={this.toggleActive}>

                <p>{this.props.value}</p>

            </div>

            <div className='select__options'>

                {this.props.options.map((option) => {

                    let type = option.constructor === String ? 'String' : option.constructor === Object ? 'Object' : false

                    option = type == 'String' ? {[option]: option} : option

                    return type ? <div className={'select__option' + (this.props.value == option[Object.keys(option)[0]] ? ' select__option-active' : '')} onClick={this.handleClick} data-value={option[Object.keys(option)[0]]} key={option[Object.keys(option)[0]]}>{Object.keys(option)[0]}</div> : ''

                })}

            </div>
        
            <div className='select__trigger' onClick={this.toggleActive}>
                
            </div>

        </div>

    )

}
}
// class NoteComponent extends Component{
//   state = {
//     readOnly:'true',
//     msg : this.props.text,
//   }
//   render(){    
//     return <div className="p-8 border m-2" >
//       <div className={this.state.readOnly ? '' : 'hidden'} onClick={()=>{this.setState({readOnly:!this.state.readOnly});this.setState({msg:this.props.text}) }}> {this.props.text} </div>
//       <div className={this.state.readOnly ? 'hidden' : ''} >
//         <input id={this.props.keyProp} value={this.state.msg} onChange={(e) => this.setState({msg: e.target.value})}/>
//         <button type="button" className="bg-gray-300 p-2 m-2" 
//           onClick={() => {
//             this.props.onSave(this.props.keyProp,this.state.msg);
//             this.setState({readOnly:!this.state.readOnly})} 
//           }>Save
//         </button>
//         <button type="button" className="bg-gray-300 p-2 m-2" 
//           onClick={() => {
//             this.props.onDelete(this.props.keyProp,this.state.msg);
//             this.setState({readOnly:!this.state.readOnly})} 
//           }>Delete
//         </button>
//       </div>
//     </div>
//   }
// }
