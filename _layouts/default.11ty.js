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
				<link rel="stylesheet" href="./styles/tailwind.css" />
				<link rel="stylesheet" href="./styles/style.css" />
				<title>${data.title}</title>
			</head>
			<body>
				<div class="relative py-16 bg-white overflow-hidden">
					<div class="relative px-4 sm:px-6 lg:px-8">
						<div class="text-lg max-w-prose mx-auto">
							<h1>
								<span
									class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
									>Introducing</span
								>
								<span
									class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
									>Powderhouse's 2020 in Review</span
								>
							</h1>
						</div>
						<div
							class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"
						>
						${data.content}
						</div>
					</div>
				</div>
			</body>
		</html>`;
};
