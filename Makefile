all: build

build:
	sudo docker run --rm -v "${PWD}":/usr/src/myapp -w /usr/src/myapp node:16-alpine sh -c "cd /usr/src/myapp && pnpm i && pnpm build"
.PHONY: clean
clean:
	rm -rf ./dist
