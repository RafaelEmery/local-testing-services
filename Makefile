db-start:
	@echo "starting database..."
	docker-compose up -d

db-stop:
	@echo "stopping database..."
	docker-compose down

db-restart:
	@echo "restarting database..."
	docker-compose restart

db-logs:
	@echo "showing database logs..."
	docker-compose logs -f local_testing_api_db

db-shell:
	@echo "starting database shell..."
	docker-compose exec local_testing_api_db psql -U local_test -d local_testing_api_db

api-install:
	@echo "installing api dependencies..."
	cd api && npm install && cd ..

api-run:
	@echo "starting api..."
	cd api && npm start

