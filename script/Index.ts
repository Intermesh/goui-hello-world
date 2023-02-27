import {comp} from "@goui/component/Component.js";
import {root} from "@goui/component/Root.js";
import {btn} from "@goui/component/Button.js";

root.items.add(
	comp({tagName: "h1", text: "Hello World!"}),
	comp({tagName: "p", text: "Welcome to the simplest GOUI application."}),
	btn({
		text: "Visit docs",
		cls: "primary",
		handler: () => window.open("https://www.group-office.com")
	})

);


