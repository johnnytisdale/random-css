from io import TextIOWrapper
from typing import List
import json
import os
import sys

# Command line arguments.
json_path: str = sys.argv[1]
enum_path: str = sys.argv[2]
enum_name: str = sys.argv[3]

# Load the JSON.
with open(os.path.join(os.path.dirname(__file__), json_path)) as file:
    values: List[str] = json.load(file)

# Write the TypeScript file.
with open(os.path.join(os.path.dirname(__file__), enum_path), "w") as file:
    file.write(f'enum {enum_name} {{\n')
    for value in values:
        file.write(f'    {value} = "{value}",\n')
    file.write("}\n\n")
    file.write(f'export default {enum_name};')
