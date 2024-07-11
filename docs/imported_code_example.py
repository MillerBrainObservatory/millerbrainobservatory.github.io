from pathlib import Path
import numpy as np
import pandas as pd
import scanreader

# TODO: add demo tiff small enough to put on git lfs
datapath = Path('~/datapath')   # string pointing to directory containing your data
savepath = Path('~/savepath')           # string pointing to directory containing your data

htiffs = [x for x in datapath.glob('*.tif')] # this accumulates a list of every filepath which contains a .tif file
trim_x = (6, 6) # 6 pixels left edge, 6 pixels right edge of **each ROI**
trim_y = (17, 0) # 17 pixels top edge, 0 pixels right edge of **each ROI**
reader = scanreader.read_scan(str(htiffs[0]), join_contiguous=True, lbm=True, x_cut=trim_x, y_cut=(17,0))  # this should take < 2s, no actual data is being read yet

data = reader[:, :, :, 1, 1:300]
data.shape
