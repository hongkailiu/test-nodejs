#!/bin/bash

	rm -rfv /tmp/hongkailiu.github.io/
	git clone https://github.com/hongkailiu/hongkailiu.github.io.git /tmp/hongkailiu.github.io
	cp -r ./docs/* /tmp/hongkailiu.github.io/
	git -C /tmp/hongkailiu.github.io/ checkout README.md
	git -C /tmp/hongkailiu.github.io/ checkout CNAME
	git -C /tmp/hongkailiu.github.io/ add .
	git -C /tmp/hongkailiu.github.io/ status
	#$(eval COMMIT_MSG := "$(shell git log --oneline -1)")
  readonly COMMIT_MSG="$(git log --oneline -1)"
	git -C /tmp/hongkailiu.github.io/ commit -m $(COMMIT_MSG)
	git -C /tmp/hongkailiu.github.io/ log -2
