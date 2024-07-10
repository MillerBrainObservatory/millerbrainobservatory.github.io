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

extensions = [
    "sphinx.ext.autodoc",
    "sphinxcontrib.images",
    "sphinxcontrib.video" ,
    "sphinx.ext.intersphinx",
    "sphinx.ext.napoleon",
    "sphinx.ext.autosectionlabel",
    "numpydoc",
    'sphinx.ext.mathjax',
    'sphinx_design'
]


# List of documents that shouldn't be included in the build.
#unused_docs = []

# The reST default role (used for this markup: `text`) to use for all documents.
source_suffix = '.rst'

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
html_css_files = ["numpy.css"]
html_context = {"default_mode": "dark"}
html_use_modindex = True
html_copy_source = False
html_domain_indices = False
html_file_suffix = '.html'

# This is a dictionary where the value is a tuple.
# The first link is a link to our "deployed" documentation URL
# The second is a path relative to the local build so sphinx can instead
# map to that location.

intersphinx_mapping = {
    'python': ('https://docs.python.org/3.5', None),
    'sphinx': ('http://www.sphinx-doc.org/en/stable/', None),
    'scipy': ('https://docs.scipy.org/doc/scipy', None),
    'matplotlib': ('https://matplotlib.org/stable', None),
    'numpydoc': ('https://numpydoc.readthedocs.io/en/latest', None),
    'numpy-tutorials': ('https://numpy.org/numpy-tutorials', None),
    'LBMmat': ('https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/', None),
    'LBMpy': ('https://millerbrainobservatory.github.io/LBM-CaImAn-Python/', None)
}

intersphinx_disabled_reftypes = ["*"]

html_theme_options = {
    # "path_to_docs": "docs",
    "github_url": "https://github.com/MillerBrainObservatory/millerbrainobservatory.github.io",
    "external_links": [
        {"name": "MBO", "url": "https://mbo.rockefeller.edu/"},
        {"name": "LBM (Mat)", "url": "https://github.com/MillerBrainObservatory/LBM-CaImAn-MATLAB/"},
        {"name": "Py", "url": "https://github.com/MillerBrainObservatory/LBM-CaImAn-Python/"},
        {"name": "scanreader", "url": "https://github.com/MillerBrainObservatory/scanreader/"},
    ],
    "navbar_end": [ "navbar-icon-links" ],
    "navbar_persistent": [],
    # "launch_buttons": {
    #     "binderhub_url": "https://mybinder.org",
    #     "colab_url": "https://colab.research.google.com/",
    #     "notebook_interface": "jupyterlab",
    #     # "jupyterhub_url": "", TODO
    # },
    # "use_edit_page_button": True,
    # "use_source_button": True,
    # "use_issues_button": True,
    # "use_repository_button": True,
    # "use_download_button": True,
    "use_sidenotes": True,
    "show_toc_level": 3,
    "use_fullscreen_button": True,
    "show_nav_level": 0,
    "navigation_depth": 4
}

templates_path = ["_templates"]
