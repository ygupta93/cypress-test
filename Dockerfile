FROM cypress/included:cypress-13.6.5-node-20.11.0-chrome-121.0.6167.184-1-ff-123.0-edge-121.0.2277.128-1

COPY . /app

WORKDIR /app

ENTRYPOINT ["bash"]



