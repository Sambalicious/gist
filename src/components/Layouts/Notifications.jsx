import React from 'react';
import {useSelector} from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";
import moment from "moment";

const Notifications = () => {

    useFirestoreConnect([{collection: "notifications",  orderBy:['time', 'desc']}]);

    const notification = useSelector((state) => state.firestore.ordered.notifications);
    return (
        <div>
            
        </div>
    )
}

export default Notifications
