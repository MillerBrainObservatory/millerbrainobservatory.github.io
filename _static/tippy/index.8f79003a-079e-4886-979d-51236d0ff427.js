selector_to_html = {"a[href=\"guides/mbo_datasets.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">MBO Datasets<a class=\"headerlink\" href=\"#mbo-datasets\" title=\"Link to this heading\">#</a></h1><p>This guide describes data acquired at the Miller Brain Observatory using <a class=\"reference external\" href=\"https://docs.scanimage.org/index.html\">ScanImage</a> and light-sheet microscopy systems.</p>", "a[href=\"guides/mbo_servers.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Server Guide<a class=\"headerlink\" href=\"#server-guide\" title=\"Link to this heading\">#</a></h1><p>As a user of MBO servers, you will be given a login to MBO servers, which will give you access to the servers.</p>", "a[href=\"#mbo-compute-hub\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">MBO Compute Hub<a class=\"headerlink\" href=\"#mbo-compute-hub\" title=\"Link to this heading\">#</a></h1><p class=\"nav-links\">\n<a href=\"guides/mbo_datasets.html\"><b>Datasets</b></a> \u00b7\n<a href=\"guides/mbo_servers.html\"><b>Server Guide</b></a> \u00b7\n<a href=\"guides/venvs.html\"><b>Python Environments</b></a> \u00b7\n<a href=\"guides/hpc.html\"><b>HPC</b></a>\n</p><p class=\"tagline\">Tutorials, guides and resources to process MBO datasets.</p>", "a[href=\"#external-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">External Resources<a class=\"headerlink\" href=\"#external-resources\" title=\"Link to this heading\">#</a></h2><p><strong>Microscopy and Imaging</strong></p>", "a[href=\"guides/venvs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Virtual Environments<a class=\"headerlink\" href=\"#virtual-environments\" title=\"Link to this heading\">#</a></h1><p>This guide covers managing python environments with <a class=\"reference external\" href=\"https://docs.astral.sh/uv/\">UV</a> and <a class=\"reference external\" href=\"https://docs.conda.io/projects/conda/en/stable/user-guide/getting-started.html\">conda</a>.</p>", "a[href=\"guides/hpc.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Working on HPC<a class=\"headerlink\" href=\"#working-on-hpc\" title=\"Link to this heading\">#</a></h1><p>This guide explains how to transfer data from a MBO workstation to your labs HPC space.</p><p>See the <a class=\"reference external\" href=\"https://hpc.rockefeller.edu/\">Rockefeller HPC documentation</a>, specifically the <a class=\"reference external\" href=\"https://hpc.rockefeller.edu/guides/\">user guides</a> for more information.</p>", "a[href=\"#pipelines-and-tools\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pipelines and Tools<a class=\"headerlink\" href=\"#pipelines-and-tools\" title=\"Link to this heading\">#</a></h2><p class=\"grid-caption\">Primary pipelines \u2014 recommended starting point for new users.</p>"}
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
