let html = function (literals, ...vars) {
	let raw = literals.raw,
		result = "",
		i = 1,
		len = arguments.length,
		str,
		variable;

	while (i < len) {
		str = raw[i - 1];
		variable = vars[i - 1];
		result += str + variable;
		i++;
	}
	result += raw[raw.length - 1];
	return result;
};

exports.render = function (data) {
	return html`<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel='stylesheet' href='./styles/tailwind.css'>
				<link rel='stylesheet' href='./styles/style.css'>
				<title>${data.title}</title>
			</head>
			<body>
				${data.content}
			</body>
		</html>`;
};
