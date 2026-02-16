FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm
# Install some generally useful tools

#  Install cf CLI v8
# RUN curl -L "https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key" | sudo gpg --dearmor -o /usr/share/keyrings/cli.cloudfoundry.org.gpg
# RUN echo "deb [signed-by=/usr/share/keyrings/cli.cloudfoundry.org.gpg] https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list
# RUN sudo apt-get update
# RUN sudo apt-get install -y cf8-cli

RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl git sqlite3 entr source-highlight libsecret-1-0 dbus dbus-x11 dbus-user-session gnome-keyring \
    && rm -rf /var/lib/apt/lists/*

# Generate a machine-id so libsecret/keytar can talk to dbus
RUN mkdir -p /var/lib/dbus \
    && dbus-uuidgen > /etc/machine-id \
    && ln -sf /etc/machine-id /var/lib/dbus/machine-id

# # Download and install MultiApps plugin for ARM64
# Download and install MultiApps plugin for ARM64
# RUN cf install-plugin "https://github.com/cloudfoundry/multiapps-cli-plugin/releases/download/v3.5.0/multiapps-plugin.linuxarm64"
# RUN mkdir -p /tmp/cf-plugins && \
# # https://github.com/cloudfoundry/multiapps-cli-plugin/releases/download/v3.0.7/multiapps-plugin.linux.arm64    #
# curl -L "https://github.com/cloudfoundry/multiapps-cli-plugin/releases/download/v3.5.0/multiapps-plugin.linux64" -o /tmp/cf-plugins/multiapps-plugin && \
#     chmod +x /tmp/cf-plugins/multiapps-plugin && \
#     cf install-plugin /tmp/cf-plugins/multiapps-plugin -f && \
#     rm -rf /tmp/cf-plugins

# # Download and install MultiApps plugin for ARM64
# RUN mkdir -p /tmp/cf-plugins && \
#     curl -L "https://github.com/cloudfoundry/multiapps-cli-plugin/releases/download/v3.5.0/multiapps-plugin.linuxarm64" -o /tmp/cf-plugins/multiapps-plugin && \
#     chmod +x /tmp/cf-plugins/multiapps-plugin && \
#     cf install-plugin /tmp/cf-plugins/multiapps-plugin -f && \
#     rm -rf /tmp/cf-plugins

# Install Cloud MTA Build Tool (MBT)
# RUN npm install -g mbt

# Install alternative deployment tools
# RUN npm install -g @sap/cds-dk cf-deploy

# Install Claude Code
# RUN npm install -g @anthropic-ai/claude-code

# Create deployment script that doesn't depend on CF plugins
# RUN echo '#!/bin/bash\nset -e\nmbt build\ncf login -a "$CF_API" -u "$CF_USERNAME" -p "$CF_PASSWORD" -o "$CF_ORG" -s "$CF_SPACE"\ncf push -f gen/mta_archives/*/manifest.yml' > /usr/local/bin/deploy-mta && \
#     chmod +x /usr/local/bin/deploy-mta

# ARG CAPVER="latest"
# RUN npm install -g @sap/cds-dk@$CAPVER

RUN npm install -g @anthropic-ai/claude-code
RUN npm install -g @openai/codex
RUN npm install -g @nestjs/cli

WORKDIR /home/node
