import React from 'react'
import styles from './status.module.css'


class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    render(){
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <div className={styles.statusDiv} 
                             onDoubleClick = { () => {this.activateEditMode()} }>
                                 {this.props.status || `------`}
                        </div>
                    }                    
                </div>
                <div>
                    {this.state.editMode &&
                        <input autoFocus 
                               maxLength='300' 
                               onBlur = { () => {this.deActivateEditMode()} } 
                               type="text" 
                               value={this.state.status}
                               onChange = {this.onStatusChange}
                        />

                    }                    
                </div>
        </div>
        )
    }
}

export default ProfileStatus