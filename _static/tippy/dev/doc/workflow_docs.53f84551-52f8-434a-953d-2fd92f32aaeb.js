selector_to_html = {"a[href=\"#optimizations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Optimizations<a class=\"headerlink\" href=\"#optimizations\" title=\"Permalink to this heading\">#</a></h2><p>The only optimizing we do is utilizing the <a class=\"reference external\" href=\"https://pip.pypa.io/en/stable/cli/pip_cache/\">pip cache</a></p>", "a[href=\"#github-workflow\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Github Workflow<a class=\"headerlink\" href=\"#github-workflow\" title=\"Permalink to this heading\">#</a></h1><p>Documentaion deployment is handled primarily through a github action workflow. By deployment,\nwe really mean the instructions that send our <cite>html</cite> to a public server that can be linked to and\naccessed from any browser.</p><p>The workflow that manages where our <cite>html</cite> files go is <a class=\"reference external\" href=\"https://github.com/peaceiris/actions-gh-pages\">peaceitis\u2019 github action workflow</a></p>", "a[href=\"#releases\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Releases<a class=\"headerlink\" href=\"#releases\" title=\"Permalink to this heading\">#</a></h2><p>Selected branches and tags: Only branches and tags that match your specified name patterns can deploy to the environment.</p><p>If you specify releases/* as a deployment branch or tag rule, only a branch or tag whose name begins with releases/ can deploy to the environment.\n(Wildcard characters will not match /. To match branches or tags that begin with release/ and contain an additional single slash, use release/<em>/</em>.) If you add main as a branch rule, a branch named main can also deploy to the environment`</p>"}
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
