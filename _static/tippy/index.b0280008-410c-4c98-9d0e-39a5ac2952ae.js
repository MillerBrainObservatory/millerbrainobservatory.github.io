selector_to_html = {"a[href=\"#external-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">External Resources<a class=\"headerlink\" href=\"#external-resources\" title=\"Permalink to this heading\">#</a></h2><h3>Microscopy and Imaging<a class=\"headerlink\" href=\"#microscopy-and-imaging\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#blog-posts-and-forums\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Blog Posts and Forums<a class=\"headerlink\" href=\"#blog-posts-and-forums\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#documentation-contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation Contents<a class=\"headerlink\" href=\"#documentation-contents\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"guides/hpc.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Working on HPC<a class=\"headerlink\" href=\"#working-on-hpc\" title=\"Permalink to this heading\">#</a></h1><p>This guide explains how to transfer data from a MBO workstation to your labs HPC space.</p><p>See the <a class=\"reference external\" href=\"https://hpc.rockefeller.edu/\">Rockefeller HPC documentation</a>, specifically the <a class=\"reference external\" href=\"https://hpc.rockefeller.edu/guides/\">user guides</a> for more information.</p>", "a[href=\"#miller-brain-observatory-compute-ecosystem\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Miller Brain Observatory: Compute Ecosystem<a class=\"headerlink\" href=\"#miller-brain-observatory-compute-ecosystem\" title=\"Permalink to this heading\">#</a></h1><p>A hub for tutorials, guides and resources to process MBO datasets.</p>", "a[href=\"guides/mbo_servers.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Server Guide<a class=\"headerlink\" href=\"#server-guide\" title=\"Permalink to this heading\">#</a></h1><p>As a user of MBO servers, you will be given a login to MBO servers, which will give you access to the servers.</p>", "a[href=\"ref.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Image Ref<a class=\"headerlink\" href=\"#image-ref\" title=\"Permalink to this heading\">#</a></h1><p>A place to put rendered content to allow tooltips to render images within the tooltip.</p>", "a[href=\"guides/lbm_data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Light Beads Microscopy<a class=\"headerlink\" href=\"#light-beads-microscopy\" title=\"Permalink to this heading\">#</a></h1><p>This guide describes the data aquired on the <a class=\"reference external\" href=\"https://mbo.rockefeller.edu/tools/#opt-lbm\">optimized</a> or <a class=\"reference external\" href=\"https://mbo.rockefeller.edu/tools/#high-res\">high-res</a> light-beads microscopy (LBM) module.</p><p>Current LBM data is aquired with ScanImage aquisition software.</p>", "a[href=\"glossary.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Glossary<a class=\"headerlink\" href=\"#glossary\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#pipelines\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pipelines<a class=\"headerlink\" href=\"#pipelines\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#microscopy-and-imaging\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Microscopy and Imaging<a class=\"headerlink\" href=\"#microscopy-and-imaging\" title=\"Permalink to this heading\">#</a></h3>"}
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
