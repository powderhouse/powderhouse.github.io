import styled from "styled-components";
import { css } from "styled-components";
import { buttonSVGs, mediaQueries } from "../site-data.js";
import { highlight, expandColor, complementaryColor } from "./global.js";

function NewsLetterSignUp({
    text,
    backgroundColor,
    link,
    buttonWidth,
    buttonThickness,
    buttonTextLength,
    isHomePage,
}) {
    // Built based off this tutorial: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm("https://powderhouse.us11.list-manage.com/subscribe/post", event.target);
        // Test service => https://ptsv2.com/t/ztmrx-1642088008/post
    };

    function submitForm(URL, form) {
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(form);

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
            alert(event.target.responseText);
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });

        // Set up our request
        XHR.open("POST", URL);

        // The data sent is what the user provided in the form
        XHR.send(FD);
    }

    return (
        <NewsLetterForm method="post" onSubmit={handleSubmit} isHomePage={isHomePage}>
            <input type="hidden" name="u" value="f8c818c16bcf7810f5da39962" />
            <input type="hidden" name="id" value="5137830bcb" />
            <EmailInput name="MERGE0" id="MERGE0" color={complementaryColor(backgroundColor)}  isHomePage={isHomePage} />
            <NewsLetterFormButton isHomePage={isHomePage}>
                {buttonSVGs[buttonWidth][buttonThickness][buttonTextLength](
                    `${complementaryColor(backgroundColor)} arrowButton`
                )}
                {buttonSVGs["naked"]["short"][1](`${complementaryColor(backgroundColor)} tablet`)}
                <ButtonText color={complementaryColor(backgroundColor)}>{text}</ButtonText>
            </NewsLetterFormButton>
        </NewsLetterForm>
    );
}

let NewsLetterForm = styled.form`
    grid-column: 1 / -1;
    width:100%;

    // Better way to inherit this?
    display: grid;
    grid-template-columns: ${(props) => props.isHomePage ? "repeat(12, 1fr)" : "repeat(6, 1fr)"};
    grid-template-rows: min-content;
    gap: var(--gap);

    @media ${mediaQueries.uptoTablet} {
        grid-template-columns: ${(props) => props.isHomePage ? "repeat(6, 1fr)" : "repeat(3, 1fr)"};
    }
    @media ${mediaQueries.uptoMobile} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

let EmailInput = styled.input.attrs((props) => ({
    type: "email",
    // name: "email",
    placeholder: "Email Address",
}))`
    grid-column: ${(props) => props.isHomePage ? "1 / 7" : "1 / 4"};

    color: ${(props) =>
        props.color ? expandColor(props.color) : expandColor("--off-black")};
    background: transparent;
    border-style: solid;
    border-width: 2.5px;
    border-color: ${(props) =>
        props.color ? expandColor(props.color) : expandColor("--off-black")};
    padding: calc(1.3rem / 2);
    height: calc(3 * 1.3rem);

    &::placeholder {
        opacity:0.6;
        color:${(props) =>
        props.color ? expandColor(props.color) : expandColor("--off-black")};
    }

    @media ${mediaQueries.uptoTablet} {
        grid-column: ${(props) => props.isHomePage ? "2 / 5" : "1 / 3"};
    }
    @media ${mediaQueries.uptoMobile} {
        grid-column: 1 / -1;
    }
`;

let NewsLetterFormButton = styled.button`
    grid-column: ${(props) => props.isHomePage ? "7 / 13" : "4 / 7"};

    position: relative;
    display: grid;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    height: calc(3 * 1.3rem);

    @media ${mediaQueries.uptoTablet} {
        grid-column: ${(props) => props.isHomePage ? "5 / 6" : "3 / 4"};
    }
    @media ${mediaQueries.uptoMobile} {
        grid-column: 1 / -1;
        grid-row: 2;
    }

    & svg.tablet {
        display:none;

        @media ${mediaQueries.uptoTablet} {
            display:block;
        }
        @media ${mediaQueries.uptoMobile} {
            display:none;
        }
    }
    & svg.arrowButton {
        display:block;

        @media ${mediaQueries.uptoTablet} {
            display:none;
        }
        @media ${mediaQueries.uptoMobile} {
            display:block;
        }
    }
`;

let ButtonText = styled.div`
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    position: absolute;
    color:${(props) =>
        props.color ? expandColor(props.color) : expandColor("--off-black")};

    @media ${mediaQueries.uptoTablet} {
        display:none;
    }
    @media ${mediaQueries.uptoMobile} {
        display:block;
    }
`;

export default NewsLetterSignUp;