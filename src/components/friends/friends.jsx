import React from "react";

let Friends = ({friends}) => {
    return <div>
        <div>
            {friends.map(f => {
                return <div>
                    {f.name}
                </div>
            })}
        </div>
    </div>
}

export default Friends