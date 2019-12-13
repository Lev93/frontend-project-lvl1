install: 
		npm install

start: 
		npx babel-node src/bin/brain-games.js

publish: 
		npm publish --dry-run

lint1: 
		npx eslint src/bin/brain-even.js

lint2: 
		npx eslint src/bin/brain-calc.js

lint3: 
		npx eslint src/bin/brain-gcd.js

lint4: 
		npx eslint src/bin/brain-prime.js

lint5: 
		npx eslint src/bin/brain-progression.js