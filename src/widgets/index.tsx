import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

let SidebarCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
	try {
    const response = await fetch("snippet.css");
    const text = await response.text();
    SidebarCSS = text;
    console.log("Sidebar Enhancer Installed from local");
    await plugin.app.registerCSS("callout", SidebarCSS);
  } catch (error) {
    const response = await fetch("https://raw.githubusercontent.com/browneyedsoul/RemNote-Sidebar-Enhancer/main/src/snippet.css");
    const text = await response.text();
    SidebarCSS = text;
    console.log("Sidebar Enhancer Installed from cdn");
    await plugin.app.registerCSS("callout", SidebarCSS);
  }
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
