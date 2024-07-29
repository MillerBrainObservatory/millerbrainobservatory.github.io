selector_to_html = {"a[href=\"#development-environments\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Development environments<a class=\"headerlink\" href=\"#development-environments\" title=\"Permalink to this heading\">#</a></h2><h3>Update Docs<a class=\"headerlink\" href=\"#update-docs\" title=\"Permalink to this heading\">#</a></h3><p>The workflow to update documentation is pretty simple.</p>", "a[href=\"#submodules\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Submodules<a class=\"headerlink\" href=\"#submodules\" title=\"Permalink to this heading\">#</a></h4><p>If you used <cite>git</cite> to install any pipelines, you should also update the git submodules that contain\nadditional parts required for building the documentation:</p>", "a[href=\"#update-docs\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Update Docs<a class=\"headerlink\" href=\"#update-docs\" title=\"Permalink to this heading\">#</a></h3><p>The workflow to update documentation is pretty simple.</p>", "a[href=\"#building-mbo-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Building MBO Documentation<a class=\"headerlink\" href=\"#building-mbo-documentation\" title=\"Permalink to this heading\">#</a></h1><h2>Development environments<a class=\"headerlink\" href=\"#development-environments\" title=\"Permalink to this heading\">#</a></h2><h3>Update Docs<a class=\"headerlink\" href=\"#update-docs\" title=\"Permalink to this heading\">#</a></h3><p>The workflow to update documentation is pretty simple.</p>", "a[href=\"#build-docs-locally\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build Docs Locally<a class=\"headerlink\" href=\"#build-docs-locally\" title=\"Permalink to this heading\">#</a></h2><p>Now you are ready to generate the docs, so write:</p>", "a[href=\"#troubleshooting-docs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Troubleshooting Docs<a class=\"headerlink\" href=\"#troubleshooting-docs\" title=\"Permalink to this heading\">#</a></h2><p><strong>Docs look good locally, 404 on site</strong></p><p>when docs look good locally but bad online, there is an issue with the github workflow.\nOn <cite>github.com/repository</cite> go to the <cite>Actions</cite> tab. The most recent deployment should be shown with a red X. Click on this X to see the error logs.\nThis is generally an issue with <cite>docs/requirements.txt</cite>. This document holds the dependencies to build documentation, and since our project builds locally and not\nonline, this is the usual suspect. The output of the github actions will tell you:</p>"}
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
