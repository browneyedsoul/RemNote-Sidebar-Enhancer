import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

let SidebarCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
	await fetch("https://raw.githubusercontent.com/browneyedsoul/RemNote-Sidebar-Enhancer/main/src/snippet.css")
    .then((response) => response.text())
    .then((text) => {
      SidebarCSS = text;
      console.log("Sidebar Enhanced!");
    })
    .catch((error) => console.error(error));
  await plugin.app.registerCSS("callout", SidebarCSS);
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
