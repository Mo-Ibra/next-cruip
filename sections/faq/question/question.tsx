interface QuestionInteface {
    header: string;
    text: string;
}

/**
 * [header, text] Parameters.
 * 
 * NOTE: We didn't use any parameters here but in Production you gotta use it.
*/
const Question = ({ header, text}: QuestionInteface) => {
    return (
        <div className="my-2">
            <h3 className="header-color font-bold text-2xl my-2">Publishing industries for previewing layouts?</h3>
            <p className="text-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis enim lobortis scelerisque fermentum.
            </p>
        </div>
    )
}

export default Question;