#!/usr/bin/env python
"""Build documentation by cleaning and rebuilding with Sphinx."""
import shutil
import subprocess
import sys
from pathlib import Path


def main():
    """Clean and build the documentation."""
    docs_dir = Path(__file__).parent.parent / "docs"
    build_dir = docs_dir / "_build"

    print("Cleaning documentation build...")
    if build_dir.exists():
        shutil.rmtree(build_dir)
    print("Cleaned _build directory")

    print("\nBuilding documentation...")
    result = subprocess.run(
        [sys.executable, "-m", "sphinx", "-b", "html", str(docs_dir), str(build_dir / "html")],
        cwd=docs_dir,
        capture_output=False,
    )

    if result.returncode != 0:
        print("Failed to build docs")
        sys.exit(1)

    print("\n[SUCCESS] Documentation built successfully!")
    print(f"Open: {build_dir / 'html' / 'index.html'}")


if __name__ == "__main__":
    main()
