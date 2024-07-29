selector_to_html = {"a[href=\"#load-lbm-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Load LBM data<a class=\"headerlink\" href=\"#load-lbm-data\" title=\"Permalink to this heading\">#</a></h2><p>To open your dataset:</p>", "a[href=\"#intensity\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Intensity<a class=\"headerlink\" href=\"#intensity\" title=\"Permalink to this heading\">#</a></h3><p>You may also notice that the</p><p>The brightness differences between these planes can be auto-scaled via Image&gt;Process&gt;Scale (or control-shift-x) to bring up the intensity toolbar</p>", "a[href=\"#plugins\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Plugins<a class=\"headerlink\" href=\"#plugins\" title=\"Permalink to this heading\">#</a></h3><p>TODO!</p>", "a[href=\"#imagej-fiji\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">ImageJ / FIJI<a class=\"headerlink\" href=\"#imagej-fiji\" title=\"Permalink to this heading\">#</a></h1><p>Fiji is a version of ImageJ with \u201cbatteries included\u201d. To us, this includes several HDF5/Bioformat libraries that will help load our <cite>.tiff</cite> files.</p><p>Download Fiji for your platform <a class=\"reference external\" href=\"https://imagej.net/software/fiji/downloads\">here</a>.</p>", "a[href=\"#more-tips\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">More Tips<a class=\"headerlink\" href=\"#more-tips\" title=\"Permalink to this heading\">#</a></h2><h3>Intensity<a class=\"headerlink\" href=\"#intensity\" title=\"Permalink to this heading\">#</a></h3><p>You may also notice that the</p><p>The brightness differences between these planes can be auto-scaled via Image&gt;Process&gt;Scale (or control-shift-x) to bring up the intensity toolbar</p>", "a[href=\"#stacks-slice-manipulation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Stacks/Slice Manipulation<a class=\"headerlink\" href=\"#stacks-slice-manipulation\" title=\"Permalink to this heading\">#</a></h3><p>There are a host of other manipulations you can do to Z-stacks. Below is a general diagram illustrating the main core features without needing additional plugins.</p>"}
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
