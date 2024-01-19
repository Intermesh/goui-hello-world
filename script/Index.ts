import {btn, h2, p, root} from "@intermesh/goui";

root.items.add(
	h2("Hello World!"),

	p("Welcome to the simplest GOUI application."),

	btn({
		text: "Visit docs",
		cls: "filled primary",
		handler: () => window.open("https://github.com/intermesh/goui-docs/")
	})

);


