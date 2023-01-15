

export const getMultiImageAnswers = (obj:any) : string[] => {

    const answers:any[] = obj.answers;
    const arr:string[] = [];

    answers.forEach(object => {
        if(object.correct){
            arr.push(object.text)
        }
    })

    return arr;
}