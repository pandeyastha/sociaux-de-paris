import {getDocs,collection }  from 'firebase/firestore'
import { db } from '../../config/firebase';
import { useEffect, useState } from "react";
import { Post } from './post';

export const Main =() => {
    const [postsList ,setPostsList] = useState(null);
    const postsRef =collection(db,"posts");
                                                                        //All post on home
    const getPosts= async () => {
        const data =await getDocs(postsRef);                    // getall documents of "post" collection in DB
        setPostsList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
    };
                                                            //useEffect renders once here every refresh
    useEffect(() => {
    getPosts();
        }, []);
                                                                                // calls the post component for rendering
    return <div >{postsList?.map((post) =>                                                     
        (<Post post={post} />  
        ))}</div>;


};
