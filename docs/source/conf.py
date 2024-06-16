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
    "numpydoc"
]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
html_static_path = ['_static']
html_title = "MBO Compute Hub"
html_logo = "_static/mbo_icon.ico"

# This is a dictionary where the value is a tuple.
# The first link is a link to our "deployed" documentation URL
# The second is a path relative to the local build so sphinx can instead
# map to that location.
intersphinx_mapping = {
    'LBM-CaImAn-MATLAB':
        ('https://github.com/MillerBrainObservatory/LBM-CaImAn-MATLAB/',
            ('../../../LBM-CaImAn-Python/docs/_build/html/objects.inv', None)),
    'LBM-CaImAn-Python':
        ('https://github.com/MillerBrainObservatory/LBM-CaImAn-Python/',
            ('../../../LBM-CaImAn-MATLAB/docs/_build/html/objects.inv', None)),
}

html_use_modindex = False
html_use_index = False

# html_theme_options = {
#     "repository_url": "https://github.com/MillerBrainObservatory/millerbrainobservatory.github.io",
#      "repository_branch": "master",
#      "path_to_docs": "docs/",
#      "use_repository_button": True,
#      "use_issues_button": True
# }

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
