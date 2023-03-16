# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.224.2/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
# ARG VARIANT="16-bullseye"
# FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

FROM ubuntu:22.04

RUN apt-get update && apt-get install -y curl git
# RUN apt update && apt install git


RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
     apt-get install -y nodejs &&\
     npm install -g ts-node typescript

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends pandoc texlive texlive-latex-extra texlive-extra-utils \
    && apt-get -y install --no-install-recommends texlive-fonts-extra texlive-bibtex-extra python3-pygments \
    && apt-get -y install --no-install-recommends biber latexmk procps locales \
    && apt-get -y install --no-install-recommends graphviz racket \
    && apt-get -y install software-properties-common

RUN apt-add-repository ppa:swi-prolog/stable -y \
    && apt-get -y install swi-prolog \
    && rm -rf /var/lib/apt/lists/*

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm i -g ts-node typescript"


# generating locales
RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    dpkg-reconfigure --frontend=noninteractive locales && \
    update-locale LANG=en_US.UTF-8
ENV LANGUAGE=en_US.UTF-8 LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
ENV TZ="Asia/Jerusalem"

# installing cpanm & missing latexindent dependencies
RUN apt-get update && apt-get -y install make
RUN curl -L http://cpanmin.us | perl - --self-upgrade && \
    cpanm Log::Dispatch::File YAML::Tiny File::HomeDir

RUN useradd -ms /bin/bash bguppl
USER bguppl
WORKDIR /home/bguppl