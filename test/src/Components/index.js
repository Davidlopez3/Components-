import React from 'react';
import'./styles.css';

    class Mass  extends React.Component{
       render ()
       {

        return(
            <div className="any-name">
                <h2> Name </h2>
                    <div className="list-container">
                         <input type="checkbox" value="apple"/>
                         <label>Apple</label>
                        <br/>
                        <input type="checkbox" value="apple"/>
                         <label>Grapes</label>
                        <br/>
                        <input type="checkbox" value="apple"/>
                         <label>Bannana</label>
                        <br/>
                        <input type="checkbox" value="apple"/>
                         <label>Berries</label>
                        <br/>
                    </div>
                </div>
        );

       }
    }
    export default Mass;