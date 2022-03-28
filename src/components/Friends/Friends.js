import Friend from './Friend'
import "./Friends.css"
import React, { useState,useEffect } from 'react'
import {auth,provider, db} from "../../Firebase"
import {doc,getDoc,updateDoc} from "firebase/firestore"

function Friends() {
  const [friendsData,setFriendsData] = useState([]) ;
  const [friendList,setFriendList] = useState([]) ; 
  
  

  const getFriendsList=async event=>{
    var details = JSON.parse(localStorage.getItem('userDetails'));
    const DocRef = doc(db, "users", `${details.profile.id}`);
    var document=await getDoc(DocRef);
      console.log(document._document.data.value.mapValue.fields.friends.arrayValue.values);
      setFriendList(document._document.data.value.mapValue.fields.friends.arrayValue.values);
      console.log(friendList);
    
    friendList.map((friend, i) =>{
      console.log(friend.stringValue);
      const friendRef = doc(db, "users", `${friend.stringValue}`);
     getDoc(friendRef)
      .then(response1 =>{setFriendsData([...friendsData,response1._document.data.value.mapValue.fields]);
     console.log(response1)});
      
    
  });
  }

  
  
  
 useEffect(() => {
    getFriendsList();
  },[]);

  const displayFriends=friendsData
   .map((friend_dat) => {
    return (
      <Friend props={friend_dat}/>
      );
    })   ;
  

  return (
    <div className='friend-container'>
        <div className='friend-header'>
          Friends ({friendsData.length})
        </div>
        <div className="friend-list">
          {displayFriends}
        </div>
    </div>
  )
}

export default Friends