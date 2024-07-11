# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'MBO Compute Hub'
copyright = '2024, Flynn OConnell'
author = 'Flynn OConnell'
release = '1.0.0'

extensions = [
    "sphinx.ext.autodoc",
    "sphinxcontrib.images",
    "sphinxcontrib.video" ,
    "sphinx.ext.intersphinx",
    "sphinx.ext.napoleon",
    "sphinx.ext.autosectionlabel",
    "numpydoc",
    'sphinx.ext.mathjax',
    'sphinx_design',
    "sphinx_inline_tabs",
    "myst_parser"
]

exclude_patterns = ['Thumbs.db', '.DS_Store', '.git', 'exclude']
myst_enable_extensions = [ "colon_fence", "html_image"]
sphinx_tabs_disable_tab_closing = True

source_suffix = {
    '.rst': 'restructuredtext',
    '.ipynb': 'myst-nb',
    '.myst': 'myst-nb',
}

images_config = { "default_show_title": True }

# List of documents that shouldn't be included in the build.
#unused_docs = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output
templates_path = ["_templates"]

# A shorter title for the navigation bar.  Default is the same as html_title.
html_favicon = "_static/mbo.png"
html_theme = 'sphinx_book_theme'
html_title = "MBO Compute Hub"
html_logo = "_static/MillerBrainObservatory_logo.png"
html_short_title = "MBO"
html_static_path = ['_static']
html_last_updated_fmt = '%b %d, %Y'
html_css_files = ["custom.css"]
html_context = {"default_mode": "dark"}
html_file_suffix = '.html'

intersphinx_mapping = {
    'MBO': ('https://millerbrainobservatory.github.io/index.html/', None),
    'LBMmat': ('https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/index.html',None),
    'LBMpy': ('https://millerbrainobservatory.github.io/LBM-CaImAn-Python/index.html', None),
}

# intersphinx_disabled_reftypes = ["*"]

html_theme_options = {
    "path_to_docs": "docs",
    "external_links": [
        {"name": "MBO Team", "url": "https://mbo.rockefeller.edu/"},
        {"name": "LBM - CaImAn.Mat", "url": "https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/index.html"},
        {"name": "LBM - CaImAn.Py", "url": "https://millerbrainobservatory.github.io/LBM-CaImAn-Python/index.html"},
    ],
    # "icon_links": [
    #     {
    #         "name": "MBO",
    #         "url": "https://mbo.rockefeller.edu",
    #         "icon": "_static/mbo.png",
    #         "type": "local",
    #     },
    #     {
    #         "name": ".mat",
    #         "url": "https://github.com/MillerBrainObservatory/LBM-CaImAn-MATLAB/",
    #         "icon": "https://raw.githubusercontent.com/pydata/pydata-sphinx-theme/main/docs/_static/pandas-square.svg",
    #         "type": "local",
    #     },
    # ],
    "navbar_start": ["search-button"],
    "navbar_end": ["navbar-nav"],
    "navbar_align": "right",
    "header_links_before_dropdown": 2
}

