selector_to_html = {"a[href=\"#image-gallery\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Image Gallery<a class=\"headerlink\" href=\"#image-gallery\" title=\"Permalink to this heading\">#</a></h1><p>A place to put rendered content to allow tooltips to render images within the tooltip.</p>", "a[href=\"#ex-deinterleave\"]": "<figure class=\"align-default\" id=\"ex-deinterleave\">\n<img alt=\"ex_deinterleave\" src=\"_images/ex_deinterleave.svg\"/><figcaption>\n<p><span class=\"caption-text\">De-interleave Z-Planes</span><a class=\"headerlink\" href=\"#ex-deinterleave\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#params\"]": "<figure class=\"align-default\" id=\"params\">\n<a class=\"reference internal image-reference\" href=\"_images/gen_param_v_arg.png\"><img alt=\"Param Image\" src=\"_images/gen_param_v_arg.png\" style=\"width: 264.0px; height: 120.0px;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Function Parameters</span><a class=\"headerlink\" href=\"#params\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#multipage-tiff\"]": "<figure class=\"align-default\" id=\"multipage-tiff\">\n<img alt=\"Multipage Tiff\" src=\"_images/gen_array_page.gif\"/>\n<figcaption>\n<p><span class=\"caption-text\">MultiPage Tiff</span><a class=\"headerlink\" href=\"#multipage-tiff\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
