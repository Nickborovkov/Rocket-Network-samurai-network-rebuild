import styles from './info.module.css'
import avatar from './../../../assets/images/avatar.jpg'

import  React from "react";
import Property from "./property/property";

class Info extends React.Component{
    render(){

        let propertiesElements = this.props.info.map((p)=><Property key={p.id} property={p.property} meaning={p.meaning} />)

        return <div className={styles.info}>
            <div className={styles.info__avatarWrapper}>
                <img className={styles.info__avatar} src={avatar} alt="avatar"/>
            </div>
            <div className={styles.info__properties}>
                {propertiesElements}
            </div>
        </div>
    }
};

export default Info;