selector_to_html = {"a[href=\"#scanimage-metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.4. </span>ScanImage metadata<a class=\"headerlink\" href=\"#scanimage-metadata\" title=\"Permalink to this heading\">#</a></h2><p>Each pipeline comes stocked with methods to retrieve imaging metadata.</p>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.1. </span>Metadata<a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#terms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.2. </span>Terms<a class=\"headerlink\" href=\"#terms\" title=\"Permalink to this heading\">#</a></h2><p>In its raw form, data is saved as a 3-dimensional multi-page tiff file. Each image within this tiff file represents a page of the original document.</p>", "a[href=\"#exploring-lbm-datasets\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Exploring LBM Datasets<a class=\"headerlink\" href=\"#exploring-lbm-datasets\" title=\"Permalink to this heading\">#</a></h1><p>Light-beads microscopy is a 2-photon imaging paradigm based on <a class=\"reference external\" href=\"https://docs.scanimage.org\">ScanImage</a> acquisition software.</p>", "a[href=\"#frame-ordering\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.3. </span>Frame Ordering<a class=\"headerlink\" href=\"#frame-ordering\" title=\"Permalink to this heading\">#</a></h2><p>ScanImage saves the 4D volume with each plane interleaved, e.g.</p>"}
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
