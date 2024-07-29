selector_to_html = {"a[href=\"#dev-based-pull-requests\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dev Based Pull Requests<a class=\"headerlink\" href=\"#dev-based-pull-requests\" title=\"Permalink to this heading\">#</a></h2><p>PR\u2019s name should follow <a class=\"reference external\" href=\"https://millerbrainobservatory.github.io/user_guide/gh_pr_naming.html\">PR Naming Guide</a></p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">feature</span></code> PRs</p>", "a[href=\"#dev-branch-process\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dev Branch Process<a class=\"headerlink\" href=\"#dev-branch-process\" title=\"Permalink to this heading\">#</a></h2><p>Dev branch spinoff process:</p>", "a[href=\"#dev-branches-what-why-and-when\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dev Branches: What, Why, and When?<a class=\"headerlink\" href=\"#dev-branches-what-why-and-when\" title=\"Permalink to this heading\">#</a></h1><p><em>adapted from firefox open source contribution guide</em></p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">development</span></code> branches (idiomatically abbreviated <code class=\"docutils literal notranslate\"><span class=\"pre\">dev</span></code>) are simply a branch for working on batches of code being actively worked-on but not yet merged into the code that the general user will be using and that people see when they open the repository on github: <code class=\"docutils literal notranslate\"><span class=\"pre\">master</span></code>.\nThe reason for dev branches is mainly to <strong>avoid large pull-requests (PR)</strong>. Its very important for reviewers to understand and trust every change to the codebase, which small PR\u2019s greatly facilitate.</p>"}
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
