const fs = require("fs");
const path = require("path");

const plugins = [];
const pluginsDir = path.join(__dirname, "plugins");
const pluginsJson = path.join(__dirname, "plugins.json");

fs.readdirSync(pluginsDir).forEach((dir) => {
    const pluginJson = path.join(pluginsDir, dir, "plugin.json");

    try {
        const plugin = JSON.parse(fs.readFileSync(pluginJson));
        plugins.push(plugin);
    } catch (error) {
        console.log(`[!] Error in ${pluginJson}`);
        console.log(error);
    }
});

fs.writeFileSync(pluginsJson, JSON.stringify(plugins));