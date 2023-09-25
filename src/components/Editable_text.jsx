import React, {useState, useRef} from "react";
import ContentEditable from "react-contenteditable";
const Editable_text = (props) => {
    // const [text, setText] = useState(props.content);
    var text = props.content;
    const contentEditableref = useRef();

    const handleChange = evt => {
        setText(evt.target.value);

    };
   
    const handleBlur = () => {
    console.log(contentEditableref.current.innerHTML);  // Correct value
    // setText(contentEditableref.current.innerHTML);
    console.log("after editing.........");
    // console.log(text); // Incorrect value
    };

    return(
        <ContentEditable
        innerRef={contentEditableref}
        html={props.content}
        onBlur={handleBlur}
        onChange={props.handleChange}
        />
    )

}

export default Editable_text;