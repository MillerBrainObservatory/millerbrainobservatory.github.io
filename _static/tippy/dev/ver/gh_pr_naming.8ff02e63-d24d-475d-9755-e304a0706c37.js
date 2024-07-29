selector_to_html = {"a[href=\"#merging-the-pr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Merging the PR<a class=\"headerlink\" href=\"#merging-the-pr\" title=\"Permalink to this heading\">#</a></h2><p>For maintainablility, we should adopt a <code class=\"docutils literal notranslate\"><span class=\"pre\">Squash</span> <span class=\"pre\">&amp;</span> <span class=\"pre\">Merge</span></code> policy which results in the entire PR being a single commit on the <code class=\"docutils literal notranslate\"><span class=\"pre\">master</span></code> commit history.\nThus individual commit names (which can get very ugly and convoluted) are not important, but can be very helpful for more detailed context if ever needed.</p>", "a[href=\"#naming-the-pr\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Naming the PR<a class=\"headerlink\" href=\"#naming-the-pr\" title=\"Permalink to this heading\">#</a></h1><p>The name of a PR is important, because it will eventually become the commit that shows up in <code class=\"docutils literal notranslate\"><span class=\"pre\">main</span></code>. Here are the guidelines for how to name a PR.</p><p>PR name:</p>", "a[href=\"#keyword\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Keyword<a class=\"headerlink\" href=\"#keyword\" title=\"Permalink to this heading\">#</a></h2><p>The keyword should be the first thing in the name, to let everyone know what kind of change the PR is. Here is a table of the standard keywords, and what they mean:</p>", "a[href=\"#issue-number\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Issue Number<a class=\"headerlink\" href=\"#issue-number\" title=\"Permalink to this heading\">#</a></h2><p>Following the keyword is the issue number - this is the issue the ticket addresses. It is formatted as: <code class=\"docutils literal notranslate\"><span class=\"pre\">FIX-XXXX</span></code> where XXXX is the issue number/link (this can be copied from the URL).</p>"}
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
