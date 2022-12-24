import React, {useState} from "react";
import {Button} from "../components/Button";
import "../styles/Review.css";

function Review(){

    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);

    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };

    const onClickHandler = () => {
        setCommentList((commentList) => [...commentList, comment]);
    };

    return(
        <div className="review-container">
            {commentList.map( (text) =>(
                <div className="comment-container"> {text} </div>
                ))}
            <div className="review-input">
                <h1 className="comment-text"> Leave a review </h1>
                <textarea className="input-box" value={comment} onChange={onChangeHandler} placeholder="Leave your review here"/>
                <Button onClick={onClickHandler} buttonSize="btn--medium" buttonStyle="btn--primary"> SUBMIT </Button>
            </div>


        </div>
    );
}

export default Review;