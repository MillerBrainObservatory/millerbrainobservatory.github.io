# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'MBO'
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
default_role = "autolink"
source_suffix = '.rst'


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_static_path = ['_static']
# html_use_modindex = False
# html_use_index = False

# A shorter title for the navigation bar.  Default is the same as html_title.
html_short_title = "MBO"

# The name of an image file (relative to this directory) to place at the top
# of the sidebar.
html_logo = "MBO_32.png"

# The name of an image file (relative to this directory) to use as a favicon of
# the docs.  This file should be a Windows icon file (.ico) being 16x16 or 32x32
# pixels large.
html_favicon = "_static/mbo_icon.ico"

html_theme = 'pydata_sphinx_theme'
html_title = "MBO Compute Hub"
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
    'lbm_cm': ('https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/', None),
    'lbm_cp': ('https://millerbrainobservatory.github.io/LBM-CaImAn-Python/', None)

}

intersphinx_disabled_reftypes = ["*"]

# html_theme_options = {
#     "repository_url": "https://github.com/MillerBrainObservatory/millerbrainobservatory.github.io",
#      "repository_branch": "master",
#      "path_to_docs": "docs/",
#      "use_repository_button": True,
#      "use_issues_button": True
# }

html_theme_options = {
    "logo": {
        "image_light": "_static/mbo.png",
        "image_dark": "_static/mbo.png",
    },
    "github_url": "https://github.com/MillerBrainObservatory/millerbrainobservatory.github.io",
    "collapse_navigation": True,
    "external_links": [
        {"name": "Homepage", "url": "https://mbo.rockefeller.edu/"},
    ],
    "header_links_before_dropdown": 6,
    "navbar_end": [
        "search-button",
        "theme-switcher",
        "version-switcher",
        "navbar-icon-links"
    ],
    "navbar_persistent": [],
}


# html_theme_options = {
#     "external_links": [
#         {"name": "MBO",  "url": "https://mbo.rockefeller.edu"},
#     ],
#     "github_url": "https://github.com/MillerBrainObservatory",
#     "navbar_align": "left",
#     "navbar_end": ["navbar-icon-links"],
#     "navbar_start": ["navbar-logo"],
#     "show_nav_level": 2,
#     "show_toc_level": 1,
#     "use_edit_page_button": False,
#     "header_links_before_dropdown": 8,
# }

# html_sidebars = {
#     "index": [],
#     "pipelines/**": ["search-field.html", "sidebar-nav-bs.html"],
#     "user_guide/**": ["search-field.html", "sidebar-nav-bs.html"],
# }


templates_path = ["_templates"]
