selector_to_html = {"a[href=\"#blog-posts\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Blog Posts<a class=\"headerlink\" href=\"#blog-posts\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#external-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">External Resources<a class=\"headerlink\" href=\"#external-resources\" title=\"Permalink to this heading\">#</a></h2><h3>Algorithms and pipelines<a class=\"headerlink\" href=\"#algorithms-and-pipelines\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#pipelines\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pipelines<a class=\"headerlink\" href=\"#pipelines\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"guides/mbo_servers.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Server Guide<a class=\"headerlink\" href=\"#server-guide\" title=\"Permalink to this heading\">#</a></h1><p>As a user of MBO servers you will be given a login and a password to a Windows Server 2022 desktop.</p><p>This login will give you access to all of the resources of that server, shared with a limited number of other users.</p>", "a[href=\"#algorithms-and-pipelines\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Algorithms and pipelines<a class=\"headerlink\" href=\"#algorithms-and-pipelines\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#documentation-contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation Contents<a class=\"headerlink\" href=\"#documentation-contents\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#miller-brain-observatory-compute-ecosystem\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Miller Brain Observatory: Compute Ecosystem<a class=\"headerlink\" href=\"#miller-brain-observatory-compute-ecosystem\" title=\"Permalink to this heading\">#</a></h1><p>A hub for tutorials, guides and resources for computational image processing.</p>", "a[href=\"guides/lbm_data.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Light Beads Microscopy Data<a class=\"headerlink\" href=\"#light-beads-microscopy-data\" title=\"Permalink to this heading\">#</a></h1><p>Current Light Beads Microscopy (LBM) data is aquired with ScanImage aquisition software.</p><p>ScanImage <a class=\"reference external\" href=\"https://docs.scanimage.org/Premium+Features/Multiple+Region+of+Interest+(MROI).html\">Multi Region Of Interest (mROI)</a> outputs raw <code class=\"docutils literal notranslate\"><span class=\"pre\">.tiff</span></code> files made up of individual <code class=\"docutils literal notranslate\"><span class=\"pre\">Regions</span> <span class=\"pre\">of</span> <span class=\"pre\">Interest</span> <span class=\"pre\">(ROI's)</span></code>.</p>"}
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
