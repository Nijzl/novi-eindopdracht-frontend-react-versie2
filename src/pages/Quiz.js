import React, { useState, useEffect } from "react";
import FlashcardList from "../components/FlashcardList";
import "../styles/Quiz.css";
import axios from 'axios';

function Quiz(){

    const [flashcards, setFlashcards] = useState(sampleFlashcards);

    useEffect(() => {axios.
        get("https://opentdb.com/api.php?amount=10")
        .then(res => {
            setFlashcards(res.data.results.map((questionItem, index) => {
                const answer = decodeString(questionItem.correct_answer)
                const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), answer]
                return{
                    id: `${index}-${Date.now()}`,
                    question: decodeString(questionItem.question),
                    answer: questionItem.correct_answer,
                    options: options.sort(() => Math.random() - 0.5)
                }

        }))
        })
    }, [])

    function decodeString(str){
        const textArea = document.createElement("textarea")
        textArea.innerHTML = str
        return textArea.value
    }

    return(
        <div className="card-container">
            <FlashcardList flashcards={flashcards}/>
        </div>
    );
}

const sampleFlashcards = [
    {
        id:1,
        question: "Sample Question 1",
        answer: "1",
        options: ["1", "2", "3"]
    },
    {
        id:2,
        question: "Sample Question 2",
        answer: "2",
        options: ["1", "2", "3"]
    },
    {
        id:3,
        question: "Sample Question 3",
        answer: "3",
        options: ["1", "2", "3"]
    }
]

export default Quiz;