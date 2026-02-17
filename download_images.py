#!/usr/bin/env python3
"""
Script to download all images from Google Drive folder
"""
import os
import subprocess
import sys

# Create assets folder if it doesn't exist
assets_folder = "src/assets"
os.makedirs(assets_folder, exist_ok=True)

# Google Drive folder ID
folder_id = "1pOMxDmeR9l21y1-ljpQkAhbUYHgwLwHB"

print("Installing gdown if not already installed...")
subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "gdown"])

print(f"\nDownloading all images from Google Drive folder...")
print(f"Saving to: {assets_folder}\n")

# Download all files from the folder
download_command = f'gdown --folder "https://drive.google.com/drive/folders/{folder_id}" -O {assets_folder} --quiet'
os.system(download_command)

print("\n✅ Download complete! Images saved to src/assets/")
print("\nFiles downloaded:")
for file in sorted(os.listdir(assets_folder)):
    if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
        print(f"  - {file}")
