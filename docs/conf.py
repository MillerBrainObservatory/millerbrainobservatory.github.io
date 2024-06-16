import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join("../", "./")))
sys.path.insert(0, os.path.abspath(os.path.join("../", "../")))

project = "MBO Compute"
copyright = '2024, Elizabeth R. Miller Brain Observatory (MBO) | The Rockefeller University. All Rights Reserved.'

source_suffix = {
        '.rst': 'restructuredtext',
        '.md': 'markdown',
        }

exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'exclude']

extensions = [
    "sphinx.ext.autodoc",
    "sphinxcontrib.images",
    "sphinxcontrib.video" ,
    "sphinx.ext.intersphinx",
    "sphinx.ext.napoleon",
    "sphinx.ext.autosectionlabel",
    "numpydoc"
]

# images_config = dict(
#     backend='LightBox2',
#     default_image_width='100%',
#     default_show_title='True',
#     default_group='default'
# )

templates_path = ["_templates"]
html_theme = "sphinx_book_theme"
html_short_title= "MBO Compute Hub"
html_static_path = ["_static"]

html_css_files = ['LBM_docs.css']
html_logo = "MBO_32.png"

# html_theme_options = {
#   "external_links": [
#       {"name": "MBO", "url": "https://mbo.rockefeller.edu"},
#       {"name": "CaImAn-MATLAB", "url": "https://github.com/MillerBrainObservatory/LBM-CaImAn-MATLAB/"},
#       {"name": "CaImAn-Python", "url": "https://github.com/MillerBrainObservatory/LBM-CaImAn-Python/"},
#   ]
# }

# html_theme_options = {
#     "repository_url": "https://github.com/MillerBrainObservatory/millerbrainobservatory.github.io/",
#     "use_repository_button": True,
# }

