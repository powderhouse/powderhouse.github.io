#!/usr/bin/env node

const fs = require("fs");
const ltx = require("ltx");
const svgPathBbox = require("svg-path-bbox");

const svgson = require("svgson");
const toPath = require("element-to-path");

let zoomViewBox = function (svgString) {
	let pathThatSvg = function (svgString) {
		// Adapted from https://github.com/elrumordelaluz/path-that-svg/blob/master/index.js
		const elemToPath = (node) => {
			let o = Object.assign({}, node);

			if (
				/(rect|circle|ellipse|polygon|polyline|line|path)/.test(o.name)
			) {
				o.attributes = Object.assign({}, o.attributes, {
					d: toPath(o),
				});
				for (const attr in o.attributes) {
					// Remove geometry properties not used
					if (
						/^(x|y|x1|y1|x2|y2|points|width|height|cx|cy|rx|ry|r)$/.test(
							attr
						)
					) {
						delete o.attributes[attr];
					}
				}
				o.name = "path";
			} else if (o.children && Array.isArray(o.children)) {
				o.children = o.children.map(elemToPath);
			}

			return o;
		};

		const parsed = svgson.parseSync(svgString);
		const convertedPath = elemToPath(parsed);
		return svgson.stringify(convertedPath);
	};

	let mergeViewBoxes = function (vb1, vb2) {
		let minimize = (a, b) => (a < b ? a : b);
		let maximize = (a, b) => (a < b ? b : a);
		return [
			minimize(vb1[0], vb2[0]),
			minimize(vb1[1], vb2[1]),
			maximize(vb1[2], vb2[2]),
			maximize(vb1[3], vb2[3]),
		];
	};

	let viewBox = null;
	let updateViewBoxWith = function (element) {
		if (element.attrs.hasOwnProperty("d")) {
			if (viewBox == null) {
				viewBox = svgPathBbox(element.attrs.d);
			}
			// console.log(element, "has a path");
			viewBox = mergeViewBoxes(viewBox, svgPathBbox(element.attrs.d));
			// console.log("Now viewBox is", viewBox);
		}
		if (element.children.length > 0) {
			element.children.forEach(updateViewBoxWith);
		}
	};

	let pathedSvg = pathThatSvg(svgString);
	let parsed = ltx.parse(pathedSvg);
	// console.log("viewBox starts as", parsed.attrs.viewBox);
	updateViewBoxWith(parsed);
	viewBox = [
		viewBox[0] - 0.125,
		viewBox[1] - 0.125,
		viewBox[2] - 0.75,
		viewBox[3] - 0.75,
	];
	// console.log("Finally, viewBox is", viewBox);
	let newDims = {
		viewBox: viewBox.join(" "),
		width: viewBox[2] - viewBox[0],
		height: viewBox[3] - viewBox[1],
	};
	Object.keys(newDims).forEach((d) => (parsed.attrs[d] = newDims[d]));
	return ltx.stringify(parsed);
};

let filename = process.argv[2];
console.log("Reading in", filename);
let svgString = fs.readFileSync(filename);
let backupFilename = filename + ".old";
console.log("Backing up", filename, "as", backupFilename);
fs.renameSync(filename, backupFilename);
console.log("Zooming viewBox for", filename);
let newSvg = zoomViewBox(svgString);
console.log("Writing new SVG", filename);
fs.writeFileSync(filename, newSvg);
