
import React, { useState,useEffect } from 'react'
import {auth,provider, db} from "../../Firebase"
import {doc,getDocs,updateDoc,collection} from "firebase/firestore"



const LeaderBoard=()=> {
  const [friends,setFriends] = useState() ;
  const [friends1,setFriends1] = useState([]) ;
  
  const [loading,setLoading] =useState(false);
  
  const getLeaderBoard=async()=>{
    
    var objs=[];
    const querySnapshot = await getDocs(collection(db, "users"));
    setFriends1(querySnapshot.docs.map(doc => doc.data()));
    setLoading(true);
    
    //.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    //  return(doc);
   // });
    }

  useEffect(() => {
    getLeaderBoard();
    
    
    
  },[]);

  
  const displayLeaderBoard=friends1.map((leader=>{
    console.log(leader);

    return(<div>{leader.email}</div>);
  }));
    
  
     
  
  
  
  

  return (<div>
    {!loading ? <div></div>
    :
    <div className='friend-container'>
        <div className='friend-header'>
          LeaderBoard ()
        </div>
        <div className="friend-list">
          {displayLeaderBoard}
        </div>
    </div>
}</div>
  )
}

export default LeaderBoard;