selector_to_html = {"a[href=\"#filesystem\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1. </span>Filesystem<a class=\"headerlink\" href=\"#filesystem\" title=\"Permalink to this heading\">#</a></h2><p>!Note: Both workstation and compute file-systems are <em>NOT</em> backed up. Users should have a backup of all data on their own system.</p><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">D:</span></code> drive is <strong>read-only</strong> and contains</p>", "a[href=\"#miniforge3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.2.1. </span>miniforge3<a class=\"headerlink\" href=\"#miniforge3\" title=\"Permalink to this heading\">#</a></h3><p>Each user account has its own <code class=\"docutils literal notranslate\"><span class=\"pre\">Miniforge3</span></code> installation at <code class=\"docutils literal notranslate\"><span class=\"pre\">C:/Users/miniforge3</span></code>.</p><p>This is your environment to install and reinstall as you please. <em>DO NOT</em> install any software in the base environment as that will cause conflicts between all installed environments and require a reinstallation of miniforge3.</p>", "a[href=\"#matlab\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.2.2. </span>MATLAB<a class=\"headerlink\" href=\"#matlab\" title=\"Permalink to this heading\">#</a></h3><p>Each user account has an installation of MATLAB.</p>", "a[href=\"#server-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2. </span>Server Guide<a class=\"headerlink\" href=\"#server-guide\" title=\"Permalink to this heading\">#</a></h1><p>As a user of MBO servers you will be given a login and a password to on a Windows Server 2022 desktop to be used with windows remote desktop.\nThis login will give you access to all of the resources of that server, shared with a limited number of other users.</p>", "a[href=\"#software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.2. </span>Software<a class=\"headerlink\" href=\"#software\" title=\"Permalink to this heading\">#</a></h2><h3><span class=\"section-number\">2.2.1. </span>miniforge3<a class=\"headerlink\" href=\"#miniforge3\" title=\"Permalink to this heading\">#</a></h3><p>Each user account has its own <code class=\"docutils literal notranslate\"><span class=\"pre\">Miniforge3</span></code> installation at <code class=\"docutils literal notranslate\"><span class=\"pre\">C:/Users/miniforge3</span></code>.</p><p>This is your environment to install and reinstall as you please. <em>DO NOT</em> install any software in the base environment as that will cause conflicts between all installed environments and require a reinstallation of miniforge3.</p>", "a[href=\"#other-software\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.2.3. </span>Other Software<a class=\"headerlink\" href=\"#other-software\" title=\"Permalink to this heading\">#</a></h3>"}
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
