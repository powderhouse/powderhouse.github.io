import styled from "styled-components";
import { useRef, useState } from "react";

import { mediaQueries } from "../site-data.js";
import { expandColor, complementaryColor } from "./global.js";
import ArrowButton from "../components/ArrowButton.js";

function NewsLetterSignUp({
    text,
    backgroundColor,
    buttonWidth,
    buttonThickness,
    buttonTextLength,
    isHomePage,
    $color,
    shoutOut,
}) {
    // console.log(isHomePage);
    // 1. Create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null);
    // 2. Hold a message in state to handle the response from our API.
    const [message, setMessage] = useState("");

    const subscribe = async (e) => {
        e.preventDefault();

        // 3. Send a request to our API with the user's email address.
        const res = await fetch("/api/subscribe", {
            body: JSON.stringify({
                email: inputEl.current.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();

        if (error) {
            // TODO: Maybe also check response code, in case error message is blank or undefined
            // 4. If there was an error, update the message in state.
            setMessage(error);

            return;
        }

        // 5. Clear the input value and show a success message.
        inputEl.current.value = "";
        setMessage("🎉 You are now subscribed to our mailing list.");
    };

    let buttonColor = expandColor(
        $color ? $color : complementaryColor(backgroundColor)
    );

    return (
        <>
            <ShoutOut>{!message ? shoutOut : message}</ShoutOut>
            <NewsLetterForm
                onSubmit={subscribe}
                isHomePage={isHomePage}
                submitStatus={message ? message : false}
            >
                <EmailInput
                    id="email-input"
                    name="email"
                    placeholder="you@awesome.com"
                    ref={inputEl}
                    required
                    type="email"
                    $color={buttonColor}
                    isHomePage={isHomePage}
                />
                {/*<label>*/}
                {/*                    <input style={{ display: "none" }} type="submit" />*/}
                <NewsLetterFormButton isHomePage={isHomePage}>
                    <ArrowButton
                        buttonWidth={buttonWidth}
                        buttonThickness={buttonThickness}
                        buttonTextLength={buttonTextLength}
                        color={buttonColor == "initial" ? "" : buttonColor} // TODO: Fix this hack; initial doesn't work for SVG color
                        text={text}
                        className="arrowButton"
                        width="100%"
                        preserveAspectRatio="none"
                        link="" // TODO: Is this in fact what we want here?
                    />
                    <ArrowButton
                        buttonWidth="naked"
                        buttonThickness="short"
                        buttonTextLength="1"
                        color={buttonColor == "initial" ? "" : buttonColor} // TODO: Fix this hack; initial doesn't work for SVG color
                        className="tablet"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        link="" // TODO: Is this in fact what we want here?
                    />
                </NewsLetterFormButton>
                {/*</label>*/}
            </NewsLetterForm>
        </>
    );
}

let ShoutOut = styled.p`
    grid-column: 1 / -1;
    font-size: var(--base-font-size);
    line-height: var(--base-line-height);
    padding-bottom: calc(var(--base-line-height) / 2);
    min-height: calc(var(--base-line-height) * 2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    // I don't think anything below here was being applied, and not sure why? (removed $ before vars so comments would work)
    // TK should the not-home-page (aka footer) version be a full line-height lower?
    // padding: {(props) =>
    //     props.isHomePage
    //         ? "var(--body-line-height) 0"
    //         : "0 0 calc(var(--body-line-height) / 2) 0"};
    // height: {(props) =>
    //     props.isHomePage ? "calc(4 * var(--body-line-height))" : ""};
`;

let NewsLetterForm = styled.form`
    grid-column: 1 / -1;
    width: 100%;

    // Better way to inherit this?
    display: grid;
    grid-template-columns: ${(props) =>
        props.isHomePage ? "repeat(12, 1fr)" : "repeat(6, 1fr)"};
    grid-template-rows: min-content;
    gap: var(--gap);

    @media ${mediaQueries.uptoTablet} {
        grid-template-columns: ${(props) =>
            props.isHomePage ? "repeat(6, 1fr)" : "repeat(4, 1fr)"};
    }
    @media ${mediaQueries.uptoMobile} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

let EmailInput = styled.input.attrs(() => ({
    type: "email",
    // name: "email",
    placeholder: "Email Address",
}))`
    grid-column: ${(props) => (props.isHomePage ? "1 / 7" : "1 / 4")};

    color: ${(props) =>
        props.$color ? expandColor(props.$color) : expandColor("--off-black")};
    background: transparent;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) =>
        props.$color ? expandColor(props.$color) : expandColor("--off-black")};
    padding: calc(var(--base-line-height) / 2);
    max-width: 100%;

    &::placeholder {
        opacity: 0.6;
        color: ${(props) =>
            props.$color
                ? expandColor(props.$color)
                : expandColor("--off-black")};
    }

    @media ${mediaQueries.uptoTablet} {
        grid-column: ${(props) => (props.isHomePage ? "2 / 5" : "1 / 4")};
    }
    @media ${mediaQueries.uptoMobile} {
        grid-column: 1 / -1;
    }
`;

let NewsLetterFormButton = styled.div`
    grid-column: ${(props) => (props.isHomePage ? "7 / 13" : "4 / 7")};

    position: relative;
    // display: grid;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;

    @media ${mediaQueries.uptoTablet} {
        grid-column: ${(props) => (props.isHomePage ? "5 / 6" : "4 / 5")};
    }
    @media ${mediaQueries.uptoMobile} {
        grid-column: 1 / -1;
        grid-row: 2;
    }

    & .tablet {
        display: none;

        @media ${mediaQueries.uptoTablet} {
            display: block;
        }
        @media ${mediaQueries.uptoMobile} {
            display: none;
        }
    }
    & .arrowButton {
        display: block;

        @media ${mediaQueries.uptoTablet} {
            display: none;
        }
        @media ${mediaQueries.uptoMobile} {
            display: block;
        }
    }
`;
export default NewsLetterSignUp;
