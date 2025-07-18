# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "MBO Compute Hub"
copyright = "2024, Elizabeth R. Miller Brain Observatory | The Rockefeller University. All Rights Reserved"

author = ""
release = "1.0.0"

extensions = [
    "sphinx.ext.autodoc",
    "sphinxcontrib.images",
    "sphinxcontrib.video",
    "sphinx.ext.intersphinx",
    "sphinx.ext.napoleon",
    "sphinx.ext.autosectionlabel",
    "numpydoc",
    "sphinx.ext.mathjax",
    "sphinx_design",
    "myst_parser",
    "sphinx_tippy",
]

exclude_patterns = ["Thumbs.db", ".DS_Store", ".git", "exclude",]
myst_enable_extensions = ["colon_fence", "html_image"]
sphinx_tabs_disable_tab_closing = True

source_suffix = {
    ".rst": "restructuredtext",
    ".ipynb": "myst-nb",
    ".myst": "myst-nb",
}

images_config = {"default_show_title": True}

# List of documents that shouldn't be included in the build.
# unused_docs = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output
templates_path = ["_templates"]
#
# # A shorter title for the navigation bar.  Default is the same as html_title.
html_favicon = "./_static/mbo_hub_saph.svg"
html_theme = "sphinx_book_theme"
html_logo = "./_static/logo_mbo_compute.svg"
html_short_title = "MBO Hub"
html_static_path = ["_static"]
html_css_files = ["custom.css"]
html_context = {"default_mode": "dark"}
html_file_suffix = ".html"

intersphinx_mapping = {
    "lbmmat": ("https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/", None),
    "lbmpy": ("https://millerbrainobservatory.github.io/LBM-CaImAn-Python/", None),
    "mbo": (
        "https://millerbrainobservatory.github.io/",
        None,
    ),
}

intersphinx_disabled_reftypes = ["*"]
html_theme_options = {
    "external_links": [
        {
            "name": "CaImAn [matlab]",
            "url": "https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/index.html",
        },
        {
            "name": "CaImAn [python]",
            "url": "https://millerbrainobservatory.github.io/LBM-CaImAn-Python/index.html",
        },
        {
            "name": "Suite2p [python]",
            "url": "https://millerbrainobservatory.github.io/LBM-Suite2p-Python/index.html",
        },
        {
            "name": "utilities [python]",
            "url": "https://millerbrainobservatory.github.io/mbo_utilities/index.html",
        },
    ],
    "icon_links": [
        {
            "name": "Home",
            "url": "https://millerbrainobservatory.github.io/",
            "icon": "fa fa-home",
        },
        {
            "name": "MBO Github",
            "url": "https://github.com/MillerBrainObservatory/",
            "icon": "fa-brands fa-github",
        },
    ],
    # "navbar_persistent": ["search-button"],
    # "header_links_before_dropdown": 1,
}
