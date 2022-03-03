import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

let Markdown = ({ children, ...rest }) => {
	// Here we iterate over children we pass and only wrap text/string children in Markdown.  This lets us wrap things in Markdown more cavalierly.
	let wrappedChildren = React.Children.toArray(children).map((c, i) => {
		if (typeof c == "string") {
			try {
				if (c.match(/\.  /)) {
					// throw new Error("Formatting issue with:" + c, {
					// 	cause: "Period with two spaces after it appears.  We use periods with one space after them.",
					// });
				}
			} catch (err) {
				console.log(err, err.cause);
			}
			return (
				<ReactMarkdown
					components={{ strong: "b" }}
					rehypePlugins={[rehypeRaw]}
					key={i}
					{...rest}
				>
					{c}
				</ReactMarkdown>
			);
		} else {
			// We need to clone the element because by default, JSX elements are not extensible (i.e. we can't modify their props.key after they are passed)
			let clone = React.cloneElement(c, { key: i });
			return clone;
		}
	});
	return <>{wrappedChildren}</>;
};

// import { unified } from "unified";
// import markdown from "remark-parse";
// import prism from "remark-prism";

// const parseMarkdown = (content) => unified().use(markdown).parse(content);

export default Markdown;
