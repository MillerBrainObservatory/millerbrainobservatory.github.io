selector_to_html = {"a[href=\"#developer-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Developer Guide<a class=\"headerlink\" href=\"#developer-guide\" title=\"Permalink to this heading\">#</a></h1><p>Documentation for this compute hub and the various pipelines are build using the following tools:</p>", "a[href=\"#mbo-technology-stack\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">MBO Technology Stack<a class=\"headerlink\" href=\"#mbo-technology-stack\" title=\"Permalink to this heading\">#</a></h2><p>Choosing a technology stack for a project is subjective and dynamic. The technology that works now\nmay not work as more pipelines are built and included in the documentation. Maintainability is also a concern; your\nrepository is only as maintainable as the team you have to maintain it.</p><p>For these reasons, the list of tools used in the MBO is kept as simple as possible while maintaining effective\ndocumentation and resources. Let <cite>git</cite> handle all tasks and workflows that may have more \u201cmature\u201d alternatives i.e. travisCI, circleCI.\nThis is the motivation against using <a class=\"reference external\" href=\"https://www.ReadTheDocs.org\">ReadTheDocs</a> as <a class=\"reference external\" href=\"https://pages.github.com/\">github-pages</a> has the same\nfunctionality, albeit with a few more lines of code and technical expertise required in handling the <cite>github-workflows</cite>.</p>", "a[href=\"#building-for-pypi\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Building for Pypi<a class=\"headerlink\" href=\"#building-for-pypi\" title=\"Permalink to this heading\">#</a></h2><p>From within the directory of the package you want to build/upload to pypi:</p>", "a[href=\"#contents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Contents<a class=\"headerlink\" href=\"#contents\" title=\"Permalink to this heading\">#</a></h2>"}
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
