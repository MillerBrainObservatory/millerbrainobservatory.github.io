selector_to_html = {"a[href=\"#adding-docs\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Adding Docs<a class=\"headerlink\" href=\"#adding-docs\" title=\"Permalink to this heading\">#</a></h1><p>TODO: A quick document to reference for somebody wanting to add a quick document\npage to this repository.</p><p>This is the convention used for Python docs:</p>", "a[href=\"#title\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Title<a class=\"headerlink\" href=\"#title\" title=\"Permalink to this heading\">#</a></h2><p>Titles are underlined (or over- and underlined) with\na nonalphanumeric character at least as long as the\ntext.</p><p>A lone top-level section is lifted up to be the\ndocument\u2019s title.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
