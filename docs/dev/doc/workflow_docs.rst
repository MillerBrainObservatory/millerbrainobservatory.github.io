
Github Workflow
=======================

Documentaion deployment is handled primarily through a github action workflow. By deployment,
we really mean the instructions that send our `html` to a public server that can be linked to and
accessed from any browser.

The workflow that manages where our `html` files go is `peaceitis' github action workflow <https://github.com/peaceiris/actions-gh-pages>`_

Releases
-------------

Selected branches and tags: Only branches and tags that match your specified name patterns can deploy to the environment.

If you specify releases/* as a deployment branch or tag rule, only a branch or tag whose name begins with releases/ can deploy to the environment.
(Wildcard characters will not match /. To match branches or tags that begin with release/ and contain an additional single slash, use release/*/*.) If you add main as a branch rule, a branch named main can also deploy to the environment`

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

