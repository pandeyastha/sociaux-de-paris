import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver} from '@hookform/resolvers/yup';              //mixes yup with reatc-form-hook
import { addDoc, collection} from "firebase/firestore"
import { db, auth } from "../../config/firebase" 
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
export const  CreateForm =() =>{

    const [user]= useAuthState(auth);                        //making user obj for taking Auth state
    const navigate=useNavigate();                                 //useNavigate hook to reroute

                                                            //setting schema via yup ->inputArea                                                            
    const schema =yup.object().shape({
        title: yup.string().required("You must add a title"),
        description :yup.string().required("You must add a decription").min(10),
    });

    const {
        register,
        handleSubmit,
        formState:{errors}}
         =useForm({
            resolver: yupResolver(schema),
         });

     const postsRef= collection(db,"posts");

    const onCreatePost =async(data)=>{
        await addDoc(postsRef,{
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        })
        console.log(data);
        navigate("/");
    }
                                                            //form for taking input from User 
    return (
    <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder="Title.." {...register("title")}/>
        <p style={{color : "red"}}>{errors.title?.message}</p>
        <textarea className="descriptionContainer" placeholder="Description.." {...register("description")} />
        <p style={{color : "red"}}>{errors.description?.message}</p>
        <input type="submit" className="submitForm"/>
        
     </form>);
};