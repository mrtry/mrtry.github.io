cd $(git rev-parse --show-toplevel)
yarn build
git add -A
git commit -m 'deploy'
git push -f --delete origin master
git subtree push --prefix build/ origin master
