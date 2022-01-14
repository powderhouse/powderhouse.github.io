import styled from 'styled-components';
import { css } from 'styled-components';
import { buttonSVGs } from "../site-data.js";

function NewsLetterSignUp({ text, color, link, buttonWidth, buttonThickness, buttonTextLength }) {
    // Built based off this tutorial: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm("https://ptsv2.com/t/ztmrx-1642088008/post",event.target);
    }

    function submitForm(URL,form) {
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(form);

        // Define what happens on successful data submission
        XHR.addEventListener("load", function(event) {
            alert(event.target.responseText);
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function(event) {
            alert('Oops! Something went wrong.');
        });

        // Set up our request
        XHR.open("POST", URL);

        // The data sent is what the user provided in the form
        XHR.send(FD);
    };

    return (
        <NewsLetterForm method="post" onSubmit={handleSubmit}>
        <div>
            <input name="email" type="email" />
        </div>
        <NewsLetterFormButton className="arrowButton">
            {buttonSVGs[buttonWidth][buttonThickness][buttonTextLength](color)}
            <ButtonText color={color}>{text}</ButtonText>
        </NewsLetterFormButton>
    </NewsLetterForm>
    )
};

let NewsLetterForm = styled.form `
    display: flex;
  align-items: center;
`;

let NewsLetterFormButton = styled.button `
    position: relative;
      display: flex;
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
`;

let ButtonText = styled.div `
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    position: absolute;
    color:${props => props.color ? "var(--"+props.color+")" : "off-black"};
`;

export default NewsLetterSignUp;