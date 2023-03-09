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
					images_common__: "/assets/images/pages/common/",
					images_devicon__: "/assets/images/pages/common/devicon/",
					images_chat_candidate__: "/assets/images/pages/chat/",
					images_vacancy2__: "/assets/images/pages/vacancy2/",
					images_vacancies__: "/assets/images/pages/vacancies/",
					images_vacancies2__: "/assets/images/pages/vacancies2/",
					images_profile2__: "/assets/images/pages/profile2/",
					images_rth_profile2__:
						"/assets/images/pages/ready-to-hire/profile2/",
					images_dou_comments_search__:
						"/assets/images/pages/dou-comments-search/",
					linkedin_url__: "https://www.linkedin.com/in/",
					images_u8views__:
						"/assets/images/pages/u8views/",
				},
			}),
			dest(outputHtml),
		],
		cb,
	);
}
