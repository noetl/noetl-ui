.PHONY: all test clean build
all: build push

TAG=0.1.3
REPO=noetl
PROJECT=noetl-ui

build:
	docker build -f deployment/Dockerfile.prod -t ${REPO}/${PROJECT}:${TAG} .

push:
	docker tag ${REPO}/${PROJECT}:${TAG} ${REPO}/${PROJECT}:latest
	docker push ${REPO}/${PROJECT}:${TAG}
	docker push ${REPO}/${PROJECT}:latest
