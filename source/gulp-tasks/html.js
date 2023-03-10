import { src, dest } from "gulp";
import pump from "pump";
import plumber from "gulp-plumber";
import fileinclude from "gulp-file-include";
import notify from "gulp-notify";

// assemble html parts
export default function html(cb, inputHtml, basepath, outputHtml) {
	return pump(
		[
			src(inputHtml),
			plumber({
				errorHandler: notify.onError("Error: <%= error.message %>"),
			}),
			fileinclude({
				prefix: "@@",
				basepath: basepath,
				context: {
					images_u8views__:
						"/assets/images/pages/u8views/",
				},
			}),
			dest(outputHtml),
		],
		cb,
	);
}
