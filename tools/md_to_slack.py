#!/usr/bin/env python3
"""
Convert mbo_servers.md to a concise Slack message for first-time server users.

Usage:
    python md_to_slack.py <path_to_mbo_servers.md>
    python md_to_slack.py --print  # Print formatted Slack message
    python md_to_slack.py --copy   # Copy to clipboard (requires pyperclip)
"""

import argparse
import sys
from pathlib import Path


def parse_markdown(md_path: str) -> dict:
    """Parse mbo_servers.md and extract key sections."""
    with open(md_path, "r") as f:
        content = f.read()

    return {
        "raw": content,
    }


def create_slack_message(md_content: str) -> str:
    """
    Create a professional, concise Slack message for first-time server users.

    Uses only Slack-supported Markdown:
    - Blockquotes (>) for sections
    - Backticks for code/paths
    - Asterisks for bold (with WYSIWYG)
    - Dashes for lists
    - Links with pipe syntax
    """

    message = """MBO Server Access Guide

> *Connection*
> RDP clients: Windows (https://aka.ms/RDSetup) | Linux (https://remmina.org/) | macOS (https://www.helpwire.app/)
> Credentials: IP address, username, password

> *Storage*
> `D:/` (read-only): Software, repositories, raw data
> `E:/` (personal): Store results in `E:/ID_USER_DATA/username`

> *Environment Management*
> Python: uv or conda (miniforge3)
> Reference: https://millerbrainobservatory.github.io/mbo_utilities/venvs.html
> Warning: Do not install packages in conda base environment

> *Requirements*
> - Sign out properly after each session
> - Back up your own data (servers are not backed up)
> - No internet browsing on compute servers
> - Contact admins for software requests

Full documentation: https://millerbrainobservatory.github.io/guides/mbo_servers.html
"""

    return message.strip()


def main():
    parser = argparse.ArgumentParser(
        description="Convert mbo_servers.md to a Slack message"
    )
    parser.add_argument(
        "markdown_file",
        nargs="?",
        default=None,
        help="Path to mbo_servers.md",
    )
    parser.add_argument(
        "--print",
        action="store_true",
        help="Print the Slack message",
    )
    parser.add_argument(
        "--copy",
        action="store_true",
        help="Copy to clipboard (requires pyperclip)",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output as JSON (for Slack API integration)",
    )

    args = parser.parse_args()

    # Auto-detect mbo_servers.md if not provided
    if args.markdown_file is None:
        repo_root = Path(__file__).parent.parent
        args.markdown_file = repo_root / "docs" / "guides" / "mbo_servers.md"
        if not args.markdown_file.exists():
            print(
                f"Error: Could not find mbo_servers.md at {args.markdown_file}",
                file=sys.stderr,
            )
            sys.exit(1)

    md_path = Path(args.markdown_file)
    if not md_path.exists():
        print(f"Error: File not found: {md_path}", file=sys.stderr)
        sys.exit(1)

    with open(md_path, "r") as f:
        md_content = f.read()

    slack_message = create_slack_message(md_content)

    if args.json:
        import json
        output = {
            "type": "mrkdwn",
            "text": slack_message,
        }
        print(json.dumps(output, indent=2))
    elif args.copy:
        try:
            import pyperclip
            pyperclip.copy(slack_message)
            print("✓ Slack message copied to clipboard!")
        except ImportError:
            print(
                "Error: pyperclip not installed. Install with: pip install pyperclip",
                file=sys.stderr,
            )
            sys.exit(1)
    else:
        # Default: print to stdout
        print(slack_message)


if __name__ == "__main__":
    main()
