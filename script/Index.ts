import {btn, comp, root} from "@intermesh/goui";

root.items.add(
	comp({tagName: "h1", text: "Hello World!"}),
	comp({tagName: "p", text: "Welcome to the simplest GOUI application."}),
	btn({
		text: "Visit docs",
		cls: "primary",
		handler: () => window.open("https://github.com/intermesh/goui-docs/")
	})

);


