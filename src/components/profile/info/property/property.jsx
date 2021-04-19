import styles from './property.module.css'
import  React from "react";

class Property extends React.Component{
    render() {
        return <div className={styles.properties}>
            <p className={styles.properties__title}>{this.props.property}</p>
            <p className={styles.properties__subtitle}>{this.props.meaning}</p>
        </div>
    }
}

export default Property;