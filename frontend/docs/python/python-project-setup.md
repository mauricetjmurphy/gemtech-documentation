---
title: "Python Project Setup"
date: "2024-07-18"
path: "/python/project-setup"
---

# Python Project Setup

## Setup your project directory

Set up the environment:

```
python3 -m venv env
```

Activate the environment:

```
source env/bin/activate
```

Upgrade pip:

```
pip install --upgrade pip
```

Install packages with the requirements.txt file:

```
pip3 install -r requirements.txt
```

If you are starting a new project and don’t have a `requirements.txt`, create one:

```
pip freeze > requirements.txt
```

Create a `.env` file in the root of your project to store all sensitive information:

```
touch .env
```

Install the python env package:

```
pip3 install python-dotenv
```

Add the boilerplate to you `main.py` file (app entry point):

```
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)
```
