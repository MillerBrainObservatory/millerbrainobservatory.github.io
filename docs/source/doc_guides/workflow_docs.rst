
Github Workflow
===================

Documentaion deployment is handled primarily through a github action workflow. By deployment,
we really mean the instructions that send our `html` to a public server that can be linked to and
accessed from any browser.

Optimizations
---------------

The only optimizing we do is utilizing the `pip cache <https://pip.pypa.io/en/stable/cli/pip_cache/>`_

.. code-block:: yaml

    - name: Upgrade pip

    - run: |
      python3 -m pip install --upgrade pip

    - name: Get pip cache dir
      id: pip-cache
      run: echo "dir=$(pip cache dir)" >> $GITHUB_OUTPUT

    - name: Cache dependencies
      uses: actions/cache@v3
      with:
      path: ${{ steps.pip-cache.outputs.dir }}
      key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
      restore-keys: |
      ${{ runner.os }}-pip-

