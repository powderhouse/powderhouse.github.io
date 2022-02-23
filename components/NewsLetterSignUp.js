import styled, { css } from "styled-components";
import React, { useRef, useState } from 'react';

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
    // 1. Create a reference to the input so we can fetch/clear it's value.
      const inputEl = useRef(null);
      // 2. Hold a message in state to handle the response from our API.
      const [message, setMessage] = useState('');

      const subscribe = async (e) => {
        e.preventDefault();

        // 3. Send a request to our API with the user's email address.
        const res = await fetch('/api/subscribe', {
          body: JSON.stringify({
            email: inputEl.current.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        });

        const { error } = await res.json();

        if (error) {
          // 4. If there was an error, update the message in state.
          setMessage(error);

          return;
        }

        // 5. Clear the input value and show a success message.
        inputEl.current.value = '';
        setMessage('Success! 🎉 You are now subscribed to the newsletter.');
      };

    let buttonColor = expandColor(complementaryColor(backgroundColor));

    return (
        <NewsLetterForm onSubmit={subscribe} isHomePage={isHomePage}>
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
          {/*<div>
            {message
              ? message
              : `I'll only send emails when new content is posted. No spam.`}
          </div>*/}
          <NewsLetterFormButton isHomePage={isHomePage}>
                {buttonSVGs[buttonWidth][buttonThickness][buttonTextLength](
                    `${buttonColor} arrowButton`
                )}
                {buttonSVGs["naked"]["short"][1](
                    `${buttonColor} tablet`
                )}
                <ButtonText $color={buttonColor}>
                    {text}
                </ButtonText>
            </NewsLetterFormButton>
        </NewsLetterForm>
    );
}

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
            props.isHomePage ? "repeat(6, 1fr)" : "repeat(3, 1fr)"};
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
    grid-column: ${(props) => (props.isHomePage ? "1 / 7" : "1 / 4")};

    color: ${(props) =>
        props.$color ? expandColor(props.$color) : expandColor("--off-black")};
    background: transparent;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) =>
        props.$color ? expandColor(props.$color) : expandColor("--off-black")};
    // TODO: Rationalize this
    padding: calc(var(--body-line-height) / 2);
    height: calc(3 * var(--body-line-height));

    &::placeholder {
        opacity: 0.6;
        color: ${(props) =>
            props.$color
                ? expandColor(props.$color)
                : expandColor("--off-black")};
    }

    @media ${mediaQueries.uptoTablet} {
        grid-column: ${(props) => (props.isHomePage ? "2 / 5" : "1 / 3")};
    }
    @media ${mediaQueries.uptoMobile} {
        grid-column: 1 / -1;
    }
`;

let NewsLetterFormButton = styled.button`
    grid-column: ${(props) => (props.isHomePage ? "7 / 13" : "4 / 7")};

    position: relative;
    display: grid;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    // TODO: Rationalize this
    height: calc(3 * var(--body-line-height));

    @media ${mediaQueries.uptoTablet} {
        grid-column: ${(props) => (props.isHomePage ? "5 / 6" : "3 / 4")};
    }
    @media ${mediaQueries.uptoMobile} {
        grid-column: 1 / -1;
        grid-row: 2;
    }

    & svg.tablet {
        display: none;

        @media ${mediaQueries.uptoTablet} {
            display: block;
        }
        @media ${mediaQueries.uptoMobile} {
            display: none;
        }
    }
    & svg.arrowButton {
        display: block;

        @media ${mediaQueries.uptoTablet} {
            display: none;
        }
        @media ${mediaQueries.uptoMobile} {
            display: block;
        }
    }
`;

let ButtonText = styled.span`
    top: 50%;
    transform: translateY(-50%);
    // TODO: Rationalize this
    left: 1rem;
    position: absolute;
    color: ${(props) =>
        props.$color ? expandColor(props.$color) : expandColor("--off-black")};

    @media ${mediaQueries.uptoTablet} {
        display: none;
    }
    @media ${mediaQueries.uptoMobile} {
        display: block;
    }
`;

export default NewsLetterSignUp;
