import { getNumericAnswer } from "./helper/getNumericAnswer";
import { getTextAnswer } from "./helper/getTextAnswer";
import { getMultiImageAnswers } from "./helper/getMultiImageAnswers";
import { Response } from "./Response";

export const getResults = (obj:any) => {
    const questions:any[] = obj.quiz.questions;
    const arr:Response[] = [];
    let id = 1;

    questions.forEach(object => {
        switch(object.variation){
            case "text":
                arr.push({answer: getTextAnswer(object), id: id})
                break
            case "numeric":
                arr.push({answer: getNumericAnswer(object), id: id})
                break
            case "multiple_image_response":
                arr.push({answer: getMultiImageAnswers(object), id: id})
                break
            default:
                arr.push({answer: "unknown", id: id})
                break
        }
        id++;
    })
    return arr;
}

