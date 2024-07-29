selector_to_html = {"a[href=\"#frame-ordering\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Frame Ordering<a class=\"headerlink\" href=\"#frame-ordering\" title=\"Permalink to this heading\">#</a></h2><p>ScanImage saves the 4D volume with each plane interleaved, e.g.</p>", "a[href=\"#exploring-lbm-datasets\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exploring LBM Datasets<a class=\"headerlink\" href=\"#exploring-lbm-datasets\" title=\"Permalink to this heading\">#</a></h1><p>ScanImage <a class=\"reference external\" href=\"https://docs.scanimage.org/Premium+Features/Multiple+Region+of+Interest+(MROI).html\">mROI (Multi Region Of Interest)</a> outputs raw <code class=\"docutils literal notranslate\"><span class=\"pre\">.tiff</span></code> files made up of individual <code class=\"docutils literal notranslate\"><span class=\"pre\">Regions</span> <span class=\"pre\">of</span> <span class=\"pre\">Interest</span> <span class=\"pre\">(ROI's)</span></code>.\nIn the raw output, these <code class=\"docutils literal notranslate\"><span class=\"pre\">ROIs</span></code> are vertically concatenated independent of their actual scan locations.\nThe location of each ROI is stored as a pixel coordinate used internally by the respective pipeline to orient each strip.</p>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#scanimage-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">ScanImage metadata<a class=\"headerlink\" href=\"#scanimage-metadata\" title=\"Permalink to this heading\">#</a></h2><p>Each pipeline comes stocked with methods to retrieve imaging metadata.</p>", "a[href=\"../index.html#scanreader\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">scanreader<a class=\"headerlink\" href=\"#scanreader\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#terms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Terms<a class=\"headerlink\" href=\"#terms\" title=\"Permalink to this heading\">#</a></h2><p>Light-beads microscopy is a 2-photon imaging paradigm based on <a class=\"reference external\" href=\"https://docs.scanimage.org/index.html\">ScanImage</a> acquisition software.</p><p>In its raw form, data is saved as a 3-dimensional multi-page tiff file. Each image within this tiff file represents a page of the original document.</p>"}
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
