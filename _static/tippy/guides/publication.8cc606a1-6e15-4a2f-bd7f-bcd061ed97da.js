selector_to_html = {"a[href=\"#extraction-and-deconvolution\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Extraction and Deconvolution<a class=\"headerlink\" href=\"#extraction-and-deconvolution\" title=\"Permalink to this heading\">#</a></h2><p>Get final flourescent signal.</p><p>Skipping lots of math.</p>", "a[href=\"#deconvolution\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Deconvolution<a class=\"headerlink\" href=\"#deconvolution\" title=\"Permalink to this heading\">#</a></h2><h3>Neuropil<a class=\"headerlink\" href=\"#neuropil\" title=\"Permalink to this heading\">#</a></h3><p>(a) Example cell (blue) and neuropil areas (red-shaded annuli) superimposed on the variance image (white), for an\nimaging session in superficial V1. The neuropil signal is defined as the signal inside the red-shaded annuli but not in\nany detected ROIs.</p>", "a[href=\"#suite2p-beyond-10-000-neurons-with-standard-two-photon-microscopy\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Suite2p: beyond 10,000 neurons with standard two-photon microscopy<a class=\"headerlink\" href=\"#suite2p-beyond-10-000-neurons-with-standard-two-photon-microscopy\" title=\"Permalink to this heading\">#</a></h1><p>Some main takeaways from the publication.</p>", "a[href=\"#benchmark-vs-cnmf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Benchmark vs CNMF<a class=\"headerlink\" href=\"#benchmark-vs-cnmf\" title=\"Permalink to this heading\">#</a></h2><p><strong>Dataset: <code class=\"docutils literal notranslate\"><span class=\"pre\">[5000x512x512]</span></code></strong> with 64GB RAM</p>", "a[href=\"#registration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Registration<a class=\"headerlink\" href=\"#registration\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#roi-detection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">ROI Detection<a class=\"headerlink\" href=\"#roi-detection\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#neuropil\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Neuropil<a class=\"headerlink\" href=\"#neuropil\" title=\"Permalink to this heading\">#</a></h3><p>(a) Example cell (blue) and neuropil areas (red-shaded annuli) superimposed on the variance image (white), for an\nimaging session in superficial V1. The neuropil signal is defined as the signal inside the red-shaded annuli but not in\nany detected ROIs.</p>", "a[href=\"#steps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Steps<a class=\"headerlink\" href=\"#steps\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#suite2p-classifier\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Suite2p classifier<a class=\"headerlink\" href=\"#suite2p-classifier\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#claims\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Claims:<a class=\"headerlink\" href=\"#claims\" title=\"Permalink to this heading\">#</a></h2>"}
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
