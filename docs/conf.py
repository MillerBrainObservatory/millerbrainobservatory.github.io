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

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

exclude_patterns = ['Thumbs.db', '.DS_Store']
myst_enable_extensions = [
    "amsmath",
    "colon_fence",
    "deflist",
    "dollarmath",
    "html_image",
]
myst_url_schemes = ("http", "https", "mailto")

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
    'myst_parser'
]

source_suffix = {
        '.rst': 'restructuredtext',
        '.md': 'markdown',
        }

# List of documents that shouldn't be included in the build.
#unused_docs = []


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_static_path = ['_static']
# html_use_modindex = False
# html_use_index = False

# A shorter title for the navigation bar.  Default is the same as html_title.
html_title = "Miller Brain Observatory"

# The name of an image file (relative to this directory) to place at the top
# of the sidebar.
html_logo = "_images/MillerBrainObservatory_logo.svg"

# The name of an image file (relative to this directory) to use as a favicon of
# the docs.  This file should be a Windows icon file (.ico) being 16x16 or 32x32
# pixels large.
html_favicon = "_static/mbo.png"
html_theme = 'sphinx_book_theme'
html_title = "MBO Compute Hub"
html_logo = "_static/MillerBrainObservatory_logo.png"
html_short_title = "MBO"
html_static_path = ['_static']
html_last_updated_fmt = '%b %d, %Y'
html_css_files = ["custom.css"]
html_context = {"default_mode": "dark"}
html_sidebars = {
    "**": ["icon-links.html"]
}
html_file_suffix = '.html'

# This is a dictionary where the value is a tuple.
# The first link is a link to our "deployed" documentation URL
# The second is a path relative to the local build so sphinx can instead
# map to that location.

intersphinx_mapping = {
    'python': ('https://docs.python.org/3.5', None),
    'scipy': ('https://docs.scipy.org/doc/scipy', None),
    'matplotlib': ('https://matplotlib.org/stable', None),
    'LBMmat': ('https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/',None),
    'LBMpy': ('https://millerbrainobservatory.github.io/LBM-CaImAn-Python/', None)
}

# intersphinx_disabled_reftypes = ["*"]

html_theme_options = {
    # "path_to_docs": "docs",
    "github_url": "https://github.com/MillerBrainObservatory/millerbrainobservatory.github.io",
    "external_links": [
        {"name": "MBO", "url": "https://mbo.rockefeller.edu/"},
        {"name": "LBM (Mat)", "url": "https://github.com/MillerBrainObservatory/LBM-CaImAn-MATLAB/"},
        {"name": "Py", "url": "https://github.com/MillerBrainObservatory/LBM-CaImAn-Python/"},
        {"name": "scanreader", "url": "https://github.com/MillerBrainObservatory/scanreader/"},
    ],
    "show_toc_level": 3,
    "show_nav_level": 2,
    "navigation_depth": 4
}

templates_path = ["_templates"]
