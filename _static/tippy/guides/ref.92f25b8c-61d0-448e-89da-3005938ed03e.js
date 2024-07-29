selector_to_html = {"a[href=\"#params\"]": "<figure class=\"align-default\" id=\"params\">\n<a class=\"reference internal image-reference\" href=\"../_images/gen_param_v_arg.png\"><img alt=\"Param Image\" src=\"../_images/gen_param_v_arg.png\" style=\"width: 264.0px; height: 120.0px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Function Parameters</span><a class=\"headerlink\" href=\"#params\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#asset-reference\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Asset Reference<a class=\"headerlink\" href=\"#asset-reference\" title=\"Permalink to this heading\">#</a></h1><p>A place to put rendered content to allow tooltips to render images within the tooltip.</p>"}
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
