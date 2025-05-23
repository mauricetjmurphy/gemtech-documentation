install:
	yarn install

run-tests:
	yarn test

build-dev:
	yarn build:dev
	rm -rf .env

build-stg:
	yarn build:stg
	rm -rf .env

build-prod:
	yarn build:prod
	rm -rf .env

deploy-dev: build-dev
	aws s3 sync --delete build/ s3://dev-docs-bucket-cdn
	aws cloudfront create-invalidation --distribution-id "" --paths '/*'

deploy-stg: build-stg
	aws s3 sync --delete build/ s3://stg-docs-bucket-cdn
	aws cloudfront create-invalidation --distribution-id "" --paths '/*'

deploy-prod: build-prod
	aws s3 sync --delete build/ s3://prod-docs-bucket-cdn
	aws cloudfront create-invalidation --distribution-id "E28FEH48BHRANF" --paths '/*'